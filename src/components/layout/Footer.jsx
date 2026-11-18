import { Github, Linkedin, ExternalLink } from 'lucide-react'
import { siteConfig } from '../../data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  const links = [
    { label: 'GitHub', href: siteConfig.social.github, icon: Github },
    { label: 'LinkedIn', href: siteConfig.social.linkedin, icon: Linkedin },
    { label: 'LeetCode', href: siteConfig.social.leetcode, icon: ExternalLink },
  ]

  return (
    <footer className="border-t border-white/10 bg-base-900/40">
      <div className="container-width flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-400 sm:flex-row">
        <p>© {year} {siteConfig.name}. Built with React, Vite, Tailwind CSS, and Framer Motion.</p>
        <div className="flex items-center gap-4">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-slate-400 transition hover:text-white"
              aria-label={label}
            >
              <Icon size={16} aria-hidden="true" />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
