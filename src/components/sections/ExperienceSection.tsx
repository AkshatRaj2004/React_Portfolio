import { motion } from 'framer-motion'
import { Briefcase, CalendarDays, MapPin } from 'lucide-react'
import { experience } from '../../data/portfolio'
import { cn } from '../../lib/cn'
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

        <ol className="relative mx-auto max-w-3xl space-y-8 pl-8 sm:pl-10">
          <span
            className="absolute bottom-6 left-[8px] top-6 w-px bg-gradient-to-b from-violet-500/70 via-fuchsia-400/40 to-transparent dark:from-cyan-400/60 dark:via-violet-400/30"
            aria-hidden
          />
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
                className={cn(
                  'absolute top-[35px] -left-8 flex h-[18px] w-[18px] items-center justify-center rounded-full ring-2 sm:-left-10',
                  job.current
                    ? 'bg-white ring-violet-500 dark:bg-[#07090f] dark:ring-cyan-400'
                    : 'bg-white ring-slate-300 dark:bg-[#07090f] dark:ring-white/20',
                )}
                aria-hidden
              >
                {job.current ? <span className="h-2 w-2 animate-pulse rounded-full bg-violet-500 dark:bg-cyan-400" /> : null}
              </span>

              <GlassCard>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/15 ring-1 ring-slate-200/80 dark:ring-white/10">
                    <Briefcase className="h-5 w-5 text-violet-600 dark:text-cyan-300/90" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                      <h3 className="font-display text-lg font-semibold leading-snug text-slate-900 dark:text-white">
                        {job.role}
                      </h3>
                      <span
                        className={cn(
                          'rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider',
                          job.current
                            ? 'border-emerald-300/70 bg-emerald-50 text-emerald-700 dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-300'
                            : 'border-slate-200/90 bg-white/80 text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300',
                        )}
                      >
                        {job.current ? 'Current' : job.type}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-violet-700 dark:text-cyan-200/90">{job.company}</p>
                    <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                        {job.period}
                      </span>
                      {job.location ? (
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" aria-hidden />
                          {job.location}
                        </span>
                      ) : null}
                    </p>
                  </div>
                </div>

                {job.summary ? (
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{job.summary}</p>
                ) : null}

                {job.highlights && job.highlights.length > 0 ? (
                  <ul className="mt-5 space-y-2 border-t border-slate-200/70 pt-4 dark:border-white/[0.06]">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
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
