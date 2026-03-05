import { useEffect, useCallback } from 'react'
import { cn, suitClass } from '@/lib/utils'
import { CardImage } from './CardImage'
import { CARD_MEANINGS } from '@/data/meanings'
import type { TarotCard } from '@/types'

interface LightboxProps {
  card: TarotCard
  onClose: () => void
}

export function Lightbox({ card, onClose }: LightboxProps) {
  const meaning = CARD_MEANINGS[card.id]

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-void/90 backdrop-blur-sm" />

      <div
        className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <CardImage
          src={card.image}
          alt={card.name}
          suit={card.suit}
          className="w-[340px] h-[567px] sm:w-[540px] sm:h-[900px] shrink-0 rounded-xl shadow-2xl shadow-black/50"
        />

        <div className="max-w-sm text-center sm:text-left shrink-0">
          <h3 className={cn(
            'font-serif text-2xl sm:text-3xl font-bold leading-tight mb-2',
            suitClass(card.suit)
          )}>
            {card.name}
          </h3>
          <span className={cn(
            'text-[11px] font-serif uppercase tracking-widest opacity-50',
            suitClass(card.suit)
          )}>
            {card.suit}
          </span>

          {meaning && (
            <div className="mt-5">
              <div className={cn('w-10 h-px mb-4 opacity-20 bg-current', 'mx-auto sm:mx-0')} />
              <p className="text-[14px] sm:text-[15px] leading-relaxed text-phantom/85">
                &ldquo;{meaning}&rdquo;
              </p>
            </div>
          )}

          <button
            onClick={onClose}
            className={cn(
              'mt-6 px-5 py-2 rounded-lg border border-sigil/40',
              'text-[12px] font-serif text-whisper/50 hover:text-oracle',
              'transition-colors uppercase tracking-widest'
            )}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
