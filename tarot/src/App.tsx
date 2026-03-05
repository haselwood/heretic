import { useState, useCallback } from 'react'
import { SpreadSelector } from '@/components/SpreadSelector'
import { ShuffleAnimation } from '@/components/ShuffleAnimation'
import { SpreadLayout } from '@/components/SpreadLayout'
import { CardBrowser } from '@/components/CardBrowser'
import { Lightbox } from '@/components/Lightbox'
import { shuffleDeck, SPREAD_CONFIGS } from '@/data/cards'
import type { SpreadType, DealtCard, AppPhase, TarotCard } from '@/types'
import { cn } from '@/lib/utils'

function App() {
  const [phase, setPhase] = useState<AppPhase>('select')
  const [spreadType, setSpreadType] = useState<SpreadType>('single')
  const [dealtCards, setDealtCards] = useState<DealtCard[]>([])
  const [lightboxCard, setLightboxCard] = useState<TarotCard | null>(null)

  const handleSelectSpread = useCallback((type: SpreadType) => {
    setSpreadType(type)
    setPhase('shuffling')
  }, [])

  const handleShuffleComplete = useCallback(() => {
    const config = SPREAD_CONFIGS[spreadType]
    const deck = shuffleDeck()
    const dealt: DealtCard[] = deck.slice(0, config.count).map((card, i) => ({
      card,
      position: config.positions[i],
      isFlipped: false,
      reading: null,
      isLoadingReading: false,
      dealDelay: i * 200,
    }))
    setDealtCards(dealt)
    setPhase('dealt')
  }, [spreadType])

  const handleFlip = useCallback((index: number) => {
    setDealtCards(prev => prev.map((d, i) =>
      i === index ? { ...d, isFlipped: true } : d
    ))
  }, [])

  const handleLightbox = useCallback((index: number) => {
    const dealt = dealtCards[index]
    if (dealt) setLightboxCard(dealt.card)
  }, [dealtCards])

  const handleNewReading = useCallback(() => {
    setDealtCards([])
    setPhase('select')
  }, [])

  return (
    <div className="min-h-screen relative">
      <div className="flex flex-col items-center px-4 py-8 sm:py-12 min-h-screen">
        {/* Header (shown after selection) */}
        {phase !== 'select' && phase !== 'browse' && (
          <header className="mb-8 sm:mb-12 text-center">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
              Startup Arcana
            </h1>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-oracle/30 to-transparent mx-auto mt-3" />
          </header>
        )}

        {/* Main content */}
        <main className={cn(
          'flex-1 flex flex-col items-center w-full max-w-[1000px]',
          phase !== 'browse' && 'justify-center'
        )}>
          {phase === 'select' && (
            <SpreadSelector onSelect={handleSelectSpread} onBrowse={() => setPhase('browse')} />
          )}

          {phase === 'browse' && (
            <CardBrowser onBack={() => setPhase('select')} />
          )}

          {phase === 'shuffling' && (
            <ShuffleAnimation onComplete={handleShuffleComplete} />
          )}

          {(phase === 'dealt' || phase === 'reading') && (
            <div className="flex flex-col items-center gap-8 w-full">
              <div className="text-center space-y-1">
                <p className="text-[11px] font-mono text-whisper/40 uppercase tracking-[0.15em]">
                  {SPREAD_CONFIGS[spreadType].label} — {SPREAD_CONFIGS[spreadType].description}
                </p>
              </div>

              <SpreadLayout
                cards={dealtCards}
                spreadType={spreadType}
                onFlip={handleFlip}
                onLightbox={handleLightbox}
              />

              <button
                onClick={handleNewReading}
                className={cn(
                  'mt-8 px-6 py-2.5 rounded-lg border border-sigil/60',
                  'bg-obsidian/50 hover:bg-ritual/60 hover:border-oracle/40',
                  'text-[13px] font-serif text-whisper/60 hover:text-oracle',
                  'transition-all duration-300 uppercase tracking-widest',
                  'hover:shadow-[0_0_20px_rgba(201,162,39,0.08)]'
                )}
              >
                &#x21bb; New Reading
              </button>
            </div>
          )}
        </main>

        {/* Subtle footer */}
        <footer className="mt-auto pt-8">
          <p className="text-[10px] font-mono text-whisper/15 tracking-widest uppercase">
            64 cards &middot; 4 suits &middot; 0 venture backing
          </p>
        </footer>
      </div>

      {lightboxCard && (
        <Lightbox card={lightboxCard} onClose={() => setLightboxCard(null)} />
      )}
    </div>
  )
}

export default App
