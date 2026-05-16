import { motion } from 'framer-motion'
import { Award, Medal, Trophy } from 'lucide-react'
import { achievements, certifications, codingProfiles } from '../../data/portfolio'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience & highlights"
          title="Credentials, contests, and coding momentum"
          subtitle="Verified certifications, competitive programming stats, and milestones recruiters can cross-check."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <GlassCard className="h-full">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-violet-600 dark:text-cyan-300/90" aria-hidden />
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Certifications</h3>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {certifications.map((c, i) => (
                  <motion.a
                    key={c.title}
                    href={c.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="group rounded-2xl border border-slate-200/90 bg-white/80 p-4 shadow-sm transition hover:border-violet-300/50 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-violet-400/35 dark:hover:bg-white/[0.05]"
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{c.issuer}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-900 group-hover:text-violet-700 dark:text-white dark:group-hover:text-cyan-100">
                      {c.title}
                    </p>
                    <p className="mt-3 text-xs text-violet-600 dark:text-violet-300/90">Verify credential →</p>
                  </motion.a>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <GlassCard className="h-full">
              <div className="flex items-center gap-2">
                <Medal className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-300/90" aria-hidden />
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Achievements</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {achievements.map((a) => (
                  <li
                    key={a.title}
                    className="rounded-xl border border-slate-200/80 bg-slate-50/90 p-4 dark:border-white/[0.06] dark:bg-black/20"
                  >
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{a.title}</p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{a.detail}</p>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>

        <div className="mt-8">
          <div className="mb-6 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-600 dark:text-amber-300/90" aria-hidden />
            <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Coding profiles</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {codingProfiles.map((cp, idx) => (
              <motion.div
                key={cp.platform}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <GlassCard className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{cp.platform}</p>
                      <p className="mt-2 font-display text-lg font-semibold text-slate-900 dark:text-white">{cp.username}</p>
                    </div>
                    <a
                      href={cp.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-slate-200/90 bg-white px-3 py-1 text-xs font-semibold text-violet-700 shadow-sm transition hover:border-violet-300/50 dark:border-white/10 dark:bg-white/[0.04] dark:text-cyan-200 dark:shadow-none dark:hover:border-white/20"
                    >
                      Open ↗
                    </a>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {cp.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500 dark:bg-cyan-400/80" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
