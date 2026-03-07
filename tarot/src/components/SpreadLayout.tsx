import { TarotCard } from './TarotCard'
import { SPREAD_CONFIGS } from '@/data/cards'
import type { DealtCard, SpreadType } from '@/types'

const MOBILE_SIZES: Record<number, { w: string; h: string; maxW: string }> = {
  1: { w: 'w-[200px]', h: 'h-[333px]', maxW: 'max-w-[200px]' },
  2: { w: 'w-[155px]', h: 'h-[258px]', maxW: 'max-w-[155px]' },
  3: { w: 'w-[105px]', h: 'h-[175px]', maxW: 'max-w-[105px]' },
}

interface SpreadLayoutProps {
  cards: DealtCard[]
  spreadType: SpreadType
  onFlip: (index: number) => void
  onLightbox: (index: number) => void
  placeholder?: boolean
  deckRef?: React.RefObject<HTMLDivElement | null>
  onDeal?: () => void
}

function PlaceholderCard({ position, onClick, count }: { position: string; onClick?: () => void; count: number }) {
  const mobile = MOBILE_SIZES[count] || MOBILE_SIZES[3]
  return (
    <button type="button" onClick={onClick} className="flex flex-col items-center gap-2 sm:gap-3 cursor-pointer group">
      <div className={`${mobile.w} ${mobile.h} sm:w-[234px] sm:h-[390px] rounded-xl border-2 border-dashed border-sigil/30 flex items-center justify-center transition-colors group-hover:border-sigil/60`}>
        <span className="text-whisper/20 font-serif text-xl sm:text-3xl group-hover:text-whisper/40 transition-colors">?</span>
      </div>
      <span className={`text-[13px] sm:text-[15px] font-mono text-white uppercase tracking-wider text-center ${mobile.maxW} sm:max-w-[234px]`}>
        {position}
      </span>
    </button>
  )
}

export function SpreadLayout({ cards, spreadType, onFlip, onLightbox, placeholder, deckRef, onDeal }: SpreadLayoutProps) {
  const config = SPREAD_CONFIGS[spreadType]

  if (placeholder) {
    return (
      <div className="flex flex-wrap justify-center gap-3 sm:gap-8">
        {Array.from({ length: config.count }).map((_, i) => (
          <PlaceholderCard key={i} position={config.positions[i]} onClick={onDeal} count={config.count} />
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-8">
      {cards.map((dealt, i) => (
        <TarotCard
          key={dealt.card.id}
          dealt={dealt}
          index={i}
          onFlip={() => onFlip(i)}
          onLightbox={() => onLightbox(i)}
          deckRef={deckRef}
          totalCards={config.count}
        />
      ))}
    </div>
  )
}
