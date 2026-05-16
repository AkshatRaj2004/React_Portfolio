import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import { usePrefersReducedMotion } from '../../hooks/useReducedMotion'

/** Soft gradient orbs + subtle pointer parallax for depth. */
export function AmbientBackground() {
  const reduced = usePrefersReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 26, damping: 18, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 26, damping: 18, mass: 0.6 })
  const orb1 = useMotionTemplate`translate(${sx}px, ${sy}px)`
  const orb2 = useMotionTemplate`translate(${sx}px, ${sy}px) scale(1.05)`

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      mx.set(x * 18)
      my.set(y * 14)
    }
    if (!reduced) window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my, reduced])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {reduced ? (
        <>
          <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-3xl dark:bg-violet-600/25" />
          <div className="absolute -right-24 top-20 h-[380px] w-[380px] rounded-full bg-cyan-400/12 blur-3xl dark:bg-cyan-500/15" />
          <div className="absolute bottom-[-120px] left-1/3 h-[420px] w-[520px] rounded-full bg-blue-400/8 blur-3xl dark:bg-blue-600/10" />
        </>
      ) : (
        <>
          <motion.div
            style={{ transform: orb1 }}
            className="absolute -left-32 -top-32 h-[460px] w-[460px] rounded-full bg-violet-500/22 blur-3xl dark:bg-violet-600/30"
          />
          <motion.div
            style={{ transform: orb2 }}
            className="absolute -right-24 top-24 h-[400px] w-[400px] rounded-full bg-cyan-400/14 blur-3xl dark:bg-cyan-400/18"
          />
          <div className="absolute bottom-[-140px] left-[25%] h-[480px] w-[620px] rounded-full bg-blue-400/8 blur-3xl dark:bg-blue-600/12" />
          <Particles />
        </>
      )}
      <div className="noise absolute inset-0 opacity-[0.22] dark:opacity-[0.35]" />
    </div>
  )
}

function Particles() {
  const seeds = Array.from({ length: 42 }, (_, i) => ({
    id: i,
    left: `${(i * 37) % 100}%`,
    top: `${(i * 53) % 100}%`,
    delay: (i % 9) * 0.35,
    duration: 10 + (i % 7),
  }))

  return (
    <>
      {seeds.map((p) => (
        <motion.span
          key={p.id}
          className="absolute h-1 w-1 rounded-full bg-violet-400/35 dark:bg-white/25"
          style={{ left: p.left, top: p.top }}
          animate={{ opacity: [0.15, 0.65, 0.15], y: [0, -18, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}
    </>
  )
}
