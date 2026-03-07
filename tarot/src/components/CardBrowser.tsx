import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ARCHETYPE, MINDSET, ARTIFACTS, VIBES } from '@/data/cards'
import { cn, suitClass } from '@/lib/utils'
import { CardImage } from './CardImage'
import { Lightbox } from './Lightbox'
import { ActionButton } from './ActionButton'
import { PixelMoth } from './PixelMoth'
import { HomeBg } from './HomeBg'
import type { Suit, TarotCard } from '@/types'

const SUIT_SLUGS: Record<string, Suit> = {
  archetypes: 'ARCHETYPE',
  mindset: 'MINDSET',
  artifacts: 'ARTIFACTS',
  vibes: 'VIBES',
}

const SUIT_TO_SLUG: Record<Suit, string> = {
  ARCHETYPE: 'archetypes',
  MINDSET: 'mindset',
  ARTIFACTS: 'artifacts',
  VIBES: 'vibes',
}

const SUIT_GLOW: Record<Suit, string> = {
  ARCHETYPE: '0 0 12px rgba(201,160,240,0.35), 0 0 24px rgba(201,160,240,0.18)',
  MINDSET: '0 0 12px rgba(96,160,224,0.35), 0 0 24px rgba(96,160,224,0.18)',
  ARTIFACTS: '0 0 12px rgba(96,208,144,0.35), 0 0 24px rgba(96,208,144,0.18)',
  VIBES: '0 0 12px rgba(230,196,74,0.35), 0 0 24px rgba(230,196,74,0.18)',
}

const SUIT_HEX: Record<Suit, string> = {
  ARCHETYPE: '#c9a0f0',
  MINDSET: '#60a0e0',
  ARTIFACTS: '#60d090',
  VIBES: '#e6c44a',
}

const SUITS: { key: Suit; label: string; description: string; cards: TarotCard[] }[] = [
  { key: 'ARCHETYPE', label: 'Archetypes', description: 'These 16 characters represent the people you meet up and down the ladder of your career. Each figure has a light and dark side that can either help you or cause you to wish you\'d gone into the trades.', cards: ARCHETYPE },
  { key: 'MINDSET', label: 'Mindset', description: 'Mindset cards represent the mental states, attitudes, and inner narratives that shape how you show up at work. These cards remind you of the power that comes from your own thought process.', cards: MINDSET },
  { key: 'ARTIFACTS', label: 'Artifacts', description: 'Artifact cards represent the tangible tools, documents, deliverables you face in your day to day. Each artifact holds power over your fate as they can be executed to perfection or the subject of your late night ruminations.', cards: ARTIFACTS },
  { key: 'VIBES', label: 'Vibes', description: 'Vibe cards represent the intangible energies, cultural currents, and cosmic moods that permeate the typical startup culture. They are the things you feel but can never put on a slide.', cards: VIBES },
]


