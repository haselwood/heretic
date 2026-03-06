import { useState, useCallback, useRef } from 'react'
import { Routes, Route, Navigate, useNavigate, useParams, Link } from 'react-router-dom'
import { SpreadSelector } from '@/components/SpreadSelector'
import { ShuffleAnimation } from '@/components/ShuffleAnimation'
import { SpreadLayout } from '@/components/SpreadLayout'
import { CardBrowser } from '@/components/CardBrowser'
import { Lightbox } from '@/components/Lightbox'
import { DeckPile } from '@/components/DeckPile'
import { ActionButton } from '@/components/ActionButton'
import { HomeBg } from '@/components/HomeBg'
import { shuffleDeck, SPREAD_CONFIGS } from '@/data/cards'
import type { SpreadType, DealtCard, TarotCard } from '@/types'

const VALID_SPREADS = new Set<string>(Object.keys(SPREAD_CONFIGS))

function HomePage() {
  return (
    <>
      <HomeBg />
      <div className="relative z-10 flex flex-col items-center justify-start pt-[5vh] pb-12 sm:justify-center sm:py-12 px-4 min-h-screen">
        <main className="flex flex-col items-center w-full max-w-[1200px]">
          <SpreadSelector />
        </main>
        <footer className="pt-5 sm:pt-10 text-center w-full max-w-[528px] px-2 sm:px-0">
          <Link
            to="/guidebook/archetypes"
            className="group flex items-center justify-center gap-2 w-full px-4 py-3 mb-4 border border-sigil/50 no-underline bg-obsidian/50 hover:bg-whisper/10 hover:border-whisper/30 transition-all duration-200"
          >
            <span className="font-mono text-[12px] text-white tracking-[0.055em]">
              Deck Guidebook
            </span>
          </Link>
          <p className="text-[11px] sm:text-[14px] text-whisper tracking-[0.08em] uppercase font-mono">
            64 cards &middot; 4 suits &middot; 0 venture backing
          </p>
          <p className="text-[12px] text-whisper/85 tracking-widest mt-2 text-center uppercase font-mono">
            Made by Heather Hex
          </p>
        </footer>
      </div>
    </>
  )
}

