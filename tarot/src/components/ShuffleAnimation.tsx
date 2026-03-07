import { useEffect, useState } from 'react'

interface ShuffleAnimationProps {
  onComplete: () => void
}

export function ShuffleAnimation({ onComplete }: ShuffleAnimationProps) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 50)
    const t2 = setTimeout(() => setPhase(2), 400)
    const t3 = setTimeout(() => setPhase(3), 800)
    const t4 = setTimeout(() => setPhase(4), 1100)
    const t5 = setTimeout(() => onComplete(), 1500)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
    }
  }, [onComplete])

  const cards = Array.from({ length: 5 }, (_, i) => i)

  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-[40vh]">
      <p className="text-[13px] text-oracle/60 tracking-[0.25em] uppercase loading-pulse font-mono">
        Shuffling the deck
      </p>
      <div className="relative w-[80px] h-[120px]">
        {cards.map((i) => {
          const spread = phase >= 1 && phase < 4
          const fan = spread ? (i - 2) * 18 : 0
          const lift = spread ? Math.abs(i - 2) * -6 : i * -1.5
          const rot = spread ? (i - 2) * 8 : 0
          const collapse = phase >= 4

          return (
            <div
              key={i}
              className="absolute inset-0 rounded-md border border-oracle/25 bg-obsidian"
              style={{
                transform: collapse
                  ? `translateY(${i * -1.5}px)`
                  : `translateX(${fan}px) translateY(${lift}px) rotate(${rot}deg)`,
                transition: 'all 0.35s cubic-bezier(0.22, 0.68, 0.35, 1)',
                zIndex: i,
                opacity: phase >= 4 ? 0.6 : 1,
              }}
            >
              <div className="absolute inset-1.5 border border-oracle/15 rounded-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-oracle/40 font-serif text-sm">&#x2726;</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
