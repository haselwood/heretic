import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function suitClass(suit: string): string {
  return `suit-${suit.toLowerCase()}`
}

export function suitBgClass(suit: string): string {
  return `suit-${suit.toLowerCase()}-bg`
}
