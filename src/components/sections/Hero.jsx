import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import AnimatedRoles from '../ui/AnimatedRoles'
import { siteConfig } from '../../data/site'

function LeetCodeIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  )
}

export { LeetCodeIcon }

export default function Hero() {
  const socials = [
    { label: 'GitHub', href: siteConfig.social.github, icon: Github },
    { label: 'LinkedIn', href: siteConfig.social.linkedin, icon: Linkedin },
    { label: 'LeetCode', href: siteConfig.social.leetcode, icon: LeetCodeIcon },
  ]

  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0 -z-10 bg-hero-glow" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden="true" />

      <div className="container-width section-padding pt-10 md:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300"
            >
              {siteConfig.name}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              {siteConfig.hero.heading}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-5 text-xl font-medium text-slate-200 sm:text-2xl"
            >
              <AnimatedRoles roles={siteConfig.roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              {siteConfig.hero.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan px-6 py-3 font-medium text-white shadow-glow transition hover:brightness-110"
              >
                View Projects
              </a>
              <a
                href={siteConfig.resumeUrl}
                download={siteConfig.resumeFileName}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:border-accent-cyan/40 hover:bg-white/10"
              >
                <Download size={18} aria-hidden="true" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium text-slate-200 transition hover:border-white/25 hover:text-white"
              >
                <Mail size={18} aria-hidden="true" />
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex items-center gap-3"
            >
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:border-accent-cyan/40 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-accent-purple/30 via-accent-blue/20 to-accent-cyan/20 blur-2xl" aria-hidden="true" />
            <div className="rounded-3xl border border-white/10 bg-base-900/70 p-6 shadow-2xl backdrop-blur">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <div className="space-y-3 font-mono text-sm text-slate-300">
                <p><span className="text-accent-cyan">const</span> <span className="text-white">profile</span> = {'{'}</p>
                <p className="pl-4">name: <span className="text-green-300">'Lokesh Sereddy'</span>,</p>
                <p className="pl-4">focus: [</p>
                <p className="pl-8 text-accent-purple">'Backend Engineering',</p>
                <p className="pl-8 text-accent-blue">'AI Applications',</p>
                <p className="pl-8 text-accent-cyan">'Machine Learning'</p>
                <p className="pl-4">],</p>
                <p className="pl-4">mindset: <span className="text-green-300">'Build. Scale. Learn.'</span></p>
                <p>{'}'}</p>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="font-display text-lg font-semibold text-white">9.27</p>
                  <p className="text-xs text-slate-400">CGPA</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="font-display text-lg font-semibold text-white">150+</p>
                  <p className="text-xs text-slate-400">DSA Solved</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="font-display text-lg font-semibold text-white">3</p>
                  <p className="text-xs text-slate-400">Career Tracks</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 flex justify-center lg:justify-start"
        >
          <a href="#about" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white" aria-label="Scroll to about section">
            <ArrowDown size={16} className="animate-bounce" />
            Scroll to explore
          </a>
        </motion.div>
      </div>
    </section>
  )
}
