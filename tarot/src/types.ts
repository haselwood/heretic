export type Suit = 'ARCHETYPE' | 'MINDSET' | 'ARTIFACTS' | 'VIBES'

export interface TarotCard {
  id: string
  name: string
  suit: Suit
  image: string
}

export type SpreadType = 'single' | 'two' | 'three' | 'standup' | 'retro' | 'five'

export interface SpreadConfig {
  type: SpreadType
  label: string
  description: string
  count: number
  positions: string[]
}

export interface DealtCard {
  card: TarotCard
  position: string
  isFlipped: boolean
  reading: string | null
  isLoadingReading: boolean
  dealDelay: number
}

export type AppPhase = 'select' | 'shuffling' | 'dealt' | 'reading' | 'browse'
