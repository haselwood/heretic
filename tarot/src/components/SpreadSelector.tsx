import { useRef, useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { SPREAD_CONFIGS } from '@/data/cards'
import type { SpreadType } from '@/types'

const spreadDiamonds: Record<SpreadType, string> = {
  single: '◆',
  two: '◆ ◆',
  three: '◆ ◆ ◆',
  standup: '◆ ◆ ◆',
  retro: '◆ ◆ ◆',
  four: '◆ ◆ ◆ ◆',
}

function SpreadCard({
  config,
  index,
}: {
  config: (typeof SPREAD_CONFIGS)[string]
  index: number
}) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const [visible, setVisible] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 120 + index * 90)
    return () => clearTimeout(timer)
  }, [index])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -20, y: x * 20 })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }, [])

  return (
    <Link
      ref={cardRef}
      to={`/spread/${config.type}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'card-glow-wrap group relative px-3 py-4 sm:px-4 sm:py-10 border border-sigil/60 overflow-hidden no-underline',
        'bg-obsidian/50',
        'transition-all duration-300 text-left'
      )}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.05 : 1})`
          : 'perspective(600px) translateY(16px) scale(0.97)',
        transition: hovered
          ? 'opacity 0.5s ease, transform 0.12s ease'
          : 'opacity 0.5s ease, transform 0.4s ease',
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="flex flex-col items-center text-center gap-2">
        <div>
          <span className="font-serif text-[20px] tracking-[0.01em] text-ghost group-hover:text-white transition-colors">
            {config.label}
          </span>
          <p className="font-mono text-[14px] sm:text-[13px] text-whisper group-hover:text-white transition-colors leading-tight">
            {config.description}
          </p>
        </div>
        <span className="text-[#00FB8A]/60 text-[10px] tracking-[0.2em] group-hover:text-[#00FB8A] transition-colors">
          {spreadDiamonds[config.type]}
        </span>
      </div>
    </Link>
  )
}

export function SpreadSelector() {
  const hiddenSpreads = new Set<SpreadType>(['three', 'four'])
  const configs = Object.values(SPREAD_CONFIGS).filter(c => !hiddenSpreads.has(c.type))

  return (
    <div className="flex flex-col items-center gap-1 sm:gap-4 px-2 w-full">
      <div className="text-center">
        <h1 className="title-glow font-serif text-[48px] sm:text-[63px] md:text-[76px] font-bold text-white tracking-[0.015em]">
          Startup Arcana
        </h1>
      </div>

      <div className="space-y-[10px] sm:space-y-5 w-full max-w-[528px]">
        <p className="font-serif text-lg sm:text-xl text-white uppercase tracking-[0.14em] text-center">
          Optimize your aura
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3.5">
          {configs.map((config, i) => (
            <SpreadCard key={config.type} config={config} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
