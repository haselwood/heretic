import { useEffect, useState } from 'react'

interface ShuffleAnimationProps {
  onComplete: () => void
}

const LAYERS = 12

function getLayerTransform(i: number, phase: number) {
  const reverseI = LAYERS - 1 - i
  const half = Math.floor(LAYERS / 2)
  const isTop = i >= half

  switch (phase) {
    case 1:
      return {
        x: isTop ? 55 : -10,
        y: isTop ? -(i - half) * 4 : reverseI * 1.5,
        rotate: isTop ? 5 : -1,
        z: isTop ? i + LAYERS : i,
      }
    case 2: {
      const slot = i % 2 === 0 ? Math.floor(i / 2) : half + Math.floor(i / 2)
      return {
        x: (i % 2 === 0 ? 8 : -8),
        y: (LAYERS - 1 - slot) * 2.5,
        rotate: 0,
        z: slot,
      }
    }
    case 3:
      return {
        x: isTop ? -45 : 15,
        y: isTop ? (i - half) * 4 : -(half - i) * 3,
        rotate: isTop ? -4 : 2,
        z: isTop ? i : i + LAYERS,
      }
    case 4: {
      const slot2 = i % 2 === 0 ? half + Math.floor(i / 2) : Math.floor(i / 2)
      return {
        x: (i % 2 === 0 ? -6 : 6),
        y: (LAYERS - 1 - slot2) * 2.5,
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

export function ShuffleAnimation({ onComplete }: ShuffleAnimationProps) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 100)
    const t2 = setTimeout(() => setPhase(2), 310)
    const t3 = setTimeout(() => setPhase(3), 520)
    const t4 = setTimeout(() => setPhase(4), 730)
    const t5 = setTimeout(() => setPhase(5), 920)
    const t6 = setTimeout(() => onComplete(), 1400)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
      clearTimeout(t6)
    }
  }, [onComplete])

  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-[40vh]">
      <p className="text-[13px] text-oracle/60 tracking-[0.25em] uppercase loading-pulse font-mono">
        Shuffling the deck
      </p>
      <div className="relative w-[180px] h-[300px] sm:w-[234px] sm:h-[390px]" style={{ marginBottom: `${LAYERS}px`, marginRight: `${LAYERS}px` }}>
        {Array.from({ length: LAYERS }).map((_, i) => {
          const { x, y, rotate, z } = getLayerTransform(i, phase)

          return (
            <div
              key={i}
              className="absolute inset-0 rounded-lg card-back-pattern card-back-border border border-oracle/20 transition-all duration-300 ease-in-out"
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
                zIndex: z,
                opacity: Math.max(0.4, 1 - (LAYERS - 1 - z) * 0.06),
                transitionDelay: `${i * 12}ms`,
                boxShadow: z === 0 ? '3px 3px 8px rgba(0,0,0,0.5)' : 'none',
              }}
            >
              {i === LAYERS - 1 && (
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
    </div>
  )
}
