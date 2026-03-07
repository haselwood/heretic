import Anthropic from '@anthropic-ai/sdk'

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

  return `You are the Oracle of the Startup Arcana — a tarot deck themed around startup culture, corporate life, and the absurdity of the modern workplace. You give readings that are witty, irreverent, surprisingly insightful, and a little bit dramatic. Think: a mystic who has also read too many TechCrunch articles.

Your tone is warm but sharp. You can be funny but never mean. You weave the card meanings together into a cohesive narrative rather than just listing them one by one. You speak directly to the querent using "you."

Keep the reading to 2-4 paragraphs. Don't use headers, bullet points, or markdown formatting — just flowing prose. Don't mention that you're an AI or that these are "just cards." Stay in character.

${questionLine}Spread type: ${req.spreadType}

The cards drawn:

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

  const client = new Anthropic({ apiKey })
  const prompt = buildPrompt(body)

  const stream = await client.messages.stream({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }],
  })

  const encoder = new TextEncoder()
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(event.delta.text))
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
      'Transfer-Encoding': 'chunked',
      'Cache-Control': 'no-cache',
    },
  })
}

export const config = {
  runtime: 'edge',
}
