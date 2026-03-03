import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Accordion } from '@/components/ui/Accordion'

export const metadata: Metadata = {
  title: 'Flow360 Audit | Operational Diagnosis and Intelligent Automation',
  description:
    'Paid audit in 2–4 weeks: process mapping, friction diagnosis, prioritization, and a 90-day + 12-month roadmap with estimated ROI.',
}

const includes = [
  'Workshops with key areas (2 to 4 sessions of 60–90 min)',
  'Review of current operational processes (As-Is map)',
  'Data review and analysis (sales, costs, staffing, operations)',
  'Friction and opportunity diagnosis (Lean + automation)',
  'Economic impact estimation (with transparent assumptions)',
  '90-day and 12-month roadmap',
  'Technology recommendations and prioritized integrations',
]

const requirements = [
  'An internal sponsor (project owner, at least mid-level management)',
  'Access to reports or basic exports (or representative samples)',
  'Availability for 2–4 working sessions (60–90 min each)',
  'Genuine openness to review and change processes',
]

const idealFor = [
  'Company with real operations, active team and identified friction problems',
  'Genuine willingness to review processes and execute changes',
  'Access to minimum data (even if disorganized)',
  'The responsible person can dedicate real time to the project',
]

const notFor = [
  'Projects without an internal sponsor or with blocked data access',
  '"I want to see if it works" without commitment to execution',
  'Budget < USD 2,500 for the audit itself',
]

const faqItems = [
  {
    question: 'Do you also implement the changes?',
    answer:
      'We can support implementation as a separate service or work alongside your team and existing vendors. The audit leaves the plan ready to execute independently.',
  },
  {
    question: 'Do I need to have my data organized before we start?',
    answer:
      'No. We can work with raw exports, partial reports or representative samples. Part of the work is organizing the information architecture.',
  },
  {
    question: 'Is this an AI consulting service?',
    answer:
      'No. It is a business operating system redesign. AI and automation appear only where there is a clear ROI. We don\'t sell technology — we solve operational problems.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Quick wins (immediate improvements without investment) in 7–14 days if there is data and a decision. The 90-day roadmap defines measurable impact. Real transformation takes 6–12 months.',
  },
  {
    question: 'How many projects do you take per month?',
    answer:
      'We never work with more than 3 clients simultaneously. That\'s a firm rule — not a sales tactic. It guarantees full dedication to every engagement.',
  },
  {
    question: 'Do you only work with hotels and restaurants?',
    answer:
      'That is our core, but we work with any operationally intensive business (shifts, inventory, service, repetitive processes). We evaluate case by case.',
  },
]

export default function AuditPage() {
  return (
    <>
      {/* Hero */}
      <Section className="border-b border-[var(--color-border)]">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-6 flex flex-wrap gap-2">
              <Badge variant="accent">2–4 weeks</Badge>
              <Badge variant="muted">ROI estimate included</Badge>
              <Badge variant="muted">Max. 3 clients</Badge>
            </div>
            <h1 className="text-3xl font-extrabold leading-tight text-[var(--color-text-primary)] md:text-5xl">
              Flow360 Audit
              <br />
              <span className="text-[var(--color-text-muted)]">Architectural Business Diagnosis</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)]">
              In 2–4 weeks we identify invisible losses, redesign the operating system and define a
              measurable roadmap.
            </p>
            <div className="mt-8">
              <Button href="/request" size="lg">
                Complete the form
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* What's included */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-xl font-bold text-[var(--color-text-primary)]">
                What does the Audit include?
              </h2>
              <ul className="space-y-3">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-xl font-bold text-[var(--color-text-primary)]">
                What do we need from your side?
              </h2>
              <ul className="space-y-3 mb-4">
                {requirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                    <span className="mt-0.5 text-[var(--color-accent)]">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-muted)] italic">
                You don&apos;t need to have your data perfectly organized. That&apos;s part of what we solve
                together.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing */}
      <Section className="bg-[var(--color-surface)]/40">
        <Container>
          <div className="mx-auto max-w-lg rounded-xl border border-[var(--color-accent)]/20 bg-[var(--color-surface)] p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Investment
            </p>
            <p className="mt-4 text-4xl font-extrabold text-[var(--color-text-primary)]">
              From USD 2,500
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              depending on size, complexity and number of areas involved
            </p>
            <p className="mt-4 text-xs text-[var(--color-text-muted)] italic">
              No discounts. We never work with more than 3 clients simultaneously — that ensures full focus on every project.
            </p>
            <div className="mt-6">
              <Button href="/request" size="lg" className="w-full justify-center">
                Request my slot
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* For whom / Not for */}
      <Section>
        <Container>
          <h2 className="mb-8 text-xl font-bold text-[var(--color-text-primary)]">
            Who is it for?
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                Ideal if:
              </p>
              <ul className="space-y-3">
                {idealFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                    <span className="mt-0.5 text-[var(--color-accent)]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Not for:
              </p>
              <ul className="space-y-3">
                {notFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                    <span className="mt-0.5 text-red-400">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-[var(--color-surface)]/40">
        <Container>
          <h2 className="mb-8 text-xl font-bold text-[var(--color-text-primary)]">
            Frequently asked questions
          </h2>
          <div className="max-w-2xl">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] md:text-3xl">
              Does your operation qualify?
            </h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Complete the form. We review every application and respond only if there is a real fit.
              If so, we schedule a 15–25 minute call.
            </p>
            <div className="mt-8">
              <Button href="/request" size="lg">
                Complete the Audit form
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
