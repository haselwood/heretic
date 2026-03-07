interface CardPayload {
  name: string
  suit: string
  position: string
  meaning: {
    description: string
    light: string[]
    dark: string[]
  } | null
}

interface ReadingRequest {
  question?: string
  spreadType: string
  cards: CardPayload[]
}

const SPREAD_INSTRUCTIONS: Record<string, string> = {
  single: `Keep it to 3-4 sentences. The user has drawn a single card for a general daily reading. No question was asked — this is a pulse check on the energy of their day.

Card drawn: [CARD NAME] from the [SUIT] suit.

Read the energy of this card as it relates to their day. What is this card activating? How might this energy show up in their work, their interactions, their state of mind? Give both the light and shadow expression of this card — what it looks like when working for them, and what it looks like when working against them. Speak directly to the person as "you."`,

  two: `Keep it to 3-4 sentences. The user is seeking clarity on the following question: [USER QUESTION]

Two cards have been drawn to weigh the light and the dark.

Card 1 (Pro): [CARD NAME] from the [SUIT] suit.
Card 2 (Con): [CARD NAME] from the [SUIT] suit.

Read Card 1 as the argument in favor — the opportunity, the upside, what is working for them. Read Card 2 as the argument against — the risk, the shadow, what could go wrong. Then offer a single closing line that holds both truths together without resolving them too neatly. Speak directly to the person as "you."`,

  three: `This is a Next Step spread — three cards representing Situation, Action, and Outcome. Read them as a narrative arc: where the querent is now, what they should do, and where it leads. Build momentum from card to card. Keep it to 2-3 paragraphs.`,

  standup: `Keep it to 3-4 sentences. The user is seeking clarity on the following question: [USER QUESTION]

Three cards have been drawn in the Standup spread — a daily ritual of reflection disguised as a status update.

Card 1 (Yesterday): [CARD NAME] from the [SUIT] suit.
Card 2 (Today): [CARD NAME] from the [SUIT] suit.
Card 3 (Blockers): [CARD NAME] from the [SUIT] suit.

Read Card 1 as the energy of what has already happened — what was completed, learned, or left unresolved. Read Card 2 as the energy moving through today — what is active, what requires attention. Read Card 3 as the blocking force — what is in the way, what needs to be named before progress is possible. Speak directly to the person as "you."`,

  retro: `The user is seeking clarity on the following question: [USER QUESTION]

Three cards have been drawn in the Retro spread — a structured moment of self-reflection on what is and isn't working.

Card 1 (Start): [CARD NAME] from the [SUIT] suit.
Card 2 (Stop): [CARD NAME] from the [SUIT] suit.
Card 3 (Continue): [CARD NAME] from the [SUIT] suit.

Read Card 1 as what the person needs to introduce into their life or work — a new behavior, mindset, or energy. Read Card 2 as what needs to be released — a pattern, habit, or story that is no longer serving them. Read Card 3 as what is already working and deserves to be protected and sustained. Speak directly to the person as "you." Keep it to 3-4 sentences.`,

  four: `This is a 360 Review spread — four cards representing Your Motivation, External Forces, Ideal Outcome, and Likely Outcome. Read them as a comprehensive assessment: what's driving the querent internally, what forces are acting on them from outside, what the best case looks like, and what's actually most probable. Be honest but not harsh about any gap between ideal and likely. Keep it to 3-4 paragraphs.`,
}

const BASE_PERSONA = `You are the oracle of Startup Arcana — a tarot deck for people who have survived the tech industry. You speak with the dry, knowing wit of someone who has been through three pivots, two reorgs, and one acqui-hire. You are mystical but self-aware, prophetic but never precious. Your readings blend genuine insight with satirical observations about tech culture. You are not mean — you are honest. You see the person clearly and you tell them what they need to hear, wrapped in the language of the oracle and the startup. Keep readings to 3-5 sentences. Never break character.`

function buildPrompt(req: ReadingRequest): string {
  const cardDescriptions = req.cards
    .map((c, i) => {
      const meaningBlock = c.meaning
        ? `Description: ${c.meaning.description}\nLight aspects: ${c.meaning.light.join(', ')}\nDark aspects: ${c.meaning.dark.join(', ')}`
        : 'No meaning data available.'
      return `Card ${i + 1} — Position: "${c.position}"
Name: ${c.name} (${c.suit})
${meaningBlock}`
    })
    .join('\n\n')

  const questionLine = req.question
    ? `The querent's question: "${req.question}"\n\n`
    : ''

  const spreadInstruction = SPREAD_INSTRUCTIONS[req.spreadType] || SPREAD_INSTRUCTIONS.single

  return `${BASE_PERSONA}

${spreadInstruction}

${questionLine}The cards drawn:

${cardDescriptions}

Give the reading now.`
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return new Response('API key not configured', { status: 500 })
  }

  let body: ReadingRequest
  try {
    body = await req.json() as ReadingRequest
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  if (!body.cards || body.cards.length === 0) {
    return new Response('No cards provided', { status: 400 })
  }

  const prompt = buildPrompt(body)

  const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      stream: true,
      messages: [{ role: 'user', content: prompt }],
    }),
  })

  if (!anthropicRes.ok || !anthropicRes.body) {
    const errText = await anthropicRes.text().catch(() => 'Unknown error')
    return new Response(`Anthropic API error: ${anthropicRes.status} ${errText}`, { status: 502 })
  }

  const encoder = new TextEncoder()
  const decoder = new TextDecoder()

  const readable = new ReadableStream({
    async start(controller) {
      const reader = anthropicRes.body!.getReader()
      let buffer = ''

      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split('\n')
          buffer = lines.pop() || ''

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue
            const data = line.slice(6)
            if (data === '[DONE]') continue

            try {
              const event = JSON.parse(data)
              if (
                event.type === 'content_block_delta' &&
                event.delta?.type === 'text_delta' &&
                event.delta?.text
              ) {
                controller.enqueue(encoder.encode(event.delta.text))
              }
            } catch {
              // skip malformed JSON lines
            }
          }
        }
      } catch {
        controller.enqueue(encoder.encode('\n\n[The cosmos encountered an error.]'))
      } finally {
        controller.close()
      }
    },
  })

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
    },
  })
}

export const config = {
  runtime: 'edge',
}
