'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function CtaFinal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section className="bg-[var(--color-surface)]">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] md:text-3xl">
            Want to know where your operation is losing margin and time?
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Request a Flow360 Audit. We review every application and respond only if there&apos;s a real fit.
            We never work with more than 3 clients simultaneously.
          </p>
          <div className="mt-8">
            <Button href="/request" size="lg">
              Go to the form
            </Button>
          </div>
          <p className="mt-4 text-xs text-[var(--color-text-muted)]">
            No discounts. The audit is an investment to make decisions with evidence.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
