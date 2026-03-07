import { useRef, useLayoutEffect } from 'react'
import { cn, suitBgClass } from '@/lib/utils'
import { CardImage } from './CardImage'
import type { DealtCard } from '@/types'

const MOBILE_CARD_SIZES: Record<number, string> = {
  1: 'w-[200px] h-[333px]',
  2: 'w-[155px] h-[258px]',
  3: 'w-[105px] h-[175px]',
}

const MOBILE_LABEL_SIZES: Record<number, string> = {
  1: 'max-w-[200px]',
  2: 'max-w-[155px]',
  3: 'max-w-[105px]',
}

interface TarotCardProps {
  dealt: DealtCard
  onFlip: () => void
  onLightbox: () => void
  index: number
  deckRef?: React.RefObject<HTMLDivElement | null>
  totalCards?: number
}

export function TarotCard({ dealt, onFlip, onLightbox, index, deckRef, totalCards = 1 }: TarotCardProps) {
  const { card, position, isFlipped, dealDelay } = dealt
  const cardRef = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    const el = cardRef.current
    if (!deckRef?.current || !el) return

    el.style.animation = 'none'
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    el.offsetHeight

    const deckEl = deckRef.current.querySelector('.deck-origin') as HTMLElement | null
    const sourceRect = deckEl ? deckEl.getBoundingClientRect() : deckRef.current.getBoundingClientRect()
    const cardRect = el.getBoundingClientRect()
    const dx = (sourceRect.left + sourceRect.width / 2) - (cardRect.left + cardRect.width / 2)
    const dy = (sourceRect.top + sourceRect.height / 2) - (cardRect.top + cardRect.height / 2)

    el.style.setProperty('--deal-from-x', `${dx}px`)
    el.style.setProperty('--deal-from-y', `${dy}px`)

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    el.offsetHeight
    el.style.animation = `deal-in 0.55s cubic-bezier(0.22, 0.68, 0.35, 1.0) ${dealDelay}ms both`
  }, [deckRef, dealDelay])

  const handleClick = () => {
    if (!isFlipped) {
      onFlip()
    } else {
      onLightbox()
    }
  }

  return (
    <div className="relative flex flex-col items-center gap-2 sm:gap-3" style={{ zIndex: 50 - index }}>
      <button
        ref={cardRef}
        type="button"
        className={cn(
          'card-container cursor-pointer deal-in',
          MOBILE_CARD_SIZES[totalCards] || MOBILE_CARD_SIZES[3],
          'sm:w-[234px] sm:h-[390px]',
          'bg-transparent border-none p-0 outline-none focus-visible:ring-2 focus-visible:ring-oracle/50 rounded-xl'
        )}
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
      <span className={cn('text-[9px] sm:text-[11px] font-mono text-white uppercase tracking-wider text-center sm:max-w-[234px]', MOBILE_LABEL_SIZES[totalCards] || MOBILE_LABEL_SIZES[3])}>
        {position}
      </span>
    </div>
  )
}
