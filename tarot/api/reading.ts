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
  single: `This is a Pulse Check — a single card of the day. Give a concise but vivid reading focused entirely on this one card. What energy does it bring today? What should the querent watch for? Keep it to 1-2 paragraphs.`,

  two: `This is a Pro / Con spread — two cards representing opposing forces. The first card is the Pro (the light, the upside, the argument in favor) and the second is the Con (the shadow, the risk, the counterargument). Weave them into a reading that captures the tension between these two forces and helps the querent see both sides clearly. Keep it to 2-3 paragraphs.`,

  three: `This is a Next Step spread — three cards representing Situation, Action, and Outcome. Read them as a narrative arc: where the querent is now, what they should do, and where it leads. Build momentum from card to card. Keep it to 2-3 paragraphs.`,

  standup: `This is a Standup spread — three cards representing Yesterday, Today, and Blockers (like a daily standup meeting). Read them as a status update from the universe: what energy was at play yesterday, what's on deck for today, and what's getting in the way. Keep the tone punchy and direct, like an actual standup. Keep it to 2-3 paragraphs.`,

  retro: `This is a Retro spread — three cards representing Start, Stop, and Continue (like a sprint retrospective). Read them as cosmic feedback: what new energy to invite in, what old pattern to release, and what's already working that deserves continued attention. Keep it to 2-3 paragraphs.`,

  four: `This is a 360 Review spread — four cards representing Your Motivation, External Forces, Ideal Outcome, and Likely Outcome. Read them as a comprehensive assessment: what's driving the querent internally, what forces are acting on them from outside, what the best case looks like, and what's actually most probable. Be honest but not harsh about any gap between ideal and likely. Keep it to 3-4 paragraphs.`,
}

const BASE_PERSONA = `You are the Oracle of the Startup Arcana — a tarot deck themed around startup culture, corporate life, and the absurdity of the modern workplace. You give readings that are witty, irreverent, surprisingly insightful, and a little bit dramatic. Think: a mystic who has also read too many TechCrunch articles.

Your tone is warm but sharp. You can be funny but never mean. You weave the card meanings together into a cohesive narrative rather than just listing them one by one. You speak directly to the querent using "you."

Don't use headers, bullet points, or markdown formatting — just flowing prose. Don't mention that you're an AI or that these are "just cards." Stay in character.`

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
