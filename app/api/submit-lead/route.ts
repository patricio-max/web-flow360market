import { NextRequest, NextResponse } from 'next/server'
import { auditFormSchema } from '@/lib/validations/auditFormSchema'
import { calculateFitScore, fitLabel } from '@/lib/fitScore'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // 1. Validate
    const parsed = auditFormSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid data', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const data = parsed.data
    const score = calculateFitScore(data)
    const label = fitLabel(score)

    // 2. Save to Supabase (optional — requires env vars)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (supabaseUrl && supabaseKey) {
      const { createClient } = await import('@supabase/supabase-js')
      const supabase = createClient(supabaseUrl, supabaseKey)

      await supabase.from('leads').insert({
        company_name: data.companyName,
        email: data.email,
        phone: data.phone,
        industry: data.industry,
        monthly_revenue: data.monthlyRevenue,
        pain_points: data.painPoints,
        main_problem: data.mainProblem,
        committed: data.committedToProcess === 'si',
        implementation_budget: data.implementationBudget,
        start_timeline: data.startTimeline,
        fit_score: score,
        fit_label: label,
        raw_data: data,
      })
    }

    // 3. Send email notification (optional — requires RESEND_API_KEY)
    const resendKey = process.env.RESEND_API_KEY
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'pvaldes.pascual@gmail.com'

    if (resendKey) {
      const { Resend } = await import('resend')
      const resend = new Resend(resendKey)

      await resend.emails.send({
        from: 'Flow360 Market <onboarding@resend.dev>',
        to: notificationEmail,
        subject: `[Flow360] New request — ${data.companyName} (${label.toUpperCase()})`,
        text: `
New Flow360 Audit Request

Company: ${data.companyName}
Contact: ${data.contactName} / ${data.contactRole}
Email: ${data.email}
Phone: ${data.phone}
Country/City: ${data.countryCity}
Industry: ${data.industry}
Employees: ${data.employees}
Revenue: ${data.monthlyRevenue}
Impl. budget: ${data.implementationBudget}
Timeline: ${data.startTimeline}
Committed: ${data.committedToProcess}
Can export: ${data.canExportReports}

FIT SCORE: ${score}/100 → ${label.toUpperCase()}

Main problem:
${data.mainProblem}

Win in 90 days:
${data.win90days}

Current systems: ${data.systems?.join(', ') || 'N/A'}
${data.systemsOther ? `Other system: ${data.systemsOther}` : ''}

Additional comments:
${data.additionalComments || 'None'}
        `.trim(),
      })
    }

    // 4. Respond with success
    return NextResponse.json({ success: true, fitScore: score, fitLabel: label })
  } catch (error) {
    console.error('Error submitting lead:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
