import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, site } from '../../data/portfolio'
import { cn } from '../../lib/cn'
import { ThemeToggle } from './ThemeToggle'

type Props = {
  activeId: string
}

export function Navbar({ activeId }: Props) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'border-b border-slate-200/80 bg-white/75 backdrop-blur-xl transition-shadow duration-300 dark:border-white/[0.06] dark:bg-[#07090f]/75',
          scrolled && 'shadow-[0_12px_40px_rgba(15,23,42,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]',
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={() => go('home')}
            className="group flex min-w-0 items-center gap-2 rounded-xl px-2 py-1 text-left focus-visible:outline-offset-4"
          >
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-cyan-400/15 ring-1 ring-slate-200/80 dark:ring-white/10">
              <span className="font-display text-sm font-bold text-slate-900 dark:text-white">AR</span>
            </span>
            <span className="hidden truncate font-display text-sm font-semibold tracking-tight text-slate-900 dark:text-white sm:inline sm:text-base">
              {site.name}
            </span>
          </button>

          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => go(l.id)}
                className={cn(
                  'relative rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white',
                  activeId === l.id && 'text-slate-900 dark:text-white',
                )}
              >
                {activeId === l.id ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-slate-900/[0.06] ring-1 ring-slate-200/80 dark:bg-white/[0.08] dark:ring-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                ) : null}
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-shrink-0 items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200/90 bg-white/80 p-2 text-slate-900 lg:hidden dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-900/35 backdrop-blur-sm dark:bg-black/60 lg:hidden"
            onClick={() => setOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            className="fixed inset-y-0 right-0 z-50 w-[min(92vw,380px)] border-l border-slate-200/90 bg-white/95 p-6 pt-24 backdrop-blur-2xl dark:border-white/10 dark:bg-[#07090f]/95 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => go(l.id)}
                  className={cn(
                    'rounded-xl px-4 py-3 text-left text-base font-medium',
                    activeId === l.id
                      ? 'bg-slate-900/[0.06] text-slate-900 dark:bg-white/[0.08] dark:text-white'
                      : 'text-slate-600 dark:text-slate-300',
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
