import { motion } from 'framer-motion'
import { GraduationCap, Sparkles } from 'lucide-react'
import { about, education } from '../../data/portfolio'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="Focused on interfaces, grounded in fundamentals"
          subtitle="A concise snapshot of how I work, what I’m optimizing for, and the academic path behind it."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
          >
            <GlassCard className="h-full">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 ring-1 ring-violet-300/50 dark:bg-violet-500/15 dark:ring-violet-400/25">
                  <Sparkles className="h-5 w-5 text-violet-600 dark:text-violet-200" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Professional summary</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">{about.summary}</p>
                  <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">{about.goals}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              <GlassCard>
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-700 dark:text-cyan-300/90">Current focus</p>
                <p className="mt-3 text-sm font-medium text-slate-900 dark:text-white">{about.status}</p>
                <ul className="mt-5 space-y-2">
                  {about.strengths.map((s) => (
                    <li key={s} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400/80" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <GlassCard>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">How I collaborate</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{about.personality}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {about.languages.map((l) => (
                    <div
                      key={l.name}
                      className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 dark:bg-white/[0.03]"
                    >
                      <span className="text-sm text-slate-800 dark:text-slate-200">{l.name}</span>
                      <span className="text-xs font-medium text-violet-700 dark:text-cyan-300/90">{l.level}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-8 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-violet-600 dark:text-cyan-300/90" aria-hidden />
            <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Education</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {education.map((ed, i) => (
              <motion.div
                key={ed.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <GlassCard className="h-full">
                  <p className="text-xs text-slate-500">{ed.period}</p>
                  <h4 className="mt-2 font-display text-base font-semibold text-slate-900 dark:text-white">{ed.degree}</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{ed.school}</p>
                  <p className="mt-4 text-sm font-medium text-violet-700 dark:text-cyan-200/90">{ed.detail}</p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-500">{ed.highlight}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
