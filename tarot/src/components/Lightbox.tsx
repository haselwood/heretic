import { useEffect, useCallback } from 'react'
import { cn, suitClass } from '@/lib/utils'
import { CardImage } from './CardImage'
import { CARD_MEANINGS } from '@/data/meanings'
import type { TarotCard } from '@/types'

interface LightboxProps {
  card: TarotCard
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
}

export function Lightbox({ card, onClose, onPrev, onNext }: LightboxProps) {
  const meaning = CARD_MEANINGS[card.id]

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft' && onPrev) onPrev()
    if (e.key === 'ArrowRight' && onNext) onNext()
  }, [onClose, onPrev, onNext])

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
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-white/10 border border-white/20 text-white">Light</span>
                    <p className="mt-2 text-[13px] font-sans text-phantom/80">{meaning.light.join(', ')}</p>
                  </div>
                  <div>
                    <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-white/10 border border-white/20 text-white">Dark</span>
                    <p className="mt-2 text-[13px] font-sans text-phantom/80">{meaning.dark.join(', ')}</p>
                  </div>
                </div>
                <p className="text-[14px] sm:text-[15px] leading-relaxed text-phantom/85">
                  {meaning.description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Prev / Next — full width bottom bar */}
        {(onPrev || onNext) && (
          <div className="flex items-center gap-3 px-6 sm:px-10 pb-6">
            {onPrev ? (
              <button type="button" onClick={onPrev} className="flex-1 py-3 border border-sigil/50 bg-obsidian/50 text-[13px] font-mono text-white hover:bg-white/10 hover:border-white/30 transition-all">
                &larr; Prev
              </button>
            ) : (
              <div className="flex-1" />
            )}
            {onNext ? (
              <button type="button" onClick={onNext} className="flex-1 py-3 border border-sigil/50 bg-obsidian/50 text-[13px] font-mono text-white hover:bg-white/10 hover:border-white/30 transition-all">
                Next &rarr;
              </button>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
