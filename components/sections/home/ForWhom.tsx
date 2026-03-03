'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'

const idealFor = [
  'You have a complex daily operation (people, shifts, inventory, service)',
  'You feel "silent chaos": Excel, WhatsApp, repeated tasks, recurring errors',
  'You already have basic metrics and want to improve them',
  'You can dedicate team time and share operational data',
  'You are a consulting firm needing an operational transformation partner for client projects',
]

const notFor = [
  '"I just want to learn about AI without changing anything"',
  '"I\'m looking for a discount or just want to see what happens"',
  '"I can\'t share data or commit team time"',
  'Businesses without an established operation or active team',
]

const modes = [
  {
    label: 'Direct',
    desc: 'We work directly with your company — diagnosing, redesigning and building the roadmap.',
  },
  {
    label: 'Embedded',
    desc: 'We integrate into your consultancy team to lead operational transformation projects end-to-end for your clients.',
  },
]

export function ForWhom() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section className="bg-[var(--color-surface)]/40">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <h2 className="mb-10 text-2xl font-bold text-[var(--color-text-primary)] md:text-3xl">
            We work with businesses that are serious about change.
          </h2>

          {/* Two engagement modes */}
          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {modes.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-5 py-4"
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  {m.label} engagement
                </p>
                <p className="text-sm text-[var(--color-text-muted)]">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Ideal if */}
            <div className="rounded-lg border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                Ideal if:
              </p>
              <ul className="space-y-3">
                {idealFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not for */}
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Not for:
              </p>
              <ul className="space-y-3">
                {notFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-border)] text-[var(--color-text-muted)] text-xs">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
