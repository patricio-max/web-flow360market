import type { AuditFormData } from './validations/auditFormSchema'

export function calculateFitScore(data: AuditFormData): number {
  let score = 0

  // Revenue (0–30 pts)
  const revenueScores: Record<string, number> = {
    '<20k': 5,
    '20k-50k': 15,
    '50k-150k': 25,
    '150k-500k': 30,
    '500k+': 30,
  }
  score += revenueScores[data.monthlyRevenue] ?? 0

  // Budget para implementación (0–25 pts)
  const budgetScores: Record<string, number> = {
    '<1k': 0,
    '1k-5k': 10,
    '5k-15k': 20,
    '15k+': 25,
  }
  score += budgetScores[data.implementationBudget] ?? 0

  // Compromiso (0–20 pts)
  if (data.committedToProcess === 'si') score += 20

  // Urgencia (0–15 pts)
  const timelineScores: Record<string, number> = {
    'esta-semana': 15,
    '2-4-semanas': 10,
    '1-2-meses': 5,
  }
  score += timelineScores[data.startTimeline] ?? 0

  // Datos accesibles (0–10 pts)
  if (data.canExportReports === 'si') score += 10
  else if (data.canExportReports === 'no-se') score += 5

  return score // max 100
}

export function fitLabel(score: number): 'hot' | 'warm' | 'cold' {
  if (score >= 70) return 'hot'
  if (score >= 40) return 'warm'
  return 'cold'
}
