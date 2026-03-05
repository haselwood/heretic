import { TarotCard } from './TarotCard'
import type { DealtCard, SpreadType } from '@/types'
import { cn } from '@/lib/utils'

interface SpreadLayoutProps {
  cards: DealtCard[]
  spreadType: SpreadType
  onFlip: (index: number) => void
  onLightbox: (index: number) => void
}

export function SpreadLayout({ cards, spreadType, onFlip, onLightbox }: SpreadLayoutProps) {
  if (spreadType === 'five') {
    return <FiveCard cards={cards} onFlip={onFlip} onLightbox={onLightbox} />
  }

  return (
    <div className={cn(
      'flex flex-wrap justify-center gap-4 sm:gap-8',
      spreadType === 'single' && 'max-w-[300px]',
      spreadType === 'two' && 'max-w-[500px]',
      spreadType === 'three' && 'max-w-[700px]',
    )}>
      {cards.map((dealt, i) => (
        <TarotCard
          key={dealt.card.id}
          dealt={dealt}
          index={i}
          onFlip={() => onFlip(i)}
          onLightbox={() => onLightbox(i)}
        />
      ))}
    </div>
  )
}

function FiveCard({ cards, onFlip, onLightbox }: {
  cards: DealtCard[]
  onFlip: (index: number) => void
  onLightbox: (index: number) => void
}) {
  /*
    Five Card Decision Spread (cross shape):
      0: Your Motivation (top)
      1: Ideal Outcome (center)
      2: Your Values (bottom)
      3: Option 1 Likely Outcome (left)
      4: Option 2 Likely Outcome (right)
  */

  const renderCard = (index: number) =>
    cards[index] && (
      <TarotCard
        dealt={cards[index]}
        index={index}
        onFlip={() => onFlip(index)}
        onLightbox={() => onLightbox(index)}
      />
    )

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Top: Card 0 */}
      {renderCard(0)}

      {/* Middle row: Card 3 (left), Card 1 (center), Card 4 (right) */}
      <div className="flex items-center gap-4 sm:gap-8">
        {renderCard(3)}
        {renderCard(1)}
        {renderCard(4)}
      </div>

      {/* Bottom: Card 2 */}
      {renderCard(2)}
    </div>
  )
}
