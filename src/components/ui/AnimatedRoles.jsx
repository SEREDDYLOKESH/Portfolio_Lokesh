import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedRoles({ roles, interval = 2600 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!roles?.length) return undefined
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, interval)
    return () => clearInterval(id)
  }, [roles, interval])

  const current = roles[index]

  return (
    <span className="relative inline-flex min-h-[1.4em] items-center" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-gradient"
        >
          {current}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
