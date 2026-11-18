import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { about } from '../../data/site'

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-width">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description="A focused engineering journey across backend systems, cloud, and intelligent applications."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 sm:p-8"
          >
            <p className="text-lg leading-relaxed text-slate-200">{about.paragraphs[0]}</p>
            <p className="mt-4 text-slate-400">
              I am building a strong profile for Backend Engineer, AI Engineer, and ML Engineer roles by combining solid computer science fundamentals with hands-on development in APIs, databases, cloud services, and LLM-powered systems.
            </p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {about.highlights.map((item) => (
              <motion.li
                key={item}
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-base-900/50 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent-cyan" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-slate-300 sm:text-base">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
