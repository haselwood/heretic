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
    <div className="flex flex-col items-center gap-8 sm:gap-12 px-2">
      <div className="text-center space-y-3 sm:space-y-4">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide">
          Startup Arcana
        </h1>
        <p className="text-[13px] sm:text-[14px] text-whisper/60 max-w-md mx-auto leading-relaxed">
          a satirical oracle for the chronically employed
        </p>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-oracle/40 to-transparent mx-auto" />
      </div>

      <div className="space-y-3 w-full max-w-lg">
        <p className="text-[11px] font-mono text-whisper/40 uppercase tracking-[0.2em] text-center">
          Choose your spread
        </p>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
          {Object.values(SPREAD_CONFIGS).map((config) => (
            <button
              key={config.type}
              onClick={() => onSelect(config.type)}
              className={cn(
                'group relative p-4 sm:p-6 rounded-xl border border-sigil/60',
                'bg-obsidian/50 hover:bg-ritual/60 hover:border-oracle/40',
                'transition-all duration-300 text-left',
                'hover:shadow-[0_0_30px_rgba(201,162,39,0.08)]'
              )}
            >
              <div className="flex flex-col gap-2 sm:gap-2.5">
                <div>
                  <span className="font-serif text-sm sm:text-lg text-ghost group-hover:text-oracle transition-colors">
                    {config.label}
                  </span>
                  <div className="text-[14px] sm:text-[15px] text-whisper/60 mt-0.5">
                    {config.count} {config.count === 1 ? 'card' : 'cards'}
                  </div>
                </div>
                <p className="text-[11px] sm:text-[12px] text-whisper/70 group-hover:text-whisper/90 transition-colors leading-snug">
                  {config.description}
                </p>
                <span className="text-oracle/40 text-[10px] sm:text-xs tracking-[0.3em] group-hover:text-oracle/70 transition-colors mt-auto pt-1">
                  {spreadDiamonds[config.type]}
                </span>
              </div>
              <div className="absolute inset-0 rounded-xl border border-oracle/0 group-hover:border-oracle/20 transition-all duration-300" />
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onBrowse}
        className={cn(
          'group w-full max-w-lg flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-sigil/30',
          'hover:border-oracle/30 bg-obsidian/20 hover:bg-ritual/30',
          'transition-all duration-300',
          'hover:shadow-[0_0_20px_rgba(201,162,39,0.05)]'
        )}
      >
        <span className="text-oracle/30 group-hover:text-oracle/60 transition-colors text-sm">&#x2756;</span>
        <span className="font-serif text-[15px] sm:text-[16px] text-whisper/70 group-hover:text-phantom/90 transition-colors">
          Browse the Guidebook
        </span>
        <span className="text-[12px] text-whisper/40 group-hover:text-whisper/60 transition-colors">
          — 64 cards
        </span>
      </button>
    </div>
  )
}
