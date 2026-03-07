import { useState, useCallback, useRef, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate, useParams, useLocation, Link } from 'react-router-dom'
import { SpreadSelector } from '@/components/SpreadSelector'
import { ShuffleAnimation } from '@/components/ShuffleAnimation'
import { SpreadLayout } from '@/components/SpreadLayout'
import { CardBrowser } from '@/components/CardBrowser'
import { Lightbox } from '@/components/Lightbox'
import { ActionButton } from '@/components/ActionButton'
import { HomeBg } from '@/components/HomeBg'
import { PixelMoth } from '@/components/PixelMoth'
import { OraclePage } from '@/components/OraclePage'
import { shuffleDeck, SPREAD_CONFIGS } from '@/data/cards'
import { CARD_MEANINGS } from '@/data/meanings'
import type { SpreadType, DealtCard, TarotCard } from '@/types'

const VALID_SPREADS = new Set<string>(Object.keys(SPREAD_CONFIGS))

function HomePage() {
  return (
    <>
      <HomeBg />
      <div className="relative z-10 flex flex-col items-center justify-start pt-[3vh] pb-6 sm:justify-center sm:py-12 px-4 min-h-screen">
        <main className="flex flex-col items-center w-full max-w-[1200px]">
          <SpreadSelector />
        </main>
        <footer className="pt-[14px] sm:pt-10 text-center w-full max-w-[528px] px-2 sm:px-0">
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/guidebook/archetypes"
              className="font-mono text-[14px] text-white tracking-[0.055em] underline transition-all duration-200 hover:[text-shadow:0_0_8px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.4)]"
            >
              The Guidebook
            </Link>
            <span className="text-white/60 text-[7px]">◆</span>
            <Link
              to="/oracle"
              className="font-mono text-[14px] text-white tracking-[0.055em] underline transition-all duration-200 hover:[text-shadow:0_0_8px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.4)]"
            >
              The Oracle
            </Link>
          </div>
          <p className="text-[11px] sm:text-[14px] text-whisper tracking-[0.08em] uppercase font-mono mt-2 sm:mt-4">
            64 cards &middot; 4 suits &middot; 0 venture backing
          </p>
          <p className="text-[12px] text-whisper/85 tracking-widest mt-2 text-center uppercase font-mono">
            Made by Heather Hex
          </p>
          <div className="flex justify-center mt-2 sm:mt-4">
            <PixelMoth />
          </div>
        </footer>
      </div>
    </>
  )
}

