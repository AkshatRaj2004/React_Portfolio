import { motion } from 'framer-motion'
import { ArrowDownRight, Download, Mail } from 'lucide-react'
import { useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { getResumeUrl, hero, site, socialLinks } from '../../data/portfolio'
import { useTypingRoles } from '../../hooks/useTypingRoles'
import { cn } from '../../lib/cn'

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  Email: Mail,
} as const

export function HeroSection() {
  const typed = useTypingRoles(hero.headlineRoles)
  const [imgOk, setImgOk] = useState(true)

  return (
    <section id="home" className="relative scroll-mt-28 pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-[0.28em] text-violet-700 dark:text-cyan-300/90"
          >
            Portfolio · 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            {hero.greeting}{' '}
            <span className="text-gradient">{site.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-6 flex min-h-[2.5rem] items-center text-lg text-slate-600 dark:text-slate-300 sm:text-xl"
          >
            <span className="mr-2 text-slate-500 dark:text-slate-500">I’m a</span>
            <span className="font-medium text-slate-900 dark:text-white">{typed}</span>
            <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-violet-600 dark:bg-cyan-300/90" aria-hidden />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
          >
            {hero.tagline}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {hero.chips.map((c) => (
              <li
                key={c}
                className="rounded-full border border-slate-200/90 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:shadow-none"
              >
                {c}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={getResumeUrl()}
              download="Akshat_Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(139,92,246,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download résumé
              <ArrowDownRight className="h-4 w-4 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-violet-300/50 hover:bg-white dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:shadow-none dark:hover:border-white/25 dark:hover:bg-white/[0.06]"
            >
              Let’s talk
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {socialLinks.map((s) => {
              const Icon = iconMap[s.label as keyof typeof iconMap]
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto') ? undefined : 'noreferrer'}
                  className="group inline-flex items-center gap-2 rounded-2xl border border-slate-200/90 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm transition hover:border-violet-300/40 hover:text-slate-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:shadow-none dark:hover:border-white/20 dark:hover:text-white"
                >
                  <Icon className="h-4 w-4 text-violet-600 dark:text-cyan-300/90" aria-hidden />
                  <span>{s.label}</span>
                </a>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-violet-500/25 via-fuchsia-500/12 to-cyan-400/15 blur-2xl dark:from-violet-500/35 dark:via-fuchsia-500/15 dark:to-cyan-400/25" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/70 p-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-square overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950">
              {imgOk ? (
                <img
                  src={site.profileImagePath}
                  alt={`Portrait of ${site.name}`}
                  className="h-full w-full object-cover"
                  onError={() => setImgOk(false)}
                  loading="eager"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-8 text-center">
                  <span className="font-display text-5xl font-bold text-slate-800 dark:text-white">AR</span>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Add akshat.png to /public for your photo.</p>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent dark:from-black/40" />
            </div>
            <div className="mt-4 flex items-center justify-between gap-3 px-2 pb-2">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500">Role</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Fullstack Developer · Software Developer</p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-white/80 px-3 py-2 text-xs text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300 dark:shadow-none">
                Open to <span className="text-violet-700 dark:text-cyan-300">internships · 2026</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className={cn(
          'mx-auto mt-16 flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300',
          'group',
        )}
      >
        Scroll to explore
        <motion.span aria-hidden animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          ↓
        </motion.span>
      </motion.button>
    </section>
  )
}
