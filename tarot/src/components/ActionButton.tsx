import { cn } from '@/lib/utils'

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'default' | 'half'
}

export function ActionButton({ children, className, variant = 'default', disabled, ...props }: ActionButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg border border-sigil/50',
        'bg-obsidian/50 text-[12px] font-mono text-white',
        'transition-all duration-200',
        'enabled:hover:bg-whisper/10 enabled:hover:border-whisper/30',
        'disabled:opacity-30 disabled:cursor-not-allowed',
        variant === 'default' && 'px-4 py-2',
        variant === 'half' && 'flex-1 py-3 text-[14px]',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