function SpreadPage() {
  const navigate = useNavigate()
  const { type: typeParam } = useParams<{ type: string }>()
  const spreadType = (typeParam && VALID_SPREADS.has(typeParam) ? typeParam : 'single') as SpreadType
  const isSingle = spreadType === 'single'

  const [phase, setPhase] = useState<'question' | 'shuffling' | 'dealt' | 'reading'>(
    isSingle ? 'shuffling' : 'question'
  )
  const [dealtCards, setDealtCards] = useState<DealtCard[]>([])
  const [lightboxCard, setLightboxCard] = useState<TarotCard | null>(null)
  const [question, setQuestion] = useState('')
  const [readingText, setReadingText] = useState('')
  const [isLoadingReading, setIsLoadingReading] = useState(false)
  const deckRef = useRef<HTMLDivElement>(null)
  const readingRef = useRef<HTMLDivElement>(null)
  const hasTriggeredReading = useRef(false)
  const textBufferRef = useRef('')
  const displayedLenRef = useRef(0)
  const typewriterRef = useRef<number | null>(null)

  const handleQuestionSubmit = useCallback(() => {
    setPhase('shuffling')
  }, [])

  const handleShuffleComplete = useCallback(() => {
    const newDeck = shuffleDeck()
    const config = SPREAD_CONFIGS[spreadType]
    const dealt: DealtCard[] = newDeck.slice(0, config.count).map((card, i) => ({
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

  const handleReshuffle = useCallback(() => {
    setDealtCards([])
    setReadingText('')
    textBufferRef.current = ''
    displayedLenRef.current = 0
    if (typewriterRef.current) { clearTimeout(typewriterRef.current); typewriterRef.current = null }
    setIsLoadingReading(false)
    hasTriggeredReading.current = false
    setPhase('shuffling')
  }, [])

  const handleFlip = useCallback((index: number) => {
    setDealtCards(prev => prev.map((d, i) =>
      i === index ? { ...d, isFlipped: true } : d
    ))
  }, [])

  const handleLightbox = useCallback((index: number) => {
    const dealt = dealtCards[index]
    if (dealt) setLightboxCard(dealt.card)
  }, [dealtCards])

  const startTypewriter = useCallback(() => {
    if (typewriterRef.current) return
    const tick = () => {
      if (displayedLenRef.current < textBufferRef.current.length) {
        const charsToAdd = Math.min(3, textBufferRef.current.length - displayedLenRef.current)
        displayedLenRef.current += charsToAdd
        setReadingText(textBufferRef.current.slice(0, displayedLenRef.current))
        typewriterRef.current = window.setTimeout(tick, 10)
      } else {
        typewriterRef.current = null
      }
    }
    tick()
  }, [])

  const fetchReading = useCallback(async (cards: DealtCard[]) => {
    setIsLoadingReading(true)
    setReadingText('')
    textBufferRef.current = ''
    displayedLenRef.current = 0
    if (typewriterRef.current) { clearTimeout(typewriterRef.current); typewriterRef.current = null }
    setPhase('reading')

    try {
      const payload = {
        question: question || undefined,
        spreadType,
        cards: cards.map(d => ({
          name: d.card.name,
          suit: d.card.suit,
          position: d.position,
          meaning: CARD_MEANINGS[d.card.id] || null,
        })),
      }

      const res = await fetch('/api/reading', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok || !res.body) {
        textBufferRef.current = 'The cosmos are unavailable right now. Please try again.'
        displayedLenRef.current = textBufferRef.current.length
        setReadingText(textBufferRef.current)
        setIsLoadingReading(false)
        return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        textBufferRef.current += decoder.decode(value, { stream: true })
        startTypewriter()
      }
    } catch {
      textBufferRef.current = 'The cosmos are unavailable right now. Please try again.'
      displayedLenRef.current = textBufferRef.current.length
      setReadingText(textBufferRef.current)
    } finally {
      setIsLoadingReading(false)
    }
  }, [question, spreadType, startTypewriter])

  useEffect(() => {
    if (phase !== 'dealt' || hasTriggeredReading.current) return
    const allFlipped = dealtCards.length > 0 && dealtCards.every(d => d.isFlipped)
    if (allFlipped) {
      hasTriggeredReading.current = true
      fetchReading(dealtCards)
    }
  }, [phase, dealtCards, fetchReading])

  useEffect(() => {
    if (readingText && readingRef.current) {
      readingRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }, [readingText])

  return (
    <>
      <HomeBg />
      <div className="relative z-10 flex flex-col items-center px-4 py-4 sm:py-12 min-h-screen">

        {phase === 'question' && (
          <div className="flex flex-col items-center justify-center min-h-[70vh] w-full max-w-md">
            <div className="flex flex-col items-center text-center gap-2 mb-8">
              <p className="text-[20px] sm:text-[26px] font-serif text-white tracking-wide">
                {SPREAD_CONFIGS[spreadType].label}
              </p>
              <span className="text-oracle/50 text-[10px]">&#x2726;</span>
              <p className="text-[13px] sm:text-[14px] font-mono text-whisper/70">
                {SPREAD_CONFIGS[spreadType].description}
              </p>
            </div>
            <div className="w-full space-y-5">
              <textarea
                value={question}
                onChange={e => setQuestion(e.target.value)}
                placeholder="What is your question for the universe?"
                rows={3}
                className="w-full px-4 py-3 border border-sigil/50 bg-obsidian/40 text-white text-[14px] sm:text-[15px] font-mono placeholder:text-whisper/40 focus:outline-none focus:border-whisper/40 transition-colors text-center resize-none"
              />
              <div className="flex justify-center">
                <ActionButton onClick={handleQuestionSubmit}>
                  Shuffle &amp; Deal
                </ActionButton>
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="mt-8 text-[12px] font-mono text-whisper/50 tracking-wider uppercase hover:text-whisper/80 transition-colors"
            >
              &larr; Back
            </button>
          </div>
        )}

        {phase === 'shuffling' && (
          <div className="flex-1 flex items-center justify-center w-full">
            <ShuffleAnimation onComplete={handleShuffleComplete} />
          </div>
        )}

        {(phase === 'dealt' || phase === 'reading') && (
          <div className="flex flex-col items-center w-full max-w-[1200px]">
            <div className="w-full mb-4 sm:mb-8 pt-2 sm:pt-4">
              <div className="flex justify-between items-center gap-2 mb-4 sm:mb-6">
                <ActionButton onClick={() => navigate('/')} className="flex-1 sm:flex-none">
                  &larr; New Spread
                </ActionButton>
                <ActionButton onClick={handleReshuffle} className="flex-1 sm:flex-none">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/></svg>
                  Shuffle &amp; Deal
                </ActionButton>
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <h2 className="title-glow font-serif text-[28px] sm:text-[38px] font-bold text-white tracking-[0.015em]">
                  {SPREAD_CONFIGS[spreadType].label}
                </h2>
                {question && (
                  <p className="text-[12px] sm:text-[13px] font-mono text-whisper/50 italic max-w-sm">
                    &ldquo;{question}&rdquo;
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 w-full">
              <SpreadLayout
                cards={dealtCards}
                spreadType={spreadType}
                onFlip={handleFlip}
                onLightbox={handleLightbox}
                deckRef={deckRef}
              />
            </div>

            {phase === 'reading' && (
              <div ref={readingRef} className="w-full max-w-lg mt-8 sm:mt-12 mb-12">
                {isLoadingReading && !readingText && (
                  <div className="flex flex-col items-center gap-5">
                    <div className="smoke-infinity">
                      <svg viewBox="0 0 120 60"><path className="smoke-infinity-path" d="M 60 30 C 60 10, 0 10, 0 30 C 0 50, 60 50, 60 30 C 60 10, 120 10, 120 30 C 120 50, 60 50, 60 30" /></svg>
                      <div className="smoke-infinity-head" />
                      <div className="smoke-infinity-trail" />
                      <div className="smoke-infinity-trail" />
                      <div className="smoke-infinity-trail" />
                      <div className="smoke-infinity-trail" />
                      <div className="smoke-infinity-trail" />
                    </div>
                    <p className="text-[13px] sm:text-[13px] tracking-[0.15em] uppercase font-serif text-center oracle-glow-text">
                      The Oracle is Processing
                    </p>
                  </div>
                )}
                {readingText && (
                  <div className="border border-sigil/30 bg-obsidian/40 backdrop-blur-sm p-5 sm:p-8">
                    <p className="text-[13px] sm:text-[14px] font-mono text-white leading-relaxed tracking-wide whitespace-pre-wrap">
                      {readingText}
                    </p>
                    {isLoadingReading && (
                      <span className="inline-block w-2 h-4 bg-oracle/60 ml-1 animate-pulse" />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {lightboxCard && (
        <Lightbox
          card={lightboxCard}
          onClose={() => setLightboxCard(null)}
        />
      )}
    </>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function LoadingTestPage() {
  return (
    <>
      <HomeBg />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-6">
          <div className="smoke-infinity">
            <svg viewBox="0 0 120 60"><path className="smoke-infinity-path" d="M 60 30 C 60 10, 0 10, 0 30 C 0 50, 60 50, 60 30 C 60 10, 120 10, 120 30 C 120 50, 60 50, 60 30" /></svg>
            <div className="smoke-infinity-head" />
            <div className="smoke-infinity-trail" />
            <div className="smoke-infinity-trail" />
            <div className="smoke-infinity-trail" />
            <div className="smoke-infinity-trail" />
            <div className="smoke-infinity-trail" />
          </div>
          <p className="text-[13px] sm:text-[13px] tracking-[0.15em] uppercase font-serif text-center oracle-glow-text">
            The Oracle is Processing
          </p>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen relative">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spread/:type" element={<SpreadPage />} />
        <Route path="/oracle" element={<OraclePage />} />
        <Route path="/guidebook" element={<Navigate to="/guidebook/archetypes" replace />} />
        <Route path="/guidebook/:suit" element={<CardBrowser />} />
        <Route path="/loading" element={<LoadingTestPage />} />
      </Routes>
    </div>
  )
}

export default App
