'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const cases = [
  {
    sector: 'Restaurant',
    size: '30–50 employees',
    tag: 'Pilot',
    problem: 'Uncontrolled waste and daily administrative rework.',
    action: 'Process mapping + report automation',
    result: 'Improvement indicators in 3 weeks. Case being documented.',
  },
  {
    sector: 'Boutique hotel',
    size: '45 rooms',
    tag: 'Pilot',
    problem: 'Low direct booking conversion and slow response times.',
    action: 'Reservation flow redesign + occupancy dashboard',
    result: 'Response time reduced. Metrics being tracked.',
  },
  {
    sector: 'Restaurant group',
    size: '3 locations',
    tag: 'Pilot',
    problem: 'Uncontrolled staffing, high turnover, no performance indicators.',
    action: 'Operational mapping + shift scheduling and metrics system',
    result: 'Implementation in progress. Data being consolidated.',
  },
]

export function CasesTeaser() {
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
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] md:text-3xl">
            Results and learnings
          </h2>
          <p className="mt-3 max-w-xl text-sm text-[var(--color-text-muted)]">
            We are documenting pilot cases. If your operation fits our profile, you can apply for one
            of the available audit slots.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text-primary)]">{c.sector}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{c.size}</p>
                </div>
                <Badge variant="muted">{c.tag}</Badge>
              </div>
              <div className="border-t border-[var(--color-border)] pt-3 space-y-2">
                <p className="text-xs text-[var(--color-text-muted)]">
                  <span className="font-medium text-[var(--color-text-primary)]">Problem: </span>
                  {c.problem}
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  <span className="font-medium text-[var(--color-text-primary)]">Intervention: </span>
                  {c.action}
                </p>
                <p className="text-xs text-[var(--color-accent)]">{c.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <Button href="/cases" variant="secondary">
            View all cases →
          </Button>
        </div>
      </Container>
    </Section>
  )
}
