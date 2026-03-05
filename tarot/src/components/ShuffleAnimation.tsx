import { useEffect, useState } from 'react'

interface ShuffleAnimationProps {
  onComplete: () => void
}

export function ShuffleAnimation({ onComplete }: ShuffleAnimationProps) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 50)
    const t2 = setTimeout(() => setPhase(2), 350)
    const t3 = setTimeout(() => setPhase(3), 650)
    const t4 = setTimeout(() => onComplete(), 1000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [onComplete])

  const cards = Array.from({ length: 7 }, (_, i) => i)

  return (
    <div className="flex flex-col items-center gap-8">
      <p className="text-[13px] text-oracle/60 tracking-widest uppercase loading-pulse">
        Shuffling the deck
      </p>
      <div className="relative w-[180px] h-[300px] sm:w-[234px] sm:h-[390px]">
        {cards.map((i) => {
          const isActive = phase >= 1
          const offset = isActive
            ? Math.sin((i + phase * 2) * 1.2) * 30
            : 0
          const yOffset = isActive
            ? Math.cos((i + phase) * 0.8) * 15
            : i * -2
          const rotation = isActive
            ? Math.sin((i + phase * 3) * 0.7) * 12
            : 0

          return (
            <div
              key={i}
              className="absolute inset-0 card-back-pattern card-back-border rounded-xl transition-all duration-300 ease-in-out"
              style={{
                transform: `translateX(${offset}px) translateY(${yOffset}px) rotate(${rotation}deg)`,
                zIndex: i,
                opacity: phase >= 3 ? 0 : 1,
                transition: `all 0.3s ease-in-out ${i * 20}ms`,
              }}
            >
              <div className="absolute inset-3 border border-oracle/30 rounded-lg" />
              <div className="absolute inset-5 border border-oracle/15 rounded-md" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-oracle/60 font-serif text-2xl">&#x2726;</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
