'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'

const items = [
  { icon: '📄', text: 'Executive summary (2–3 pages, decision-ready)' },
  { icon: '📋', text: 'Full report (process maps, findings, opportunities)' },
  { icon: '⚖️', text: 'Prioritization matrix (impact × effort × risk)' },
  { icon: '🗺️', text: '90-day / 12-month roadmap' },
  { icon: '🔌', text: 'Data & recommended integrations checklist' },
  { icon: '💰', text: 'ROI and risk estimation (with transparent assumptions)' },
]

export function Deliverables() {
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
          <h2 className="mb-8 text-2xl font-bold text-[var(--color-text-primary)] md:text-3xl">
            What you walk away with
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="flex items-start gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3"
              >
                <span className="text-lg leading-none">{item.icon}</span>
                <p className="text-sm text-[var(--color-text-muted)]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
