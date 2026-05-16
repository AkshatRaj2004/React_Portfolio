import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/useReducedMotion'

/** Soft trailing glow — disabled for reduced motion and coarse pointers. */
export function GlowCursor() {
  const reduced = usePrefersReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 280, damping: 28 })
  const sy = useSpring(y, { stiffness: 280, damping: 28 })
  const transform = useMotionTemplate`translate(${sx}px, ${sy}px)`

  useEffect(() => {
    if (reduced) return
    const mq = window.matchMedia('(pointer: fine)')
    const update = () => setEnabled(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [reduced])

  useEffect(() => {
    if (!enabled) return
    const move = (e: PointerEvent) => {
      x.set(e.clientX - 14)
      y.set(e.clientY - 14)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [enabled, x, y])

  if (reduced || !enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[55] hidden h-7 w-7 rounded-full dark:md:block"
      style={{
        transform,
        background:
          'radial-gradient(circle at center, rgba(34,211,238,0.35), rgba(139,92,246,0.15), transparent 65%)',
        mixBlendMode: 'screen',
      }}
    />
  )
}
