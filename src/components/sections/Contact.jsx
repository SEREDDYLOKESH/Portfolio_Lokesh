import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, Send, ExternalLink } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { siteConfig } from '../../data/site'
import { LeetCodeIcon } from './Hero'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', message: '' })

  const contacts = useMemo(
    () => [
      {
        label: 'Email',
        value: siteConfig.contact.email,
        href: siteConfig.contact.email.startsWith('[')
          ? '#contact'
          : `mailto:${siteConfig.contact.email}`,
        icon: Mail,
        external: false,
      },
      {
        label: 'Phone',
        value: siteConfig.contact.phone,
        href: `tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`,
        icon: Phone,
        external: false,
      },
      {
        label: 'GitHub',
        value: siteConfig.contact.github,
        href: siteConfig.contact.github,
        icon: Github,
        external: true,
      },
      {
        label: 'LinkedIn',
        value: siteConfig.contact.linkedin,
        href: siteConfig.contact.linkedin,
        icon: Linkedin,
        external: true,
      },
      {
        label: 'LeetCode',
        value: siteConfig.contact.leetcode,
        href: siteConfig.contact.leetcode,
        icon: LeetCodeIcon,
        external: true,
      },
    ],
    []
  )

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    if (!name || !email || !subject || !message) {
      setStatus({ type: 'error', message: 'Please fill in all fields before sending.' })
      return
    }

    const to = siteConfig.contact.email.startsWith('[') ? '' : siteConfig.contact.email
    const mailSubject = encodeURIComponent(subject)
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )

    if (to) {
      window.location.href = `mailto:${to}?subject=${mailSubject}&body=${mailBody}`
      setStatus({ type: 'success', message: 'Your email draft is ready in your default mail app.' })
    } else {
      setStatus({
        type: 'success',
        message:
          'Form captured. Add your email in src/data/site.js to enable direct mail draft opening.',
      })
    }
    setForm(initialForm)
  }

  return (
    <section id="contact" className="section-padding bg-base-900/30">
      <div className="container-width">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Great Together."
          description="Open to opportunities and conversations around backend engineering, AI, and machine learning."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-base-900/60 p-6 sm:p-7"
          >
            <h3 className="font-display text-xl font-semibold text-white">Contact Details</h3>
            <p className="mt-2 text-slate-400">
              Reach out through any of the channels below.
            </p>
            <ul className="mt-6 space-y-3">
              {contacts.map(({ label, value, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer noopener' : undefined}
                    className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-accent-cyan/30 hover:bg-white/[0.06]"
                  >
                    <span className="mt-0.5 inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-white/5 text-accent-cyan">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-slate-400">{label}</span>
                      <span className="block break-all font-medium text-slate-100 group-hover:text-white">{value}</span>
                    </span>
                    {external && <ExternalLink size={16} className="mt-1 text-slate-500" aria-hidden="true" />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/10 bg-base-900/60 p-6 sm:p-7"
          >
            <h3 className="font-display text-xl font-semibold text-white">Send a Message</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  className="w-full rounded-xl border border-white/10 bg-base-950/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-accent-cyan/40"
                  placeholder="Your name"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  className="w-full rounded-xl border border-white/10 bg-base-950/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-accent-cyan/40"
                  placeholder="you@example.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-300">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={onChange}
                  className="w-full rounded-xl border border-white/10 bg-base-950/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-accent-cyan/40"
                  placeholder="How can I help?"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  className="w-full resize-y rounded-xl border border-white/10 bg-base-950/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-accent-cyan/40"
                  placeholder="Write your message..."
                />
              </div>
            </div>

            {status.message && (
              <p
                className={`mt-4 text-sm ${status.type === 'error' ? 'text-red-400' : 'text-emerald-400'}`}
                role="status"
              >
                {status.message}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan px-6 py-3 font-medium text-white shadow-glow transition hover:brightness-110 sm:w-auto"
            >
              <Send size={18} aria-hidden="true" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
