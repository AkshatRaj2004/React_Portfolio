import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type Props = HTMLAttributes<HTMLDivElement> & {
  as?: 'div' | 'article' | 'section'
}

export function GlassCard({ as: Tag = 'div', className, ...rest }: Props) {
  return (
    <Tag
      className={cn(
        'rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-xl transition-colors hover:border-violet-300/35 hover:bg-white/90 dark:border-white/[0.08] dark:bg-white/[0.04] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04)] dark:hover:border-white/[0.12] dark:hover:bg-white/[0.055]',
        className,
      )}
      {...rest}
    />
  )
}
