import { motion } from 'framer-motion'
import { Award, GraduationCap } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { certifications, education } from '../../data/site'

export default function Education() {
  return (
    <section id="education" className="section-padding bg-base-900/30">
      <div className="container-width">
        <SectionHeading
          eyebrow="Journey"
          title="Education"
          description="Academic background that supports my foundation in computer science and engineering."
        />

        <div className="relative mx-auto max-w-4xl">
          <div
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent-purple/60 via-accent-blue/40 to-accent-cyan/20 sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden="true"
          />
          <div className="space-y-8">
            {education.map((item, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                    isLeft ? 'sm:pr-12' : 'sm:ml-auto sm:pl-12'
                  }`}
                >
                  <span
                    className={`absolute left-4 top-6 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-white/15 bg-base-900 text-accent-cyan shadow-glow sm:left-auto sm:translate-x-0 ${
                      isLeft ? 'sm:-right-[4.125rem]' : 'sm:-left-[4.125rem]'
                    }`}
                    aria-hidden="true"
                  >
                    <GraduationCap size={16} />
                  </span>

                  <div className="rounded-2xl border border-white/10 bg-base-900/70 p-5 text-left shadow-lg sm:p-6">
                    <p className="text-sm font-medium text-accent-cyan">{item.period}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-white sm:text-xl">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-slate-300">{item.institution}</p>
                    <p className="mt-3 inline-flex rounded-full border border-accent-purple/30 bg-accent-purple/10 px-3 py-1 text-sm font-medium text-slate-100">
                      {item.score}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div id="certifications" className="mx-auto mt-16 max-w-4xl scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 sm:p-8"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-blue/15 text-accent-blue">
                <Award size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold text-white">Certifications</h3>
                <p className="text-sm text-slate-400">Recognitions and certifications earned.</p>
              </div>
            </div>
            <ul className="grid gap-3">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-base-950/40 p-4 text-slate-300"
                >
                  <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan" aria-hidden="true" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
