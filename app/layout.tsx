import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://flow360market.com'),
  title: {
    default: 'Flow360 Market | Business Operating System Redesign',
    template: '%s | Flow360 Market',
  },
  description:
    'We redesign business operating systems to reduce friction, improve margins, and automate decisions. Hotels, restaurants, and operations.',
  keywords: [
    'operational efficiency',
    'process redesign',
    'operational audit',
    'automation',
    'Lean Six Sigma',
    'hospitality',
    'restaurants',
    'operations consulting',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Flow360 Market',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
