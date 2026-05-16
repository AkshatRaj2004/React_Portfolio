import { motion } from 'framer-motion'
import { skillCategories } from '../../data/portfolio'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'
import { SkillMeter } from '../ui/SkillMeter'

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Engineering breadth across the full stack"
          subtitle="Self-assessed proficiency bars communicate focus areas—always backed by projects and practice."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{cat.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-500">{cat.description}</p>
                  </div>
                  <span className="rounded-full border border-slate-200/90 bg-slate-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400">
                    Live stack
                  </span>
                </div>
                <div className="mt-6 space-y-5">
                  {cat.items.map((it) => (
                    <SkillMeter key={it.name} label={it.name} value={it.level} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
