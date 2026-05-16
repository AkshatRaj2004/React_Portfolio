import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './useReducedMotion'

export function useTypingRoles(
  roles: readonly string[],
  options?: { typingMs?: number; deletingMs?: number; pauseMs?: number },
) {
  const reduced = usePrefersReducedMotion()
  const [text, setText] = useState('')
  const typingMs = options?.typingMs ?? 42
  const deletingMs = options?.deletingMs ?? 28
  const pauseMs = options?.pauseMs ?? 1400

  useEffect(() => {
    if (reduced) return

    let roleIndex = 0
    let charIndex = 0
    let deleting = false
    let timeout: ReturnType<typeof setTimeout>

    const tick = () => {
      const role = roles[roleIndex % roles.length] ?? ''
      if (deleting) {
        charIndex = Math.max(0, charIndex - 1)
        setText(role.slice(0, charIndex))
        if (charIndex === 0) {
          deleting = false
          roleIndex += 1
          timeout = setTimeout(tick, pauseMs / 2)
          return
        }
        timeout = setTimeout(tick, deletingMs)
        return
      }

      charIndex = Math.min(role.length, charIndex + 1)
      setText(role.slice(0, charIndex))
      if (charIndex === role.length) {
        deleting = true
        timeout = setTimeout(tick, pauseMs)
        return
      }
      timeout = setTimeout(tick, typingMs)
    }

    tick()
    return () => clearTimeout(timeout)
  }, [roles, reduced, typingMs, deletingMs, pauseMs])

  return reduced ? (roles[0] ?? '') : text
}
