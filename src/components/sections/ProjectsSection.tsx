import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { useState } from 'react'
import type { Project } from '../../data/portfolio'
import { projects } from '../../data/portfolio'
import { cn } from '../../lib/cn'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'

const accentRing: Record<Project['accent'], string> = {
  violet: 'from-violet-500/40 via-fuchsia-500/10 to-transparent',
  cyan: 'from-cyan-400/35 via-sky-500/10 to-transparent',
  emerald: 'from-emerald-400/35 via-teal-500/10 to-transparent',
  amber: 'from-amber-400/35 via-orange-500/10 to-transparent',
  rose: 'from-rose-400/35 via-pink-500/10 to-transparent',
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [mediaFailed, setMediaFailed] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group"
    >
      <GlassCard className="flex h-full flex-col overflow-hidden p-0">
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-br opacity-90 transition duration-500 group-hover:opacity-100',
              accentRing[project.accent],
            )}
          />
          {!mediaFailed && project.media?.type === 'video' ? (
            <video
              className="relative z-[1] h-full w-full object-cover opacity-95 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100 dark:opacity-90 dark:mix-blend-screen"
              autoPlay
              loop
              muted
              playsInline
              onError={() => setMediaFailed(true)}
            >
              <source src={project.media.src} type="video/mp4" />
            </video>
          ) : !mediaFailed && project.media?.type === 'image' ? (
            <img
              src={project.media.src}
              alt={`${project.title} preview`}
              loading="lazy"
              className="relative z-[1] h-full w-full object-cover opacity-95 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
              onError={() => setMediaFailed(true)}
            />
          ) : (
            <div className="relative z-[1] flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
              <span className="font-display text-lg font-semibold text-slate-800 dark:text-white/90">{project.title}</span>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-slate-50 via-transparent to-transparent opacity-90 dark:from-[#07090f] dark:opacity-80" />
          {project.live ? (
            <span className="absolute left-4 top-4 z-[3] inline-flex items-center gap-1.5 rounded-full border border-emerald-300/70 bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-700 shadow-sm backdrop-blur dark:border-emerald-400/30 dark:bg-black/60 dark:text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" aria-hidden />
              Live
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
          {project.metrics && project.metrics.length > 0 ? (
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.metrics.map((m) => (
                <li
                  key={m}
                  className="rounded-md bg-violet-500/10 px-2 py-0.5 text-xs font-semibold text-violet-700 ring-1 ring-violet-500/20 dark:bg-cyan-400/10 dark:text-cyan-200 dark:ring-cyan-300/20"
                >
                  {m}
                </li>
              ))}
            </ul>
          ) : null}
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200/90 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200/90 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-violet-300/50 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/[0.06] sm:flex-none"
              >
                <FaGithub className="h-4 w-4" />
                Source
              </a>
            ) : null}
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110 sm:flex-none"
              >
                Live demo
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </GlassCard>
    </motion.article>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work across AI, full-stack, and systems"
          subtitle="Each card links to artifacts you can inspect—demos where hosted, repositories everywhere else."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
