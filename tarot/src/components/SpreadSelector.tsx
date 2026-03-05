import { cn } from '@/lib/utils'
import { SPREAD_CONFIGS } from '@/data/cards'
import type { SpreadType } from '@/types'

interface SpreadSelectorProps {
  onSelect: (type: SpreadType) => void
  onBrowse: () => void
}

const spreadDiamonds: Record<SpreadType, string> = {
  single: '◆',
  two: '◆ ◆',
  three: '◆ ◆ ◆',
  standup: '◆ ◆ ◆',
  retro: '◆ ◆ ◆',
  five: '◆ ◆ ◆ ◆ ◆',
}

export function SpreadSelector({ onSelect, onBrowse }: SpreadSelectorProps) {
  return (
    <div className="flex flex-col items-center gap-8 sm:gap-12 px-2 w-full">
      <div className="text-center space-y-3 sm:space-y-4">
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-wide">
          Startup Arcana
        </h1>
        <p className="text-[15px] sm:text-[17px] text-whisper/80 max-w-md mx-auto leading-relaxed font-mono">
          An oracle deck for the chronically employed
        </p>
      </div>

      <div className="space-y-3 w-full max-w-[783px]">
        <p className="font-serif text-lg sm:text-xl text-white uppercase tracking-[0.15em] text-center">
          Choose your spread
        </p>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {Object.values(SPREAD_CONFIGS).map((config) => (
            <button
              key={config.type}
              onClick={() => onSelect(config.type)}
              className={cn(
                'card-glow-wrap group relative p-4 sm:p-6 rounded-xl border border-sigil/60 overflow-hidden',
                'bg-obsidian/50',
                'transition-all duration-300 text-left'
              )}
            >
              <div className="flex flex-col gap-2 sm:gap-2.5">
                <div>
                  <span className="font-serif text-base sm:text-xl text-ghost group-hover:text-white transition-colors">
                    {config.label}
                  </span>
                  <div className="text-[14px] sm:text-[15px] text-whisper mt-0.5">
                    {config.count} {config.count === 1 ? 'card' : 'cards'}
                  </div>
                </div>
                <p className="text-[11px] sm:text-[12px] text-whisper group-hover:text-white transition-colors leading-snug">
                  {config.description}
                </p>
                <span className="text-purple-400/60 text-[10px] sm:text-xs tracking-[0.3em] group-hover:text-purple-300 transition-colors mt-auto pt-1">
                  {spreadDiamonds[config.type]}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onBrowse}
        className={cn(
          'group w-full max-w-[783px] flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-whisper/20',
          'bg-transparent hover:bg-whisper/5',
          'transition-all duration-300'
        )}
      >
        <span className="text-purple-400/60 group-hover:text-purple-300 transition-colors text-sm">&#x2756;</span>
        <span className="font-mono text-[15px] sm:text-[16px] text-white transition-colors">
          Browse the Guidebook
        </span>
      </button>
    </div>
  )
}
