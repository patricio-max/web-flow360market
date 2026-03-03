import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6',
        hover && 'transition-colors duration-200 hover:border-[var(--color-accent)]/30',
        className
      )}
    >
      {children}
    </div>
  )
}
