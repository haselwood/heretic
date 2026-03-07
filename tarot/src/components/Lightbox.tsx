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
        className="relative z-10 flex flex-col max-h-[90vh] overflow-y-auto border border-sigil/30 bg-obsidian/60 backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button — top right */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-white/10 border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-colors text-[16px]"
          aria-label="Close"
        >
          &times;
        </button>

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 p-6 sm:p-10">
          <CardImage
            src={card.image}
            alt={card.name}
            suit={card.suit}
            className="w-auto max-h-[50vh] sm:max-h-[75vh] max-w-[55vw] sm:max-w-[45vw] rounded-xl shadow-2xl shadow-black/50"
          />

          <div className="min-w-0 text-center sm:text-left break-words">
            <h3 className={cn(
              'font-serif text-2xl sm:text-3xl font-bold leading-tight mb-2',
              suitClass(card.suit)
            )}>
              {card.name}
            </h3>
            <span className="text-[19px] font-mono uppercase tracking-widest text-white/50">
              {card.suit}
            </span>

            {meaning && (
              <div className="mt-5">
                <p className="text-[14px] leading-relaxed text-phantom/85 tracking-wide mb-4">
                  {meaning.description}
                </p>
                <div className="space-y-3">
                  <div>
                    <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-white/10 border border-white/20 text-white">Light</span>
                    <p className="mt-2 text-[14px] font-sans text-phantom/80 tracking-wide">{meaning.light.join(', ')}</p>
                  </div>
                  <div>
                    <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-white/10 border border-white/20 text-white">Dark</span>
                    <p className="mt-2 text-[14px] font-sans text-phantom/80 tracking-wide">{meaning.dark.join(', ')}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
