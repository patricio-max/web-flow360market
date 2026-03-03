import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'accent' | 'muted'
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium',
        {
          'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)]':
            variant === 'default',
          'border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-[var(--color-accent)]':
            variant === 'accent',
          'border-[var(--color-border)] bg-transparent text-[var(--color-text-muted)]':
            variant === 'muted',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
