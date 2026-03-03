import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About Flow360 Market | Lean Six Sigma + Operational Architecture',
  description:
    'Boutique consultancy specializing in business operating system redesign. Lean Six Sigma, operational architecture and intelligent automation.',
}

const values = [
  {
    title: 'Evidence before opinion',
    desc: 'We don\'t diagnose without data. We don\'t recommend without metrics. We don\'t promise without clear assumptions.',
  },
  {
    title: 'Measurable ROI',
    desc: 'If we can\'t estimate the return in numbers (even approximate), we don\'t recommend the improvement.',
  },
  {
    title: 'Process first, AI second',
    desc: 'Technology amplifies. If the process is broken, automation just breaks it faster.',
  },
  {
    title: 'Few clients, high focus',
    desc: 'We never work with more than 3 clients simultaneously. We are not a report factory. We are a redesign team.',
  },
  {
    title: 'Radical honesty',
    desc: 'If we\'re not the solution for your problem, we tell you. No discounts, no smoke, no impossible promises.',
  },
]

const steps = [
  { n: '01', label: 'Define', desc: 'Goals, baseline metrics and constraints.' },
  { n: '02', label: 'Map & Measure', desc: 'As-Is process map and rapid measurement.' },
  { n: '03', label: 'Diagnose', desc: 'Quantified frictions and opportunities.' },
  { n: '04', label: 'Redesign & Automate', desc: 'Design + automation/AI where applicable.' },
  { n: '05', label: 'Control', desc: 'KPI dashboard and continuity plan.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="border-b border-[var(--color-border)]">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-3xl font-extrabold text-[var(--color-text-primary)] md:text-5xl">
              About Flow360 Market
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
              We exist for a specific problem: well-intentioned businesses operating with
              poorly designed systems.
            </p>
          </div>
        </Container>
      </Section>

      {/* Why Flow360 exists */}
      <Section>
        <Container>
          <div className="max-w-2xl">
            <h2 className="mb-6 text-xl font-bold text-[var(--color-text-primary)]">
              Why Flow360 exists
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
              <p>
                Most operational problems we see are not about attitude or effort. They are about
                architecture: processes designed for an older version of the business, fragmented
                data, decisions made without reliable information.
              </p>
              <p>
                Flow360 Market was created to tackle that problem with methodological rigor, without
                selling trendy technology or implementing generic solutions. We work across
                hospitality, manufacturing, logistics, retail, healthcare and more — any environment
                where operations are complex and the cost of friction is real.
              </p>
              <p>
                We work directly with companies, or embedded within consulting firms that need an
                operational transformation partner to lead client projects end-to-end: understanding
                the situation, building a long-term action plan, and driving execution to measurable
                results in both structure and day-to-day operations.
              </p>
              <p>
                We never work with more than 3 clients simultaneously — intensively, and only where
                we see real potential for measurable impact.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-[var(--color-surface)]/40">
        <Container>
          <h2 className="mb-8 text-xl font-bold text-[var(--color-text-primary)]">
            How we think
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Card key={i} className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{v.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{v.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Credentials */}
      <Section>
        <Container>
          <div className="max-w-xl">
            <h2 className="mb-6 text-xl font-bold text-[var(--color-text-primary)]">
              Credentials
            </h2>
            <div className="rounded-lg border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 p-6 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  🎓 Certificate Lean® Six Sigma Green Belt
                </p>
              </div>
              <p className="text-sm text-[var(--color-text-muted)]">
                KAIZEN™ Institute Consulting Group · Kaizen Institute Chile
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span className="rounded border border-[var(--color-accent)]/30 px-2 py-1 text-[var(--color-accent)]">
                  CSGB-120-CHL
                </span>
                <span className="rounded border border-[var(--color-accent)]/30 px-2 py-1 text-[var(--color-accent)]">
                  N° Reg: 47.908
                </span>
                <span className="rounded border border-[var(--color-accent)]/30 px-2 py-1 text-[var(--color-accent)]">
                  October 22, 2020
                </span>
              </div>
              <p className="text-sm text-[var(--color-text-muted)]">
                Experience in food industry operations, hospitality and regulated environments.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Methodology summary */}
      <Section className="bg-[var(--color-surface)]/40">
        <Container>
          <div className="max-w-xl">
            <h2 className="mb-8 text-xl font-bold text-[var(--color-text-primary)]">
              Our methodology
            </h2>
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.n} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent)]/40 text-xs font-bold text-[var(--color-accent)]">
                    {step.n}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                      {step.label}
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-lg font-semibold text-[var(--color-text-primary)]">
              Want to work with us?
            </p>
            <Button href="/request">Request Audit</Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
