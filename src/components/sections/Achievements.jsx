import { motion } from 'framer-motion'
import { ExternalLink, Trophy, Target } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { achievements } from '../../data/site'
import { LeetCodeIcon } from './Hero'

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-width">
        <SectionHeading
          eyebrow="Milestones"
          title="Achievements & Problem Solving"
          description="Verified highlights reflecting consistent problem-solving practice and competitive performance."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {achievements.highlights.map((item, idx) => {
              const Icon = idx === 0 ? Target : Trophy
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-base-900/60 p-6 transition hover:border-accent-purple/30 hover:shadow-glow"
                >
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-purple/20 via-accent-blue/20 to-accent-cyan/20 text-accent-cyan">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-slate-400">{item.description}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-accent-cyan/20 bg-gradient-to-br from-accent-purple/10 via-base-900 to-accent-cyan/10 p-6 sm:p-7"
          >
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-accent-cyan/20 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-base-950/60 text-[#FFA116]">
                  <LeetCodeIcon className="h-7 w-7" />
                </span>
                <div>
                  <p className="text-sm text-slate-400">Dedicated LeetCode Profile</p>
                  <h3 className="font-display text-2xl font-semibold text-white">LeetCode</h3>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <div className="rounded-xl border border-white/10 bg-base-950/40 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Username</p>
                  <p className="mt-1 font-medium text-white">{achievements.leetcode.username}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-base-950/40 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Verified Statistic</p>
                  <p className="mt-1 font-display text-2xl font-semibold text-gradient">{achievements.leetcode.stat}</p>
                </div>
              </div>

              <a
                href={achievements.leetcode.profileUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-base-950 transition hover:bg-slate-100 sm:w-auto"
              >
                Visit LeetCode Profile
                <ExternalLink size={16} aria-hidden="true" />
              </a>

              <p className="mt-4 text-xs text-slate-500">
                Only verified information is displayed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
