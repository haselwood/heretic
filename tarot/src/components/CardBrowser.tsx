import { useState } from 'react'
import { ARCHETYPE, MINDSET, ARTIFACTS, VIBES } from '@/data/cards'
import { CARD_MEANINGS } from '@/data/meanings'
import { cn, suitClass } from '@/lib/utils'
import { CardImage } from './CardImage'
import { Lightbox } from './Lightbox'
import { ActionButton } from './ActionButton'
import type { Suit, TarotCard } from '@/types'

interface CardBrowserProps {
  onBack: () => void
}

const SUITS: { key: Suit; label: string; cards: TarotCard[] }[] = [
  { key: 'ARCHETYPE', label: 'Archetypes', cards: ARCHETYPE },
  { key: 'MINDSET', label: 'Mindset', cards: MINDSET },
  { key: 'ARTIFACTS', label: 'Artifacts', cards: ARTIFACTS },
  { key: 'VIBES', label: 'Vibes', cards: VIBES },
]


export function CardBrowser({ onBack }: CardBrowserProps) {
  const [activeSuit, setActiveSuit] = useState<Suit>('ARCHETYPE')
  const [lightboxCard, setLightboxCard] = useState<TarotCard | null>(null)

  const currentSuit = SUITS.find(s => s.key === activeSuit)!

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <ActionButton onClick={onBack}>
          &larr; Back
        </ActionButton>
        <h2 className="font-serif text-2xl sm:text-3xl text-white tracking-wide">
          The Guidebook
        </h2>
        <div className="w-[85px]" />
      </div>

      {/* Suit tabs — sticky, full-width */}
      <div className="sticky top-0 z-20 mb-6 py-3 bg-void/80 backdrop-blur-md -mx-4 px-4">
        <div className="flex w-full border-b border-sigil/30">
          {SUITS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveSuit(key)}
              className={cn(
                'flex-1 py-2.5 text-[16px] sm:text-[17px] font-serif tracking-wider',
                'transition-all duration-200 border-b-2 -mb-px',
                activeSuit === key
                  ? cn('border-current', suitClass(key))
                  : 'border-transparent text-whisper/30 hover:text-whisper/60'
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Card grid — 1 col mobile, 2 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {currentSuit.cards.map((card, i) => {
          const meaning = CARD_MEANINGS[card.id]

          return (
            <button
              type="button"
              key={card.id}
              onClick={() => setLightboxCard(card)}
              className={cn(
                'card-glow-wrap relative w-full rounded-lg border transition-all duration-300 cursor-pointer text-left overflow-hidden',
                'border-sigil/15 bg-obsidian/20',
                'focus-visible:ring-2 focus-visible:ring-purple-400/50'
              )}
            >
              <div className="flex items-start gap-6 sm:gap-8 p-6">
                <CardImage
                  src={card.image}
                  alt={card.name}
                  suit={card.suit}
                  className="w-[144px] h-[240px] sm:w-[168px] sm:h-[280px] shrink-0 rounded-md"
                />

                <div className="flex-1 min-w-0 py-1">
                  <span className={cn(
                    'font-serif text-[15px] sm:text-[17px]',
                    suitClass(card.suit), 'opacity-60'
                  )}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={cn(
                    'font-serif text-xl sm:text-2xl font-bold leading-tight mt-0.5',
                    suitClass(card.suit)
                  )}>
                    {card.name}
                  </h3>

                  <span className={cn(
                    'text-[12px] sm:text-[13px] font-serif uppercase tracking-widest',
                    suitClass(card.suit), 'opacity-50'
                  )}>
                    {card.suit}
                  </span>

                  {meaning && (
                    <div className="mt-3 space-y-3">
                      <div>
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-white/10 border border-white/20 text-white">Light</span>
                        <p className="mt-2 text-[13px] font-sans text-phantom/80">{meaning.light.join(', ')}</p>
                      </div>
                      <div>
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-white/10 border border-white/20 text-white">Dark</span>
                        <p className="mt-2 text-[13px] font-sans text-phantom/80">{meaning.dark.join(', ')}</p>
                      </div>
                      <p className="mt-1 text-[13px] sm:text-[14px] leading-relaxed text-phantom/75">
                        {meaning.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Lightbox */}
      {lightboxCard && (() => {
        const idx = currentSuit.cards.findIndex(c => c.id === lightboxCard.id)
        const allCards = currentSuit.cards
        return (
          <Lightbox
            card={lightboxCard}
            onClose={() => setLightboxCard(null)}
            onPrev={idx > 0 ? () => setLightboxCard(allCards[idx - 1]) : undefined}
            onNext={idx < allCards.length - 1 ? () => setLightboxCard(allCards[idx + 1]) : undefined}
          />
        )
      })()}
    </div>
  )
}
