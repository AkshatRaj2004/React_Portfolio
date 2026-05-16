import { motion } from 'framer-motion'
import { Download, ExternalLink, FileText, Loader2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { getResumeUrl, site } from '../../data/portfolio'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * Edge/Chromium often breaks embedded PDF if the iframe URL has query strings (?v=cache).
 * We fetch the PDF and use a blob: URL for preview — same cache-busting fetch, clean embed URL.
 */
/** Remount with key={site.resumeVersion} when the PDF file version changes. */
function ResumePdfFrame() {
  const [blobUrl, setBlobUrl] = useState<string | null>(null)
  const [phase, setPhase] = useState<'loading' | 'ready' | 'error'>('loading')
  const blobRef = useRef<string | null>(null)

  useEffect(() => {
    let cancelled = false

    const src = getResumeUrl()

    ;(async () => {
      try {
        const res = await fetch(src)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const blob = await res.blob()
        const url = URL.createObjectURL(blob)
        blobRef.current = url
        if (cancelled) {
          URL.revokeObjectURL(url)
          return
        }
        setBlobUrl(url)
        setPhase('ready')
      } catch {
        if (!cancelled) setPhase('error')
      }
    })()

    return () => {
      cancelled = true
      const u = blobRef.current
      if (u) URL.revokeObjectURL(u)
      blobRef.current = null
    }
  }, [])

  const tabUrl = getResumeUrl()

  if (phase === 'loading') {
    return (
      <div className="flex aspect-[4/3] min-h-[260px] flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200/90 bg-slate-50 dark:border-white/10 dark:bg-slate-900">
        <Loader2 className="h-8 w-8 animate-spin text-violet-600 dark:text-cyan-400" aria-hidden />
        <p className="text-sm text-slate-600 dark:text-slate-400">Loading preview…</p>
      </div>
    )
  }

  if (phase === 'error' || !blobUrl) {
    return (
      <div className="flex aspect-[4/3] min-h-[260px] flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200/90 bg-slate-50 p-6 text-center dark:border-white/10 dark:bg-slate-900">
        <FileText className="h-10 w-10 text-violet-600 dark:text-cyan-400" aria-hidden />
        <p className="max-w-sm text-sm text-slate-600 dark:text-slate-400">
          Embedded preview failed to load. Use <strong>Open in new tab</strong> — your PDF opens in the browser’s viewer.
        </p>
        <a
          href={tabUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white"
        >
          <ExternalLink className="h-4 w-4" />
          Open PDF
        </a>
      </div>
    )
  }

  return (
    <div className="relative aspect-[4/3] min-h-[260px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-inner dark:border-white/10 dark:bg-slate-950">
      {/* Blob URL avoids ?query in iframe — fixes many Edge “Something went wrong” embed errors */}
      <iframe title="Résumé PDF preview" src={blobUrl} className="absolute inset-0 h-full w-full rounded-2xl border-0 bg-white dark:bg-slate-900" />
    </div>
  )
}

export function ResumeSection() {
  return (
    <section id="resume" className="scroll-mt-28 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Résumé"
          title="Download a recruiter-ready PDF"
          subtitle="A concise, one-page summary of my experience, projects, and skills — preview it below or download the latest copy."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <GlassCard className="relative overflow-hidden">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-400/8 blur-3xl dark:from-violet-500/25 dark:to-cyan-400/10" />
            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-slate-50/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                  <FileText className="h-4 w-4 text-violet-600 dark:text-cyan-300" aria-hidden />
                  PDF · keep roles, impact, and links current
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-slate-900 dark:text-white">One click to share my story</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Crafted to be scanned in under a minute — roles, impact, and links to the work behind every line.
                  Download the PDF or open it in a new tab to view the full document.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={getResumeUrl()}
                    download="Akshat_Resume.pdf"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(139,92,246,0.35)] transition hover:brightness-110"
                  >
                    <Download className="h-4 w-4" />
                    Download résumé
                  </a>
                  <a
                    href={getResumeUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-violet-300/50 dark:border-white/15 dark:bg-white/[0.03] dark:text-white dark:shadow-none dark:hover:border-white/25"
                  >
                    Open in new tab
                  </a>
                </div>
              </div>

              <div className="flex min-h-0 flex-col gap-2">
                <ResumePdfFrame key={site.resumeVersion} />
                <p className="text-center text-[11px] text-slate-500 dark:text-slate-500">
                  Live preview · always reflects the latest version of the résumé.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
