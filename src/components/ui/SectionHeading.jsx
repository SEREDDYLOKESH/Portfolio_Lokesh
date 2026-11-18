import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 flex flex-col gap-3 ${alignment}`}
    >
      {eyebrow && (
        <span className="inline-flex rounded-full border border-accent-purple/30 bg-accent-purple/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-accent-cyan">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description && (
        <p className="max-w-2xl text-base text-slate-400 sm:text-lg">{description}</p>
      )}
    </motion.div>
  )
}
