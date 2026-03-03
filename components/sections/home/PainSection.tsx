'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'

const pains = [
  'Repeated tasks consuming hours every day (and nobody tracks them)',
  'Excel and WhatsApp as the "nervous system" of the business',
  'Errors, complaints, rework and accumulated waste',
  'Slow decisions due to unreliable data',
]

export function PainSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section className="bg-[var(--color-surface)]/40">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 items-start"
        >
          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold leading-tight text-[var(--color-text-primary)] md:text-3xl">
              Operational chaos is usually silent… until it gets expensive.
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-4">
            <ul className="space-y-3">
              {pains.map((pain, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400 text-xs font-bold">
                    ✕
                  </span>
                  {pain}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base font-semibold text-[var(--color-text-primary)] border-l-2 border-[var(--color-accent)] pl-4">
              The solution is not more effort. It&apos;s better architecture.
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
