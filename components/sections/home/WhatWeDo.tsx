'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

const items = [
  {
    n: '01',
    title: 'Operational & Financial Flow Mapping',
    desc: 'How work and money move through your operation. Seen in full, from process to margin.',
  },
  {
    n: '02',
    title: 'Friction Diagnosis',
    desc: 'Lost time, errors, rework, waste and margin leakage detected with data, not assumptions.',
  },
  {
    n: '03',
    title: 'Impact-Based Prioritization',
    desc: 'Impact vs effort vs risk matrix. You know exactly what to tackle first and why.',
  },
  {
    n: '04',
    title: '90-day / 12-month Roadmap',
    desc: 'A concrete, actionable plan — not a presentation to forget. With milestones, owners and metrics.',
  },
  {
    n: '05',
    title: 'Technology Recommendations',
    desc: 'Integrations and automation where applicable. No smoke, no unnecessary tools.',
  },
  {
    n: '06',
    title: 'Embedded in Consultancies',
    desc: 'We integrate into consulting teams to lead client operational transformation projects end-to-end — from diagnosis to execution.',
  },
]

export function WhatWeDo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section>
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-10 max-w-2xl"
        >
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] md:text-3xl">
            What we deliver is not a report.{' '}
            <span className="text-[var(--color-accent)]">It&apos;s a system.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="h-full">
                <p className="mb-3 text-2xl font-bold text-[var(--color-accent)]">{item.n}</p>
                <h3 className="mb-2 text-sm font-semibold text-[var(--color-text-primary)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
