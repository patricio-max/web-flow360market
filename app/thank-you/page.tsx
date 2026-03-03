import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Request received | Flow360 Market',
  description: 'Your Flow360 Audit request has been received. We respond only if there is a real fit.',
  robots: { index: false, follow: false },
}

const steps = [
  { icon: '✓', label: 'Request submitted', desc: 'Right now', done: true },
  { icon: '⏳', label: 'Internal review', desc: '24–48 business hours', done: false },
  { icon: '📞', label: 'Brief call if there is a fit', desc: '15–25 minutes', done: false },
  { icon: '🚀', label: 'Proposal and kickoff', desc: 'If we move forward', done: false },
]

export default function ThankYouPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-xl py-12 text-center">
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-2xl">
            ✓
          </div>

          <h1 className="text-2xl font-extrabold text-[var(--color-text-primary)] md:text-3xl">
            Request received.
          </h1>

          <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
            We review every application carefully. We only respond if there is a real fit between
            your operation and what we can do together.
          </p>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            If there is, we will contact you to schedule a brief 15–25 minute call.
          </p>

          {/* Timeline */}
          <div className="mt-10 space-y-3 text-left">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4"
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm ${
                    step.done
                      ? 'bg-[var(--color-accent)] text-white'
                      : 'bg-[var(--color-border)] text-[var(--color-text-muted)]'
                  }`}
                >
                  {step.icon}
                </div>
                <div>
                  <p
                    className={`text-sm font-medium ${
                      step.done ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-muted)]'
                    }`}
                  >
                    {step.label}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="/audit" variant="secondary">
              See how we work
            </Button>
            <Button href="/" variant="ghost">
              Back to home
            </Button>
          </div>

          {/* Urgency note */}
          <p className="mt-8 text-xs text-[var(--color-text-muted)]">
            If it is urgent, you can write to{' '}
            <Link
              href="mailto:hello@flow360market.com"
              className="text-[var(--color-accent)] hover:underline"
            >
              hello@flow360market.com
            </Link>
          </p>
        </div>
      </Container>
    </Section>
  )
}
