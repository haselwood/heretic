import { cn, suitBgClass } from '@/lib/utils'
import { CardImage } from './CardImage'
import type { DealtCard } from '@/types'

interface TarotCardProps {
  dealt: DealtCard
  onFlip: () => void
  onLightbox: () => void
  index: number
}

export function TarotCard({ dealt, onFlip, onLightbox, index }: TarotCardProps) {
  const { card, position, isFlipped, dealDelay } = dealt

  const handleClick = () => {
    if (!isFlipped) {
      onFlip()
    } else {
      onLightbox()
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        className={cn(
          'card-container cursor-pointer deal-in',
          'w-[140px] h-[234px] sm:w-[180px] sm:h-[300px]',
          'bg-transparent border-none p-0 outline-none focus-visible:ring-2 focus-visible:ring-oracle/50 rounded-xl'
        )}
        style={{ animationDelay: `${dealDelay}ms`, '--deal-rotate': `${(index % 2 === 0 ? 1 : -1) * 3}deg` } as React.CSSProperties}
        onClick={handleClick}
        aria-label={isFlipped ? `${card.name} — ${card.suit}` : `Reveal card in ${position} position`}
      >
        <div className={cn('card-inner', isFlipped && 'flipped')}>
          {/* Back */}
          <div className="card-face card-back card-back-pattern card-back-border flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-3 border border-oracle/30 rounded-lg" />
              <div className="absolute inset-5 border border-oracle/15 rounded-md" />
              <div className="text-oracle/60 font-serif text-2xl tracking-widest select-none">
                &#x2726;
              </div>
            </div>
          </div>

          {/* Front */}
          <div className={cn(
            'card-face card-front flex flex-col items-center justify-between',
            'bg-abyss border overflow-hidden',
            suitBgClass(card.suit)
          )}>
            <CardImage
              src={card.image}
              alt={card.name}
              suit={card.suit}
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </button>

      {/* Position label */}
      <span className="text-[10px] sm:text-[11px] font-mono text-whisper/70 uppercase tracking-wider text-center max-w-[140px] sm:max-w-[180px]">
        {position}
      </span>
    </div>
  )
}
