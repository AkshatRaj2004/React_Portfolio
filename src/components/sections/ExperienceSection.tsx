import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../../data/portfolio'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Internships and professional roles where I've applied what I build and learn."
        />

        <ol className="relative mx-auto max-w-3xl space-y-8 border-l border-slate-200/90 pl-6 sm:pl-8 dark:border-white/10">
          {experience.map((job, i) => (
            <motion.li
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative"
            >
              <span
                className="absolute -left-[calc(1.5rem+9px)] top-6 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white ring-2 ring-violet-500 sm:-left-[calc(2rem+9px)] dark:bg-[#07090f] dark:ring-cyan-400/80"
                aria-hidden
              >
                {job.current ? <span className="h-2 w-2 animate-pulse rounded-full bg-violet-500 dark:bg-cyan-400" /> : null}
              </span>

              <GlassCard>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/15 ring-1 ring-slate-200/80 dark:ring-white/10">
                      <Briefcase className="h-5 w-5 text-violet-600 dark:text-cyan-300/90" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                      <p className="mt-0.5 text-sm font-medium text-violet-700 dark:text-cyan-200/90">{job.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1.5 sm:items-end">
                    <p className="text-xs font-medium text-slate-500">{job.period}</p>
                    <span className="rounded-full border border-slate-200/90 bg-white/80 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                      {job.type}
                    </span>
                  </div>
                </div>

                {job.summary ? (
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{job.summary}</p>
                ) : null}

                {job.highlights && job.highlights.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500 dark:bg-cyan-400/80" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </GlassCard>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
