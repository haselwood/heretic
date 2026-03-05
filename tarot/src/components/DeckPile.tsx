import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface DeckPileProps {
  remaining: number
  shuffling?: boolean
  onShuffleComplete?: () => void
  onClickShuffle?: () => void
}

function getLayerTransform(i: number, layers: number, phase: number) {
  const reverseI = layers - 1 - i
  const half = Math.floor(layers / 2)
  const isTop = i >= half

  switch (phase) {
    case 1:
      return {
        x: isTop ? 55 : -10,
        y: isTop ? -(i - half) * 4 : reverseI * 1.5,
        rotate: isTop ? 5 : -1,
        z: isTop ? i + layers : i,
      }
    case 2: {
      const slot = i % 2 === 0 ? Math.floor(i / 2) : half + Math.floor(i / 2)
      return {
        x: (i % 2 === 0 ? 8 : -8),
        y: (layers - 1 - slot) * 2.5,
        rotate: 0,
        z: slot,
      }
    }
    case 3:
      return {
        x: isTop ? -45 : 15,
        y: isTop ? (i - half) * 4 : -(half - i) * 3,
        rotate: isTop ? -4 : 2,
        z: isTop ? i : i + layers,
      }
    case 4: {
      const slot2 = i % 2 === 0 ? half + Math.floor(i / 2) : Math.floor(i / 2)
      return {
        x: (i % 2 === 0 ? -6 : 6),
        y: (layers - 1 - slot2) * 2.5,
        rotate: 0,
        z: slot2,
      }
    }
    case 5:
      return { x: reverseI * 1, y: reverseI * 1, rotate: 0, z: i }
    default:
      return { x: reverseI * 1, y: reverseI * 1, rotate: 0, z: i }
  }
}

export function DeckPile({ remaining, shuffling, onShuffleComplete, onClickShuffle }: DeckPileProps) {
  const layers = Math.min(remaining, 12)
  const [shufflePhase, setShufflePhase] = useState(0)

  useEffect(() => {
    if (!shuffling) {
      setShufflePhase(0)
      return
    }

    setShufflePhase(1)
    const t2 = setTimeout(() => setShufflePhase(2), 210)
    const t3 = setTimeout(() => setShufflePhase(3), 420)
    const t4 = setTimeout(() => setShufflePhase(4), 630)
    const t5 = setTimeout(() => setShufflePhase(5), 820)
    const t6 = setTimeout(() => {
      setShufflePhase(0)
      onShuffleComplete?.()
    }, 1050)

    return () => {
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
      clearTimeout(t6)
    }
  }, [shuffling, onShuffleComplete])

  return (
    <button
      type="button"
      onClick={() => !shuffling && onClickShuffle?.()}
      className={cn('flex flex-col items-center gap-3 cursor-pointer', shuffling && 'pointer-events-none')}
      aria-label="Shuffle deck"
    >
      <div className="deck-origin relative w-[180px] h-[300px] sm:w-[234px] sm:h-[390px]" style={{ marginBottom: `${layers}px`, marginRight: `${layers}px` }}>
        {Array.from({ length: layers }).map((_, i) => {
          const { x, y, rotate, z } = getLayerTransform(i, layers, shufflePhase)
          const isTopCard = shufflePhase === 0 ? i === layers - 1 : z === Math.max(...Array.from({ length: layers }, (_, j) => getLayerTransform(j, layers, shufflePhase).z))

          return (
            <div
              key={i}
              className={cn(
                'absolute inset-0 rounded-lg card-back-pattern card-back-border',
                'border border-oracle/20 transition-all duration-300 ease-in-out',
                isTopCard && 'deck-top-card'
              )}
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
                zIndex: z,
                opacity: Math.max(0.4, 1 - (layers - 1 - z) * 0.06),
                transitionDelay: `${i * 12}ms`,
                boxShadow: z === 0 ? '3px 3px 8px rgba(0,0,0,0.5)' : 'none',
              }}
            >
              {i === layers - 1 && (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-2 border border-oracle/25 rounded-md" />
                  <div className="absolute inset-3.5 border border-oracle/12 rounded-sm" />
                  <div className="text-oracle/50 font-serif text-xl tracking-widest select-none">
                    &#x2726;
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </button>
  )
}
