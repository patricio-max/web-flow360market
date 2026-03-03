import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Cases & Results | Flow360 Market',
  description:
    'Operational diagnoses and redesigns in hotels, restaurants and intensive businesses. Documented results.',
}

interface CaseData {
  sector: string
  size: string
  tag: string
  tagVariant: 'default' | 'muted' | 'accent'
  title: string
  problem: string
  interventions: string[]
  results: string[]
  quickWin: string
}

const cases: CaseData[] = [
  {
    sector: 'Restaurant',
    size: '+35 employees · 2+ years',
    tag: 'Completed',
    tagVariant: 'default',
    title: 'From chaotic Excel to a control system with real data',
    problem:
      'The team operated with multiple disconnected Excel files. Daily cash close took 2+ hours. Waste was not tracked systematically. Purchasing decisions were made by intuition.',
    interventions: [
      'As-Is mapping of full operational flow',
      'Identification of critical friction points across all departments',
      'Prioritization: quick wins + structured 30-day improvement plan',
      'To-Be flow design with automated reporting',
    ],
    results: [
      'Close time reduced from 2h → 25 min through partial automation',
      'Weekly operational dashboard active and adopted by management',
      'Standardized waste control process implemented across all shifts',
    ],
    quickWin: 'Automatic sales report from POS delivered in 48 hours',
  },
  {
    sector: 'Boutique hotel',
    size: '+20 employees · 2+ years',
    tag: 'Completed',
    tagVariant: 'default',
    title: 'Improved conversion and response on direct bookings',
    problem:
      'High OTA dependency (18–22% commissions). Response to direct inquiries took 8–24 hours. No visibility of future occupancy. No direct booking lead tracking.',
    interventions: [
      'Map of direct booking vs OTA flow',
      'Diagnosis of response time gaps by channel and shift',
      'Redesign of inquiry handling process with defined SLAs',
      'Occupancy and booking pipeline dashboard',
    ],
    results: [
      'Average response time reduced from 24h → 2.5h',
      'Direct booking pipeline visible for the first time',
      'Follow-up protocol implemented and adopted by front desk',
    ],
    quickWin: 'Response template + WhatsApp Business automation live in 3 days',
  },
  {
    sector: 'Public Sector',
    size: '+1,000 employees · 2+ years',
    tag: 'Completed',
    tagVariant: 'default',
    title: 'Administrative transition of a large regional public directorate',
    problem:
      'A regional directorate responsible for 41% of the institution\'s total operational workload was undergoing a full change of administration. Processes were undocumented, incoming leadership had no structured operational handover, and an active technical-union conflict required immediate mediation.',
    interventions: [
      'Full process survey and documentation of all directorate activities and tasks',
      'Change management requirements design for the incoming administration',
      'Inspection process modeling, achieving significant reduction in cycle times',
      'Coordinator and moderator of tripartite technical-union table',
      'Chief of Staff advisory role to the incoming Regional Director',
      'Structured induction program for the incoming Chief of Staff',
    ],
    results: [
      'Smooth administrative transition with documented process baseline delivered before handover',
      'Inspection process cycle times significantly reduced through process modeling',
      'Technical-union conflict de-escalated through structured tripartite coordination',
    ],
    quickWin: 'Full process documentation delivered before new administration took office',
  },
  {
    sector: 'Sports & Events',
    size: '+25 employees · 2+ years',
    tag: 'Completed',
    tagVariant: 'default',
    title: 'Operational restructuring and business model realignment',
    problem:
      'The operation had grown without documented processes or a defined process architecture. Departments operated independently with no shared standards. Financial structure and long-term strategic positioning were misaligned with day-to-day operations.',
    interventions: [
      'Full process architecture mapping across all departments',
      'Operational documentation and standardization initiative',
      'Business model strategic review and refinement',
      'Alignment design between operations, financial structure and long-term positioning',
    ],
    results: [
      'Complete process architecture documented and standardized across all departments',
      'Business model refined with clear alignment to operational and financial structure',
      'Strategic positioning strengthened through operational clarity',
    ],
    quickWin: 'Cross-department process map delivered in the first two weeks of engagement',
  },
  {
    sector: 'Restaurant group',
    size: '+80 employees · 2+ years',
    tag: 'In progress',
    tagVariant: 'muted',
    title: 'Multi-location operational standardization without central control',
    problem:
      'Three locations with different processes and no shared indicators. High staff turnover (>80% annually). Labor costs untracked by location. General manager making decisions without consolidated data.',
    interventions: [
      'Operational audit across all locations',
      'Process variance mapping between sites',
      'Design of common operational standards',
      'Consolidated multi-location management dashboard',
    ],
    results: ['Under documentation (active case)'],
    quickWin: 'Consolidated report across all locations delivered in week 1',
  },
  {
    sector: 'Hostel',
    size: '+10 employees · 10 months',
    tag: 'Completed',
    tagVariant: 'default',
    title: 'Cost reduction and occupancy management in urban hostel',
    problem:
      'Occupancy tracking was manual and inconsistent across room types. Pricing had no seasonal or demand logic. Cleaning and room-ready cycles were not standardized, generating guest complaints and operational delays during peak check-in hours.',
    interventions: [
      'Occupancy and revenue tracking dashboard by room type and channel',
      'Dynamic pricing model based on season and demand patterns',
      'Cleaning and room-ready cycle standardization with checklists',
      'Staff scheduling redesign aligned with check-in and check-out peaks',
    ],
    results: [
      'Room turnover efficiency improved, reducing delays during peak hours',
      'Pricing aligned with demand patterns, improving RevPAR',
      'Guest complaints related to room readiness reduced significantly',
    ],
    quickWin: 'Occupancy and revenue dashboard live within the first week',
  },
  {
    sector: 'Restaurant',
    size: '+15 employees · 6 months',
    tag: 'Completed',
    tagVariant: 'default',
    title: 'Kitchen flow redesign and food waste reduction',
    problem:
      'Kitchen throughput during peak hours created consistent bottlenecks with ticket times above 35 minutes. Ingredient waste exceeded 18% of total food cost. No standardized recipes or portion control existed across shifts.',
    interventions: [
      'Production flow mapping and bottleneck identification by station',
      'Standardized recipe and portion control implementation',
      'Waste tracking system by ingredient, shift and supplier',
      'Shift scheduling redesign aligned with demand curve',
    ],
    results: [
      'Average ticket time reduced by 40% during peak service',
      'Food waste reduced from 18% to under 9% of food cost',
      'Standardized recipe compliance above 90% across all shifts',
    ],
    quickWin: 'Kitchen station layout adjusted to resolve main bottleneck in first 2 weeks',
  },
  {
    sector: 'Restaurant',
    size: '+20 employees · 6 months',
    tag: 'Completed',
    tagVariant: 'default',
    title: 'Margin recovery through cost structure and menu redesign',
    problem:
      'Operating margins had declined for three consecutive quarters despite stable revenue. Labor costs were untracked by shift or role. Supplier pricing had not been reviewed in over two years. Menu complexity was absorbing kitchen capacity without proportional revenue.',
    interventions: [
      'Full P&L analysis by product category and time period',
      'Labor cost breakdown by role, shift and revenue contribution',
      'Supplier renegotiation with benchmark pricing data',
      'Menu engineering to remove low-margin, high-complexity items',
    ],
    results: [
      'Operating margin improved by 6 percentage points over 4 months',
      'Labor cost as % of revenue reduced through scheduling adjustments',
      'Three key supplier contracts renegotiated with better terms',
    ],
    quickWin: 'Menu items identified for immediate removal, recovering 3% margin within 30 days',
  },
  {
    sector: 'Consulting / Accounting',
    size: '+8 employees · 2+ years',
    tag: 'Completed',
    tagVariant: 'default',
    title: 'Financial reporting restructure for a professional services firm',
    problem:
      'Monthly P&L took over three weeks to close. Expense classification was inconsistent across periods, making trend analysis unreliable. No clear view of profitability by client or service line existed, making pricing and resource allocation decisions essentially intuitive.',
    interventions: [
      'Chart of accounts redesign aligned to the firm\'s service model',
      'Month-end close process mapping and bottleneck elimination',
      'Client and service line profitability model',
      'Automated reporting templates connected to the accounting system',
    ],
    results: [
      'Month-end close reduced from 3 weeks to 5 working days',
      'Client-level profitability visible for the first time in firm history',
      'Consistent expense classification maintained across all reporting periods',
    ],
    quickWin: 'Automated P&L draft template built and validated in week 2',
  },
  {
    sector: 'Consulting / Finance',
    size: '+12 employees · 2+ years',
    tag: 'Completed',
    tagVariant: 'default',
    title: 'Cash flow forecasting and financial decision framework',
    problem:
      'Business decisions were made without forward-looking financial visibility. Cash flow was managed reactively, generating recurring short-term liquidity tension. No financial model existed to evaluate growth scenarios or the real cost of new client commitments.',
    interventions: [
      '13-week rolling cash flow model implemented and maintained',
      'Scenario-based financial model for growth and investment decisions',
      'Working capital cycle analysis and optimization',
      'Weekly financial dashboard for management review',
    ],
    results: [
      'Liquidity tension episodes eliminated within 2 months of implementation',
      'Three growth scenarios modeled and evaluated with real financial data',
      'Working capital cycle shortened, releasing operational cash',
    ],
    quickWin: '13-week cash flow projection delivered and validated in the first 10 days',
  },
]

