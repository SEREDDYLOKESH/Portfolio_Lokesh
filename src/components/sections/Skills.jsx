import { motion } from 'framer-motion'
import { Braces, Brain, Cloud, Code2, Database, Layers, Cpu } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { skillCategories } from '../../data/site'

const icons = {
  'Programming Languages': Code2,
  'Backend Development': Braces,
  Databases: Database,
  'Cloud & DevOps': Cloud,
  'Artificial Intelligence & LLM': Brain,
  'Machine Learning & Deep Learning': Cpu,
  'Computer Science Fundamentals': Layers,
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-base-900/30">
      <div className="container-width">
        <SectionHeading
          eyebrow="Expertise"
          title="Technical Skills"
          description="Technologies and foundations I use to build backend services and intelligent applications."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, idx) => {
            const Icon = icons[category.title] || Layers
            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-white/10 bg-base-900/60 p-6 transition hover:border-accent-purple/30 hover:shadow-glow"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-purple/20 via-accent-blue/20 to-accent-cyan/20 text-accent-cyan">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition group-hover:border-white/20 group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
