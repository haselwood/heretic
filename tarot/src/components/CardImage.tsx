import { useState } from 'react'
import { cn, suitClass } from '@/lib/utils'
import type { Suit } from '@/types'

interface CardImageProps {
  src: string
  alt: string
  suit: Suit
  className?: string
}

export function CardImage({ src, alt, suit, className }: CardImageProps) {
  const [error, setError] = useState(false)

  if (error || !src) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-obsidian/60 border border-sigil/20',
          className
        )}
      >
        <span className={cn('text-[10px] uppercase tracking-widest opacity-40', suitClass(suit))}>
          {alt}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={cn('object-cover', className)}
    />
  )
}
