import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '../../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavClick = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-base-950/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="container-width flex h-16 items-center justify-between md:h-20" aria-label="Primary">
        <a href="#home" className="font-display text-lg font-semibold text-white">
          <span className="text-gradient">Lokesh</span> Sereddy
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.resumeUrl}
            download={siteConfig.resumeFileName}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-accent-cyan/40 hover:bg-white/10"
          >
            <Download size={16} aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-white/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-base-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-width flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={handleNavClick}
                  className="rounded-lg px-3 py-3 text-base text-slate-200 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteConfig.resumeUrl}
                download={siteConfig.resumeFileName}
                onClick={handleNavClick}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan px-4 py-3 font-medium text-white"
              >
                <Download size={18} aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
