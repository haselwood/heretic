import { TarotCard } from './TarotCard'
import { SPREAD_CONFIGS } from '@/data/cards'
import type { DealtCard, SpreadType } from '@/types'
interface SpreadLayoutProps {
  cards: DealtCard[]
  spreadType: SpreadType
  onFlip: (index: number) => void
  onLightbox: (index: number) => void
  placeholder?: boolean
  deckRef?: React.RefObject<HTMLDivElement | null>
  onDeal?: () => void
}

function PlaceholderCard({ position, onClick }: { position: string; onClick?: () => void }) {
  return (
    <button type="button" onClick={onClick} className="flex flex-col items-center gap-3 cursor-pointer group">
      <div className="w-[180px] h-[300px] sm:w-[234px] sm:h-[390px] rounded-xl border-2 border-dashed border-sigil/30 flex items-center justify-center transition-colors group-hover:border-sigil/60">
        <span className="text-whisper/20 font-serif text-3xl group-hover:text-whisper/40 transition-colors">?</span>
      </div>
      <span className="text-[10px] sm:text-[11px] font-mono text-white uppercase tracking-wider text-center max-w-[180px] sm:max-w-[234px]">
        {position}
      </span>
    </button>
  )
}

export function SpreadLayout({ cards, spreadType, onFlip, onLightbox, placeholder, deckRef, onDeal }: SpreadLayoutProps) {
  const config = SPREAD_CONFIGS[spreadType]

  if (placeholder) {
    return (
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
        {Array.from({ length: config.count }).map((_, i) => (
          <PlaceholderCard key={i} position={config.positions[i]} onClick={onDeal} />
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
      {cards.map((dealt, i) => (
        <TarotCard
          key={dealt.card.id}
          dealt={dealt}
          index={i}
          onFlip={() => onFlip(i)}
          onLightbox={() => onLightbox(i)}
          deckRef={deckRef}
        />
      ))}
    </div>
  )
}
