'use client'

import { motion, type Variants } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-grid-pattern">
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-[var(--color-accent)]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-6 py-24 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6 max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <Badge variant="accent">Proven methodology</Badge>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold leading-tight tracking-tight text-gradient md:text-6xl"
          >
            We redesign business operating systems.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl font-semibold text-[var(--color-text-muted)] md:text-2xl"
          >
            Less friction. Better margins. Automated decisions.
          </motion.p>

          {/* Body */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]"
          >
            Across hospitality, manufacturing, logistics, retail and consulting firms, the problem
            is rarely{' '}
            <em className="not-italic text-[var(--color-text-primary)]">
              &quot;lack of effort&quot;
            </em>
            . It&apos;s a poorly designed system: disconnected processes, data and decisions.
            Flow360 works directly with businesses — or embedded within consultancies leading
            end-to-end operational transformation projects.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <Button href="/request" size="lg">
              Request Flow360 Audit
            </Button>
            <Button href="/audit" variant="secondary" size="lg">
              See how we work
            </Button>
          </motion.div>

          {/* Trust line */}
          <motion.div
            variants={itemVariants}
            className="border-t border-[var(--color-border)] pt-6 w-full space-y-2"
          >
            <p className="text-xs text-[var(--color-text-muted)]">
              <span className="mr-2">🏆</span>
              <span className="font-medium text-[var(--color-text-primary)]">Methodology:</span>{' '}
              Lean Six Sigma · Operational Architecture · Intelligent Automation
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              <span className="mr-2">🎓</span>
              <span className="font-medium text-[var(--color-text-primary)]">Certified:</span>{' '}
              Lean® Six Sigma Green Belt — KAIZEN™ Institute{' '}
              <span className="text-[var(--color-accent)]">· N° Reg: 47.908</span>
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              <span className="mr-2">🔒</span>
              <span className="font-medium text-[var(--color-text-primary)]">Capacity:</span>{' '}
              We never work with more than 3 clients simultaneously.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
