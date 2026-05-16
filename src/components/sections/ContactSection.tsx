import { motion } from 'framer-motion'
import { Loader2, Mail, Send } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { type FormEvent, useState } from 'react'
import { socialLinks } from '../../data/portfolio'

const iconFor = (label: string) => {
  switch (label) {
    case 'GitHub':
      return FaGithub
    case 'LinkedIn':
      return FaLinkedin
    case 'Instagram':
      return FaInstagram
    default:
      return Mail
  }
}

export function ContactSection() {
  const emailEntry = socialLinks.find((s) => s.label === 'Email')
  const mail = emailEntry?.href.replace('mailto:', '') ?? ''

  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [pending, setPending] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!mail) return
    setPending(true)
    const body = [`From: ${name}`, '', message].join('\n')
    const url = `mailto:${mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = url
    window.setTimeout(() => setPending(false), 600)
  }

  return (
    <section id="contact" className="scroll-mt-28 pb-28 pt-24 sm:pb-32 sm:pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700 dark:text-cyan-300/90">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Let’s build something elegant
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Share a concise note—internships, collaborations, or feedback on this portfolio. I typically respond within
            a few days.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200/90 bg-white/80 p-8 shadow-sm backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.04] dark:shadow-none"
          >
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Direct channels</p>
            <div className="mt-6 space-y-4">
              {socialLinks.map((s) => {
                const Icon = iconFor(s.label)
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={s.href.startsWith('mailto') ? undefined : 'noreferrer'}
                    className="flex items-center justify-between rounded-2xl border border-slate-200/90 bg-slate-50/90 px-4 py-3 text-sm text-slate-700 shadow-sm transition hover:border-violet-300/40 hover:text-slate-900 dark:border-white/[0.06] dark:bg-black/20 dark:text-slate-300 dark:shadow-none dark:hover:border-white/15 dark:hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-violet-600 dark:text-cyan-300/90" aria-hidden />
                      {s.label}
                    </span>
                    <span className="max-w-[55%] truncate text-xs text-slate-500 dark:text-slate-500">{s.handle}</span>
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            onSubmit={onSubmit}
            className="rounded-3xl border border-slate-200/90 bg-white/80 p-8 shadow-sm backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.04] dark:shadow-none"
          >
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Name
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-violet-400/70 dark:border-white/10 dark:bg-black/30 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-cyan-400/50"
                placeholder="Your name"
                autoComplete="name"
              />
            </label>
            <label className="mt-5 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Subject
              <input
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-violet-400/70 dark:border-white/10 dark:bg-black/30 dark:text-white dark:focus:border-cyan-400/50"
                placeholder="What’s this about?"
              />
            </label>
            <label className="mt-5 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Message
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="mt-2 w-full resize-y rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-violet-400/70 dark:border-white/10 dark:bg-black/30 dark:text-white dark:focus:border-cyan-400/50"
                placeholder="A short, specific message works best."
              />
            </label>
            <button
              type="submit"
              disabled={pending}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              Send via email
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
