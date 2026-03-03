'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { auditFormSchema, type AuditFormData } from '@/lib/validations/auditFormSchema'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

// ─── Field helpers ─────────────────────────────────────────────────────────────

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]"
    >
      {children}
      {required && <span className="ml-1 text-[var(--color-accent)]">*</span>}
    </label>
  )
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p className="mt-1.5 text-xs text-red-400" role="alert">{message}</p>
}

function inputClass(hasError?: boolean) {
  return cn(
    'w-full rounded-md border bg-[var(--color-bg)] px-3 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50',
    hasError
      ? 'border-red-500/60'
      : 'border-[var(--color-border)] hover:border-[var(--color-accent)]/30'
  )
}

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-6 flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent)]/20 text-xs font-bold text-[var(--color-accent)]">
        {number}
      </span>
      <h2 className="text-base font-semibold text-[var(--color-text-primary)]">{title}</h2>
    </div>
  )
}

const PAIN_OPTIONS = [
  { value: 'ventas-reservas', label: 'Sales / bookings / occupancy' },
  { value: 'costos-margen', label: 'Costs / margin' },
  { value: 'inventario-merma', label: 'Inventory / waste' },
  { value: 'tiempos-servicio', label: 'Service times / customer experience' },
  { value: 'turnos-dotacion', label: 'Shifts / staffing / turnover' },
  { value: 'reportes-control', label: 'Reports / control / visibility' },
] as const

const SYSTEMS_OPTIONS = [
  { value: 'pos', label: 'POS (point of sale)' },
  { value: 'pms', label: 'PMS (hotel management)' },
  { value: 'erp', label: 'ERP or accounting software' },
  { value: 'excel', label: 'Excel / Google Sheets' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'crm', label: 'CRM' },
  { value: 'reservas', label: 'Reservation system' },
  { value: 'delivery', label: 'Delivery apps' },
  { value: 'otro', label: 'Other' },
] as const

// ─── Main form component ────────────────────────────────────────────────────────

