import { motion } from 'framer-motion'
import { Binary, Code, FlaskConical, Globe, Sparkles, Wrench } from 'lucide-react'
import { type SkillGroup, skillGroups } from '../../data/portfolio'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'

const icons: Record<SkillGroup['icon'], typeof Code> = {
  languages: Code,
  web: Globe,
  ai: Sparkles,
  testing: FlaskConical,
  tools: Wrench,
  fundamentals: Binary,
}

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Engineering breadth across the full stack"
          subtitle="The languages, frameworks and tools I use to ship—each one backed by a project or internship on this page."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => {
            const Icon = icons[group.icon]
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/15 ring-1 ring-slate-200/80 dark:ring-white/10">
                      <Icon className="h-[18px] w-[18px] text-violet-600 dark:text-cyan-300/90" aria-hidden />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-slate-200/90 bg-white/80 px-2.5 py-1 text-[13px] font-medium text-slate-700 transition-colors hover:border-violet-300/60 hover:text-slate-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-cyan-300/30 dark:hover:text-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