export function CardBrowser() {
  const { suit: suitParam } = useParams<{ suit?: string }>()
  const navigate = useNavigate()
  const activeSuit = (suitParam && SUIT_SLUGS[suitParam]) || 'ARCHETYPE'
  const [lightboxCard, setLightboxCard] = useState<TarotCard | null>(null)

  const currentSuit = SUITS.find(s => s.key === activeSuit)!

  return (
    <>
    <HomeBg noGlitch suitColor={activeSuit === 'ARCHETYPE' ? undefined : SUIT_HEX[activeSuit]} />
    <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="mb-[12px] pt-6 sm:mb-6 sm:pt-12">
        <ActionButton onClick={() => navigate('/')} className="w-full sm:w-auto">
          &larr; Back
        </ActionButton>
        <h2
          className="font-serif text-[28px] sm:text-4xl text-white tracking-wide font-bold transition-all duration-700 text-center mt-[18px] sm:mt-5"
          style={{
            textShadow: `0 0 12px ${SUIT_HEX[activeSuit]}B3, 0 0 35px ${SUIT_HEX[activeSuit]}80, 0 0 70px ${SUIT_HEX[activeSuit]}40`,
          }}
        >
          The Guidebook
        </h2>
      </div>

      {/* Suit tabs */}
      <div className="mb-4 sm:mb-6">
        {/* Mobile: vertical stack */}
        <div className="relative flex flex-col sm:hidden w-full bg-black/25 border border-sigil/30 p-1">
          <div
            className="absolute left-0.5 right-0.5 bg-[#0a0612] border border-sigil/50 transition-all duration-250 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"
            style={{
              height: `calc(${100 / SUITS.length}% - 4px)`,
              top: `calc(${(SUITS.findIndex(s => s.key === activeSuit) / SUITS.length) * 100}% + 2px)`,
              boxShadow: SUIT_GLOW[activeSuit],
            }}
          />
          {SUITS.map(({ key, label }) => {
            const nudge = key === 'ARCHETYPE' ? 'pt-0'
              : key === 'MINDSET' ? 'pt-[3px]'
              : key === 'ARTIFACTS' ? 'pt-[4px]'
              : 'pt-[8px]'
            return (
              <Link
                key={key}
                to={`/guidebook/${SUIT_TO_SLUG[key]}`}
                className={cn(
                  'relative z-10 flex items-center justify-center h-[44px] text-[16px] leading-none font-serif tracking-wider text-center no-underline',
                  nudge,
                  'transition-colors duration-200',
                  activeSuit === key
                    ? cn('shimmer-text', suitClass(key))
                    : 'text-ghost/60 hover:text-white hover:[text-shadow:0_0_8px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.4)]'
                )}
              >
                {label}
              </Link>
            )
          })}
        </div>
        {/* Desktop: horizontal row */}
        <div className="relative hidden sm:flex w-full bg-black/25 border border-sigil/30 p-1">
          <div
            className="absolute top-0.5 bottom-0.5 bg-[#0a0612] border border-sigil/50 transition-all duration-250 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"
            style={{
              width: `calc(${100 / SUITS.length}% - 4px)`,
              left: `calc(${(SUITS.findIndex(s => s.key === activeSuit) / SUITS.length) * 100}% + 2px)`,
              boxShadow: SUIT_GLOW[activeSuit],
            }}
          />
          {SUITS.map(({ key, label }) => (
            <Link
              key={key}
              to={`/guidebook/${SUIT_TO_SLUG[key]}`}
              className={cn(
                'relative z-10 flex-1 pt-3.5 pb-2 text-[18px] leading-none font-serif tracking-wider text-center no-underline',
                'transition-colors duration-200',
                activeSuit === key
                  ? cn('shimmer-text', suitClass(key))
                  : 'text-ghost/60 hover:text-white hover:[text-shadow:0_0_8px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.4)]'
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Suit explanation card */}
      <div className="relative mb-4 px-4 py-4 sm:mb-6 sm:px-8 sm:py-6 border border-sigil/60 overflow-hidden bg-black/40">
        <div className="flex flex-col items-center text-center relative z-1">
          <p className="font-mono text-[12px] sm:text-[14px] text-white leading-relaxed max-w-[700px]">
            {currentSuit.description}
          </p>
        </div>
      </div>

      {/* Card gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
        {currentSuit.cards.map((card) => (
          <button
            type="button"
            key={card.id}
            onClick={() => setLightboxCard(card)}
            className={cn(
              'card-glow-wrap group relative w-full cursor-pointer overflow-hidden rounded-md',
              'transition-all duration-300 hover:scale-[1.02]',
              'focus-visible:ring-2 focus-visible:ring-purple-400/50'
            )}
          >
            <CardImage
              src={card.image}
              alt={card.name}
              suit={card.suit}
              className="w-full aspect-[5/8.33] object-cover rounded-md transition-[filter] duration-300 group-hover:brightness-110"
            />
            <div className="card-shimmer-overlay" />
            <div className="card-border-shimmer" />
          </button>
        ))}
      </div>

      {/* Footer */}
      <footer className="pt-6 sm:pt-10 pb-6 sm:pb-8 text-center w-full max-w-[528px] mx-auto px-2 sm:px-0">
        <div className="flex items-center justify-center gap-3">
          <Link
            to="/"
            className="font-mono text-[14px] text-white tracking-[0.055em] underline transition-all duration-200 hover:[text-shadow:0_0_8px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.4)]"
          >
            Spreads
          </Link>
          <span className="text-white/60 text-[7px]">◆</span>
          <Link
            to="/oracle"
            className="font-mono text-[14px] text-white tracking-[0.055em] underline transition-all duration-200 hover:[text-shadow:0_0_8px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.4)]"
          >
            The Oracle
          </Link>
        </div>
        <p className="text-[11px] sm:text-[14px] text-whisper tracking-[0.08em] uppercase font-mono mt-4">
          64 cards &middot; 4 suits &middot; 0 venture backing
        </p>
        <p className="text-[12px] text-whisper/85 tracking-widest mt-2 text-center uppercase font-mono">
          Made by Heather Hex
        </p>
        <div className="flex justify-center mt-4">
          <PixelMoth />
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxCard && (
        <Lightbox
          card={lightboxCard}
          onClose={() => setLightboxCard(null)}
        />
      )}
    </div>
    </>
  )
}