function CaseCard({ c }: { c: CaseData }) {
  return (
    <article className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-4">
        <div>
          <p className="text-sm font-semibold text-[var(--color-text-primary)]">{c.sector}</p>
          <p className="text-xs text-[var(--color-text-muted)]">{c.size}</p>
        </div>
        <Badge variant={c.tagVariant}>{c.tag}</Badge>
      </div>

      {/* Body */}
      <div className="p-6 space-y-5">
        <h3 className="text-base font-bold text-[var(--color-text-primary)]">{c.title}</h3>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
            Problem
          </p>
          <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{c.problem}</p>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
            Flow360 Intervention
          </p>
          <ul className="space-y-1">
            {c.interventions.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
            Results
          </p>
          <ul className="space-y-1">
            {c.results.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-accent)]">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-4 py-3">
          <p className="text-xs font-semibold text-[var(--color-accent)]">Quick win</p>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{c.quickWin}</p>
        </div>
      </div>
    </article>
  )
}

export default function CasesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="border-b border-[var(--color-border)]">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-3xl font-extrabold text-[var(--color-text-primary)] md:text-5xl">
              Results and learnings
            </h1>
            <p className="mt-3 text-lg text-[var(--color-text-muted)]">
              Pilot diagnoses and documented cases
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
              Every audit is different because every operation is different. Here we document the most
              common patterns and observed results.
            </p>
            <p className="mt-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-xs text-[var(--color-text-muted)]">
              Cases are anonymized at client request. Results marked with * are still being finalized
              in documentation.
            </p>
          </div>
        </Container>
      </Section>

      {/* Cases */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((c, i) => (
              <CaseCard key={i} c={c} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-[var(--color-surface)]">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
              Does your operation have similar problems?
            </h2>
            <div className="mt-6">
              <Button href="/request" size="lg">
                Request Audit
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
