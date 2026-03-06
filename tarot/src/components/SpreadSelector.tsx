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
  five: '◆ ◆ ◆ ◆ ◆',
}

export function SpreadSelector() {
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-8 px-2 w-full">
      <div className="text-center">
        <h1 className="title-glow font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-wide">
          Startup Arcana
        </h1>
      </div>

      <div className="space-y-3 w-full max-w-[528px]">
        <p className="font-serif text-lg sm:text-xl text-white uppercase tracking-[0.15em] text-center">
          Choose your spread
        </p>
        <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
          {Object.values(SPREAD_CONFIGS).map((config) => (
            <Link
              key={config.type}
              to={`/spread/${config.type}`}
              className={cn(
                'card-glow-wrap group relative px-3 py-6 sm:px-4 sm:py-7 border border-sigil/60 overflow-hidden no-underline',
                'bg-obsidian/50',
                'transition-all duration-300 text-left'
              )}
            >
              <div className="flex flex-col items-center text-center gap-1">
                <div>
                  <span className="font-serif text-[18px] text-ghost group-hover:text-white transition-colors">
                    {config.label}
                  </span>
                  <p className="text-xs sm:text-[11px] text-whisper group-hover:text-white transition-colors leading-tight">
                    {config.description}
                  </p>
                </div>
                <span className="text-purple-400/60 text-[10px] tracking-[0.2em] group-hover:text-purple-300 transition-colors">
                  {spreadDiamonds[config.type]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
