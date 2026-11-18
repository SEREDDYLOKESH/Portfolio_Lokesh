import { motion } from 'framer-motion'
import { ExternalLink, Github, Sparkles } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { projects } from '../../data/site'

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          description="Selected projects demonstrating backend development, AI integration, cloud services, and secure API design."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-base-800/80 to-base-900/80 p-6 shadow-lg transition hover:border-accent-blue/30 hover:shadow-glow sm:p-7"
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent-purple/10 blur-3xl transition group-hover:bg-accent-cyan/15" aria-hidden="true" />
              <div className="relative">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-3 py-1 text-xs font-medium text-accent-cyan">
                  <Sparkles size={14} aria-hidden="true" />
                  Featured Project
                </div>
                <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
                <p className="mt-3 text-slate-400">{project.description}</p>

                <div className="mt-5">
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-300">Key Features</h4>
                  <ul className="grid gap-2 text-sm text-slate-400 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-300">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-accent-cyan/40 hover:bg-white/10"
                  >
                    <Github size={16} aria-hidden="true" />
                    GitHub Repository
                    <ExternalLink size={14} aria-hidden="true" className="opacity-70" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
