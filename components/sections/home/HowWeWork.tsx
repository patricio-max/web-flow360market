'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

const steps = [
  {
    n: '01',
    label: 'Define',
    desc: 'Project goals, baseline metrics and constraints. We align expectations before we start.',
  },
  {
    n: '02',
    label: 'Map & Measure',
    desc: 'As-Is process map and rapid measurement of real operations. No assumptions.',
  },
  {
    n: '03',
    label: 'Diagnose',
    desc: 'Frictions and opportunities quantified. Knowing what hurts and how much it costs.',
  },
  {
    n: '04',
    label: 'Redesign & Automate',
    desc: 'New operating system design. Automation and AI only where it generates measurable return.',
  },
  {
    n: '05',
    label: 'Control',
    desc: 'KPI dashboard, key metrics and a continuity plan to sustain the improvement.',
  },
]

export function HowWeWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section id="how-we-work">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            Methodology
          </p>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] md:text-3xl">
            Flow360 OS Redesign
          </h2>
          <p className="mt-2 text-[var(--color-text-muted)]">A clear process. No improvisation.</p>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-[26px] top-0 hidden h-full w-px bg-[var(--color-border)] md:block"
          />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-5"
              >
                {/* Step number */}
                <div className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-bg)] text-xs font-bold text-[var(--color-accent)]">
                  {step.n}
                </div>
                {/* Content */}
                <div className="flex-1 pb-6">
                  <h3 className="mb-1 text-sm font-semibold text-[var(--color-text-primary)]">
                    {step.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Button href="/request">Request Audit</Button>
        </div>
      </Container>
    </Section>
  )
}