function SpreadPage() {
  const navigate = useNavigate()
  const { type: typeParam } = useParams<{ type: string }>()
  const spreadType = (typeParam && VALID_SPREADS.has(typeParam) ? typeParam : 'single') as SpreadType

  const [phase, setPhase] = useState<'shuffling' | 'ready' | 'dealt' | 'reading'>('shuffling')
  const [deck, setDeck] = useState<TarotCard[]>(() => shuffleDeck())
  const [dealtCards, setDealtCards] = useState<DealtCard[]>([])
  const [lightboxCard, setLightboxCard] = useState<TarotCard | null>(null)
  const [isShuffling, setIsShuffling] = useState(false)
  const [question, setQuestion] = useState('')
  const deckRef = useRef<HTMLDivElement>(null)

  const handleInitialShuffleComplete = useCallback(() => {
    setDeck(shuffleDeck())
    setPhase('ready')
  }, [])

  const handleShuffle = useCallback(() => {
    setDealtCards([])
    setIsShuffling(true)
    setPhase('ready')
  }, [])

  const handleDeckShuffleComplete = useCallback(() => {
    setDeck(shuffleDeck())
    setIsShuffling(false)
  }, [])

  const handleDeal = useCallback(() => {
    const config = SPREAD_CONFIGS[spreadType]
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
  }, [spreadType, deck])

  const handleFlip = useCallback((index: number) => {
    setDealtCards(prev => prev.map((d, i) =>
      i === index ? { ...d, isFlipped: true } : d
    ))
  }, [])

  const handleLightbox = useCallback((index: number) => {
    const dealt = dealtCards[index]
    if (dealt) setLightboxCard(dealt.card)
  }, [dealtCards])

  return (
    <>
      <div className="flex flex-col items-center px-4 py-8 sm:py-12 min-h-screen">
        {(phase === 'ready' || phase === 'dealt' || phase === 'reading') && (
          <div className="sticky top-0 z-30 w-full max-w-[1200px] mb-10">
            <div className="flex justify-center mb-6">
              <ActionButton onClick={() => navigate('/')}>
                &larr; New Spread
              </ActionButton>
            </div>
            <div className="flex flex-col items-center bg-obsidian/80 backdrop-blur-md border border-sigil/30 py-6" style={{ boxShadow: '0 8px 32px rgba(130, 100, 200, 0.08), 0 4px 16px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-[20px] font-serif text-white tracking-wide">
                {SPREAD_CONFIGS[spreadType].label}
              </p>
              <span className="text-oracle/50 text-[10px] my-1">&#x2726;</span>
              <p className="text-[14px] font-mono text-white">
                {SPREAD_CONFIGS[spreadType].description}
              </p>
              <div className="mt-4 w-full max-w-md px-4">
                <input
                  type="text"
                  value={question}
                  onChange={e => setQuestion(e.target.value)}
                  placeholder="Type your question for the universe..."
                  className="w-full px-4 py-3 border border-sigil/60 bg-obsidian/50 text-white text-[14px] font-mono placeholder:text-whisper/50 focus:outline-none focus:border-whisper/50 transition-colors text-center"
                />
              </div>
            </div>
          </div>
        )}

        <main className="flex-1 flex flex-col items-center w-full max-w-[1200px]">
          {phase === 'shuffling' && (
            <ShuffleAnimation onComplete={handleInitialShuffleComplete} />
          )}

          {phase === 'ready' && (
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="flex items-start justify-center gap-16 sm:gap-20 w-full">
                <div className="flex flex-col items-center gap-4 w-[180px] sm:w-[234px]">
                  <div ref={deckRef}>
                    <DeckPile remaining={64} shuffling={isShuffling} onShuffleComplete={handleDeckShuffleComplete} onClickShuffle={handleShuffle} />
                  </div>
                  <div className="flex gap-2 w-full">
                    <ActionButton variant="half" onClick={handleShuffle} disabled={isShuffling}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/></svg>
                      Shuffle
                    </ActionButton>
                    <ActionButton variant="half" onClick={handleDeal} disabled={isShuffling}>
                      Deal &rarr;
                    </ActionButton>
                  </div>
                </div>
                <SpreadLayout
                  cards={[]}
                  spreadType={spreadType}
                  onFlip={() => {}}
                  onLightbox={() => {}}
                  placeholder
                  deckRef={deckRef}
                  onDeal={handleDeal}
                />
              </div>
            </div>
          )}

          {(phase === 'dealt' || phase === 'reading') && (
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="flex items-start justify-center gap-16 sm:gap-20 w-full">
                <div className="flex flex-col items-center gap-4 w-[180px] sm:w-[234px]">
                  <div ref={deckRef}>
                    <DeckPile remaining={64 - dealtCards.length} shuffling={isShuffling} onShuffleComplete={handleDeckShuffleComplete} onClickShuffle={handleShuffle} />
                  </div>
                  <div className="flex gap-2 w-full">
                    <ActionButton variant="half" onClick={handleShuffle} disabled={isShuffling}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/></svg>
                      Shuffle
                    </ActionButton>
                    <ActionButton variant="half" onClick={handleDeal} disabled={isShuffling || dealtCards.length > 0}>
                      Deal &rarr;
                    </ActionButton>
                  </div>
                </div>
                <SpreadLayout
                  cards={dealtCards}
                  spreadType={spreadType}
                  onFlip={handleFlip}
                  onLightbox={handleLightbox}
                  deckRef={deckRef}
                />
              </div>
            </div>
          )}
        </main>
      </div>

      {lightboxCard && (() => {
        const idx = dealtCards.findIndex(d => d.card.id === lightboxCard.id)
        return (
          <Lightbox
            card={lightboxCard}
            onClose={() => setLightboxCard(null)}
            onPrev={idx > 0 ? () => setLightboxCard(dealtCards[idx - 1].card) : undefined}
            onNext={idx < dealtCards.length - 1 ? () => setLightboxCard(dealtCards[idx + 1].card) : undefined}
          />
        )
      })()}
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen relative">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spread/:type" element={<SpreadPage />} />
        <Route path="/guidebook" element={<Navigate to="/guidebook/archetypes" replace />} />
        <Route path="/guidebook/:suit" element={<CardBrowser />} />
      </Routes>
    </div>
  )
}

export default App
