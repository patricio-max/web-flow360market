import { z } from 'zod'

export const auditFormSchema = z.object({
  // ─── SECTION A: COMPANY ──────────────────────────────────────────────
  companyName: z.string().min(2, 'Enter the company name'),
  website: z.string().optional(),
  countryCity: z.string().min(2, 'Enter country and city'),
  industry: z.enum(['hotel', 'restaurante', 'consultora', 'manufactura', 'logistica', 'salud', 'retail', 'otro'], {
    error: 'Select an industry',
  }),
  employees: z.string().min(1, 'Enter the approximate number of employees'),
  branches: z.string().optional(),
  rooms: z.string().optional(),
  monthlyRevenue: z.enum(['<20k', '20k-50k', '50k-150k', '150k-500k', '500k+'], {
    error: 'Select a revenue range',
  }),
  contactName: z.string().min(2, 'Enter your name'),
  contactRole: z.string().min(2, 'Enter your role'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(7, 'Enter your WhatsApp or phone number'),
  decisionMaker: z.string().min(2, 'Who makes the final decision?'),

  // ─── SECTION B: PAIN & GOAL ─────────────────────────────────────────
  painPoints: z
    .array(
      z.enum([
        'ventas-reservas',
        'costos-margen',
        'inventario-merma',
        'tiempos-servicio',
        'turnos-dotacion',
        'reportes-control',
      ])
    )
    .min(1, 'Select at least 1 problem')
    .max(3, 'Maximum 3 problems'),
  mainProblem: z
    .string()
    .min(50, 'Describe the problem in a bit more detail (minimum 50 characters)')
    .max(1000),
  win90days: z
    .string()
    .min(20, 'What result would you expect in 90 days? (minimum 20 characters)')
    .max(500),

  // ─── SECTION C: SYSTEMS & DATA ─────────────────────────────────────
  systems: z
    .array(
      z.enum(['pos', 'pms', 'erp', 'excel', 'whatsapp', 'crm', 'reservas', 'delivery', 'otro'])
    )
    .default([]),
  systemsOther: z.string().optional(),
  canExportReports: z.enum(['si', 'no', 'no-se'], {
    error: 'Answer whether you can export reports',
  }),
  dataOwner: z.string().min(2, 'Who has access to the data?'),

  // ─── SECTION D: OPERATIONS ─────────────────────────────────────────
  timeLost: z.string().min(20, 'Where is the most time lost? (minimum 20 characters)').max(500),
  dailyTasks: z
    .string()
    .min(20, 'What tasks repeat every day? (minimum 20 characters)')
    .max(500),
  errorsComplaints: z
    .string()
    .min(20, 'Where do errors or complaints occur? (minimum 20 characters)')
    .max(500),

  // ─── SECTION E: COMMITMENT ───────────────────────────────────────────
  committedToProcess: z.enum(['si', 'no'], {
    error: 'Answer whether you can commit',
  }),
  implementationBudget: z.enum(['<1k', '1k-5k', '5k-15k', '15k+'], {
    error: 'Select a budget range',
  }),
  startTimeline: z.enum(['esta-semana', '2-4-semanas', '1-2-meses'], {
    error: 'When would you like to start?',
  }),
  additionalComments: z.string().max(1000).optional(),
})

export type AuditFormData = z.infer<typeof auditFormSchema>
