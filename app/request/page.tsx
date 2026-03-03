import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { AuditForm } from '@/components/forms/AuditForm'

export const metadata: Metadata = {
  title: 'Request Audit | Flow360 Market',
  description:
    'Apply for a Flow360 Audit. We never work with more than 3 clients simultaneously and respond only if there is a real fit.',
}

export default function RequestPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-10 border-b border-[var(--color-border)] pb-8">
            <h1 className="text-2xl font-extrabold text-[var(--color-text-primary)] md:text-3xl">
              Flow360 Audit Request
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
              Fill out the form honestly. We review every application and respond
              <strong className="text-[var(--color-text-primary)]"> only if there is a real fit</strong>.
              If there is, we schedule a 15–25 minute call.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-[var(--color-text-muted)]">
              <span className="flex items-center gap-1">
                <span className="text-[var(--color-accent)]">✓</span> 5 sections · ~10 min
              </span>
              <span className="flex items-center gap-1">
                <span className="text-[var(--color-accent)]">✓</span> Max. 3 clients at a time
              </span>
              <span className="flex items-center gap-1">
                <span className="text-[var(--color-accent)]">✓</span> No spam
              </span>
            </div>
          </div>

          <AuditForm />
        </div>
      </Container>
    </Section>
  )
}
