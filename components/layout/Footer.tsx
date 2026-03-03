import Link from 'next/link'
import { Container } from '@/components/ui/Container'

const footerLinks = [
  { label: 'Audit', href: '/audit' },
  { label: 'Cases', href: '/cases' },
  { label: 'About', href: '/about' },
  { label: 'Request Audit', href: '/request' },
]

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Col 1: Logo + tagline */}
            <div className="space-y-3">
              <Link href="/" className="text-xl font-semibold tracking-tight">
                Flow360<span className="text-[var(--color-accent)]">Market</span>
              </Link>
              <p className="max-w-xs text-sm leading-relaxed text-[var(--color-text-muted)]">
                Business operating system redesign. Less friction. More margin.
                Automated decisions.
              </p>
            </div>

            {/* Col 2: Links */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Navigation
              </p>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Contact
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                <li>
                  <a
                    href="mailto:hello@flow360market.com"
                    className="transition-colors hover:text-[var(--color-text-primary)]"
                  >
                    hello@flow360market.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/patricio-vald%C3%A9s-pascual-a9245ba6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--color-text-primary)]"
                  >
                    LinkedIn →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-border)] py-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Flow360 Market · All rights reserved
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            We work with a limited number of clients per month.
          </p>
        </div>
      </Container>
    </footer>
  )
}
