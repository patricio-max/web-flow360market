import type { Metadata } from 'next'
import { Hero } from '@/components/sections/home/Hero'
import { PainSection } from '@/components/sections/home/PainSection'
import { WhatWeDo } from '@/components/sections/home/WhatWeDo'
import { ForWhom } from '@/components/sections/home/ForWhom'
import { HowWeWork } from '@/components/sections/home/HowWeWork'
import { Deliverables } from '@/components/sections/home/Deliverables'
import { CasesTeaser } from '@/components/sections/home/CasesTeaser'
import { CtaFinal } from '@/components/sections/home/CtaFinal'

export const metadata: Metadata = {
  title: 'Flow360 Market | Business Operating System Redesign',
  description:
    'We redesign business operating systems to reduce friction, improve margins, and automate decisions. Hotels, restaurants, and operations.',
  openGraph: {
    title: 'Flow360 Market | Business Operating System Redesign',
    description:
      'We redesign business operating systems to reduce friction, improve margins, and automate decisions.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainSection />
      <WhatWeDo />
      <ForWhom />
      <HowWeWork />
      <Deliverables />
      <CasesTeaser />
      <CtaFinal />
    </>
  )
}
