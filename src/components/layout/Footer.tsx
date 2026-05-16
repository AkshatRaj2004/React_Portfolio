import { Heart } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { navLinks, site } from '../../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="border-t border-slate-200/80 bg-white/50 dark:border-white/[0.06] dark:bg-black/20">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">{site.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Fullstack and software developer building crisp end-to-end products, disciplined algorithms practice, and
              thoughtful ML experiments—optimized for impact and clarity.
            </p>
          </div>
          <nav aria-label="Footer quick links" className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
            {navLinks.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => go(l.id)}
                className="text-left text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-200/80 pt-8 text-sm text-slate-500 dark:border-white/[0.06] dark:text-slate-500 sm:flex-row sm:items-center">
          <p className="flex flex-wrap items-center gap-1">
            <span>
              © {year} {site.name}.
            </span>
            <span className="inline-flex items-center gap-1">
              Crafted with <Heart className="h-3.5 w-3.5 text-fuchsia-500 dark:text-fuchsia-400" aria-hidden /> for clarity &
              craft.
            </span>
          </p>
          <a
            href="https://github.com/AkshatRaj2004"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/80 px-3 py-1.5 text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-white/20 dark:hover:text-white"
          >
            <FaGithub className="h-4 w-4" aria-hidden />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