export function AuditForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<AuditFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(auditFormSchema) as any,
    defaultValues: {
      systems: [],
      painPoints: [],
    },
  })

  const industry = watch('industry')
  const systems = watch('systems') ?? []
  const committedToProcess = watch('committedToProcess')

  const onSubmit = async (data: AuditFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || 'Submission error')
      }

      router.push('/thank-you')
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Unexpected error. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-12">
      {/* ─── SECCIÓN A: EMPRESA ─────────────────────────────────────────────── */}
      <fieldset>
        <SectionTitle number="A" title="Company" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Nombre empresa */}
          <div className="sm:col-span-2">
            <Label htmlFor="companyName" required>Company name</Label>
            <input
              id="companyName"
              {...register('companyName')}
              placeholder="E.g.: Las Arenas Hotel"
              className={inputClass(!!errors.companyName)}
              aria-describedby={errors.companyName ? 'companyName-error' : undefined}
            />
            <FieldError message={errors.companyName?.message} />
          </div>

          {/* Website */}
          <div>
            <Label htmlFor="website">Website or social media</Label>
            <input
              id="website"
              {...register('website')}
              placeholder="E.g.: www.company.com or @company"
              className={inputClass()}
            />
          </div>

          {/* País / Ciudad */}
          <div>
            <Label htmlFor="countryCity" required>Country and city</Label>
            <input
              id="countryCity"
              {...register('countryCity')}
              placeholder="E.g.: USA / New York"
              className={inputClass(!!errors.countryCity)}
            />
            <FieldError message={errors.countryCity?.message} />
          </div>

          {/* Industria */}
          <div>
            <Label htmlFor="industry" required>Industry</Label>
            <select
              id="industry"
              {...register('industry')}
              className={inputClass(!!errors.industry)}
            >
              <option value="">Select...</option>
              <option value="hotel">Hotel / Hotel group</option>
              <option value="restaurante">Restaurant / Restaurant group</option>
              <option value="consultora">Consulting firm (for client projects)</option>
              <option value="manufactura">Manufacturing / Production</option>
              <option value="logistica">Logistics / Distribution</option>
              <option value="salud">Healthcare / Clinics</option>
              <option value="retail">Retail / Commerce</option>
              <option value="otro">Other operational business</option>
            </select>
            <FieldError message={errors.industry?.message} />
          </div>

          {/* Empleados */}
          <div>
            <Label htmlFor="employees" required>How many employees?</Label>
            <input
              id="employees"
              {...register('employees')}
              placeholder="E.g.: 35"
              className={inputClass(!!errors.employees)}
            />
            <FieldError message={errors.employees?.message} />
          </div>

          {/* Sucursales */}
          <div>
            <Label htmlFor="branches">How many locations or branches?</Label>
            <input
              id="branches"
              {...register('branches')}
              placeholder="E.g.: 2"
              className={inputClass()}
            />
          </div>

          {/* Habitaciones (solo hoteles) */}
          {industry === 'hotel' && (
            <div>
              <Label htmlFor="rooms">How many rooms?</Label>
              <input
                id="rooms"
                {...register('rooms')}
                placeholder="E.g.: 48"
                className={inputClass()}
              />
            </div>
          )}

          {/* Facturación */}
          <div className={industry === 'hotel' ? '' : 'sm:col-span-1'}>
            <Label htmlFor="monthlyRevenue" required>Approximate monthly revenue</Label>
            <select
              id="monthlyRevenue"
              {...register('monthlyRevenue')}
              className={inputClass(!!errors.monthlyRevenue)}
            >
              <option value="">Select...</option>
              <option value="<20k">Less than USD 20,000</option>
              <option value="20k-50k">USD 20,000 – 50,000</option>
              <option value="50k-150k">USD 50,000 – 150,000</option>
              <option value="150k-500k">USD 150,000 – 500,000</option>
              <option value="500k+">More than USD 500,000</option>
            </select>
            <FieldError message={errors.monthlyRevenue?.message} />
          </div>

          {/* Nombre contacto */}
          <div>
            <Label htmlFor="contactName" required>Your name</Label>
            <input
              id="contactName"
              {...register('contactName')}
              placeholder="Full name"
              className={inputClass(!!errors.contactName)}
            />
            <FieldError message={errors.contactName?.message} />
          </div>

          {/* Cargo */}
          <div>
            <Label htmlFor="contactRole" required>Your role</Label>
            <input
              id="contactRole"
              {...register('contactRole')}
              placeholder="E.g.: Operations Manager"
              className={inputClass(!!errors.contactRole)}
            />
            <FieldError message={errors.contactRole?.message} />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" required>Contact email</Label>
            <input
              id="email"
              type="email"
              {...register('email')}
              placeholder="tu@empresa.com"
              className={inputClass(!!errors.email)}
            />
            <FieldError message={errors.email?.message} />
          </div>

          {/* Teléfono */}
          <div>
            <Label htmlFor="phone" required>WhatsApp / Phone</Label>
            <input
              id="phone"
              type="tel"
              {...register('phone')}
              placeholder="+56 9 1234 5678"
              className={inputClass(!!errors.phone)}
            />
            <FieldError message={errors.phone?.message} />
          </div>

          {/* Decisor */}
          <div className="sm:col-span-2">
            <Label htmlFor="decisionMaker" required>Who makes the final decision?</Label>
            <input
              id="decisionMaker"
              {...register('decisionMaker')}
              placeholder="Name and role of the decision-maker"
              className={inputClass(!!errors.decisionMaker)}
            />
            <FieldError message={errors.decisionMaker?.message} />
          </div>
        </div>
      </fieldset>

      {/* ─── SECCIÓN B: DOLOR Y OBJETIVO ────────────────────────────────────── */}
      <fieldset>
        <SectionTitle number="B" title="Pain & goal" />
        <div className="space-y-5">
          {/* Pain points */}
          <div>
            <Label htmlFor="painPoints" required>
              What concerns you most today? (select 1 to 3)
            </Label>
            <Controller
              name="painPoints"
              control={control}
              render={({ field }) => (
                <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {PAIN_OPTIONS.map((opt) => {
                    const checked = field.value?.includes(opt.value) ?? false
                    return (
                      <label
                        key={opt.value}
                        className={cn(
                          'flex cursor-pointer items-center gap-2.5 rounded-md border px-3 py-2.5 text-sm transition-colors',
                          checked
                            ? 'border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 text-[var(--color-text-primary)]'
                            : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/30'
                        )}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={checked}
                          onChange={(e) => {
                            const current = field.value ?? []
                            if (e.target.checked) {
                              if (current.length < 3) {
                                field.onChange([...current, opt.value])
                              }
                            } else {
                              field.onChange(current.filter((v) => v !== opt.value))
                            }
                          }}
                        />
                        <span
                          className={cn(
                            'flex h-4 w-4 shrink-0 items-center justify-center rounded border',
                            checked
                              ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-white'
                              : 'border-[var(--color-border)]'
                          )}
                        >
                          {checked && <span className="text-[10px]">✓</span>}
                        </span>
                        {opt.label}
                      </label>
                    )
                  })}
                </div>
              )}
            />
            <FieldError message={errors.painPoints?.message} />
          </div>

          {/* Problema principal */}
          <div>
            <Label htmlFor="mainProblem" required>Describe the main problem (3–5 lines)</Label>
            <textarea
              id="mainProblem"
              {...register('mainProblem')}
              rows={5}
              placeholder="What is happening today in the operation? Where is the pain most felt?"
              className={inputClass(!!errors.mainProblem)}
            />
            <FieldError message={errors.mainProblem?.message} />
          </div>

          {/* Victoria 90 días */}
          <div>
            <Label htmlFor="win90days" required>What would be a measurable win in 90 days?</Label>
            <textarea
              id="win90days"
              {...register('win90days')}
              rows={3}
              placeholder="E.g.: Reduce waste by 20%, have a weekly dashboard, bring billing errors to zero..."
              className={inputClass(!!errors.win90days)}
            />
            <FieldError message={errors.win90days?.message} />
          </div>
        </div>
      </fieldset>

      {/* ─── SECCIÓN C: SISTEMAS Y DATOS ─────────────────────────────────────── */}
      <fieldset>
        <SectionTitle number="C" title="Systems & data" />
        <div className="space-y-5">
          {/* Sistemas */}
          <div>
            <Label htmlFor="systems">What systems do you use today? (all that apply)</Label>
            <Controller
              name="systems"
              control={control}
              render={({ field }) => (
                <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {SYSTEMS_OPTIONS.map((opt) => {
                    const checked = field.value?.includes(opt.value) ?? false
                    return (
                      <label
                        key={opt.value}
                        className={cn(
                          'flex cursor-pointer items-center gap-2.5 rounded-md border px-3 py-2.5 text-sm transition-colors',
                          checked
                            ? 'border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 text-[var(--color-text-primary)]'
                            : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/30'
                        )}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={checked}
                          onChange={(e) => {
                            const current = field.value ?? []
                            field.onChange(
                              e.target.checked
                                ? [...current, opt.value]
                                : current.filter((v) => v !== opt.value)
                            )
                          }}
                        />
                        <span
                          className={cn(
                            'flex h-4 w-4 shrink-0 items-center justify-center rounded border',
                            checked
                              ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-white'
                              : 'border-[var(--color-border)]'
                          )}
                        >
                          {checked && <span className="text-[10px]">✓</span>}
                        </span>
                        {opt.label}
                      </label>
                    )
                  })}
                </div>
              )}
            />
          </div>

          {/* Otro sistema (condicional) */}
          {systems.includes('otro') && (
            <div>
              <Label htmlFor="systemsOther">What other system do you use?</Label>
              <input
                id="systemsOther"
                {...register('systemsOther')}
                placeholder="System name"
                className={inputClass()}
              />
            </div>
          )}

          {/* Exportar reportes */}
          <div>
            <Label htmlFor="canExportReports" required>Can you export reports from those systems?</Label>
            <div className="mt-2 space-y-2">
              {[
                { value: 'si', label: 'Yes, we can export' },
                { value: 'no', label: 'No, we don\'t have that option' },
                { value: 'no-se', label: 'Don\'t know / Need to verify' },
              ].map((opt) => (
                <label key={opt.value} className="flex cursor-pointer items-center gap-2.5 text-sm text-[var(--color-text-muted)]">
                  <input
                    type="radio"
                    value={opt.value}
                    {...register('canExportReports')}
                    className="h-4 w-4 border-[var(--color-border)] accent-[var(--color-accent)]"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
            <FieldError message={errors.canExportReports?.message} />
          </div>

          {/* Acceso a datos */}
          <div>
            <Label htmlFor="dataOwner" required>Who has access to the operational data?</Label>
            <input
              id="dataOwner"
              {...register('dataOwner')}
              placeholder="E.g.: Owner only / Manager and accountant / Whole team"
              className={inputClass(!!errors.dataOwner)}
            />
            <FieldError message={errors.dataOwner?.message} />
          </div>
        </div>
      </fieldset>

      {/* ─── SECCIÓN D: OPERACIÓN ─────────────────────────────────────────────── */}
      <fieldset>
        <SectionTitle number="D" title="Operations" />
        <div className="space-y-5">
          <div>
            <Label htmlFor="timeLost" required>Where is the most time lost in the operation today?</Label>
            <textarea
              id="timeLost"
              {...register('timeLost')}
              rows={3}
              placeholder="E.g.: Closing registers manually, coordinating shifts on WhatsApp, fixing orders..."
              className={inputClass(!!errors.timeLost)}
            />
            <FieldError message={errors.timeLost?.message} />
          </div>

          <div>
            <Label htmlFor="dailyTasks" required>What tasks repeat every day (and could be automated)?</Label>
            <textarea
              id="dailyTasks"
              {...register('dailyTasks')}
              rows={3}
              placeholder="E.g.: Consolidating sales by location, checking warehouse inventory, assigning tables..."
              className={inputClass(!!errors.dailyTasks)}
            />
            <FieldError message={errors.dailyTasks?.message} />
          </div>

          <div>
            <Label htmlFor="errorsComplaints" required>Where do most errors or complaints occur?</Label>
            <textarea
              id="errorsComplaints"
              {...register('errorsComplaints')}
              rows={3}
              placeholder="E.g.: In billing, at goods receiving, in delivery orders..."
              className={inputClass(!!errors.errorsComplaints)}
            />
            <FieldError message={errors.errorsComplaints?.message} />
          </div>
        </div>
      </fieldset>

      {/* ─── SECCIÓN E: COMPROMISO ────────────────────────────────────────────── */}
      <fieldset>
        <SectionTitle number="E" title="Commitment" />
        <div className="space-y-5">
          {/* Compromiso */}
          <div>
            <Label htmlFor="committedToProcess" required>
              Are you willing to commit to 2–4 working sessions and share basic operational data?
            </Label>
            <div className="mt-2 space-y-2">
              {[
                { value: 'si', label: 'Yes, we have the time and willingness to do it' },
                { value: 'no', label: 'No, we cannot currently commit that time' },
              ].map((opt) => (
                <label key={opt.value} className="flex cursor-pointer items-center gap-2.5 text-sm text-[var(--color-text-muted)]">
                  <input
                    type="radio"
                    value={opt.value}
                    {...register('committedToProcess')}
                    className="h-4 w-4 accent-[var(--color-accent)]"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
            {/* Warning if "no" is selected */}
            {committedToProcess === 'no' && (
              <div className="mt-3 rounded-lg border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-400">
                Without a minimum commitment of time and data, we cannot guarantee results. You can
                still submit your application and we will evaluate it.
              </div>
            )}
            <FieldError message={errors.committedToProcess?.message} />
          </div>

          {/* Presupuesto implementación */}
          <div>
            <Label htmlFor="implementationBudget" required>
              Estimated budget for improvements and implementation (if ROI checks out)
            </Label>
            <select
              id="implementationBudget"
              {...register('implementationBudget')}
              className={inputClass(!!errors.implementationBudget)}
            >
              <option value="">Select...</option>
              <option value="<1k">Less than USD 1,000</option>
              <option value="1k-5k">USD 1,000 – 5,000</option>
              <option value="5k-15k">USD 5,000 – 15,000</option>
              <option value="15k+">USD 15,000 or more</option>
            </select>
            <FieldError message={errors.implementationBudget?.message} />
          </div>

          {/* Timeline */}
          <div>
            <Label htmlFor="startTimeline" required>When would you like to start?</Label>
            <select
              id="startTimeline"
              {...register('startTimeline')}
              className={inputClass(!!errors.startTimeline)}
            >
              <option value="">Select...</option>
              <option value="esta-semana">This week</option>
              <option value="2-4-semanas">In 2 to 4 weeks</option>
              <option value="1-2-meses">In 1 to 2 months</option>
            </select>
            <FieldError message={errors.startTimeline?.message} />
          </div>

          {/* Comentarios */}
          <div>
            <Label htmlFor="additionalComments">Additional comments (optional)</Label>
            <textarea
              id="additionalComments"
              {...register('additionalComments')}
              rows={3}
              placeholder="Anything else we should know before evaluating your application..."
              className={inputClass()}
            />
          </div>
        </div>
      </fieldset>

      {/* Submit */}
      {submitError && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {submitError}
        </div>
      )}

      <div className="border-t border-[var(--color-border)] pt-6">
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full justify-center sm:w-auto">
          {isSubmitting ? 'Sending...' : 'Submit Audit request'}
        </Button>
        <p className="mt-3 text-xs text-[var(--color-text-muted)]">
          We review every application carefully. We only respond if there is a real fit.
        </p>
      </div>
    </form>
  )
}
