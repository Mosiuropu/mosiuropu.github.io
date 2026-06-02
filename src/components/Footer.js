'use client'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '0.5px solid var(--border)',
        padding: '60px 24px 32px',
        background: 'var(--bg-secondary)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: '17px',
                marginBottom: '8px',
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
              }}
            >
              Md. Mosiur Rahman
            </p>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-tertiary)',
                lineHeight: '1.7',
              }}
            >
              Senior Scientific Officer
              <br />
              Horticulture Research Centre
              <br />
              BARI, Gazipur-1701, Bangladesh
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--text-quaternary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              Navigate
            </p>
            {[
              { href: '/', label: 'Home' },
              { href: '/#about', label: 'About' },
              { href: '/portfolio', label: 'Research' },
              { href: '/publications', label: 'Publications' },
              { href: '/#contact', label: 'Contact' },
            ].map((link) => (
              <div key={link.href} style={{ marginBottom: '8px' }}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = 'var(--accent)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'var(--text-secondary)')
                  }
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Research */}
          <div>
            <p
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--text-quaternary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              Research Areas
            </p>
            {[
              'Molecular Plant Breeding',
              'Floriculture & Ornamentals',
              'SSR / ISSR / SNP Markers',
              'Marker-Assisted Selection',
              'Population Genetics',
            ].map((area) => (
              <p
                key={area}
                style={{
                  fontSize: '13px',
                  color: 'var(--text-tertiary)',
                  marginBottom: '6px',
                }}
              >
                {area}
              </p>
            ))}
          </div>

          {/* Connect */}
          <div>
            <p
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--text-quaternary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              Connect
            </p>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                marginBottom: '8px',
              }}
            >
              <a
                href="mailto:mosiurrahman.bari@gmail.com"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--text-secondary)')
                }
              >
                mosiurrahman.bari@gmail.com
              </a>
            </p>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-tertiary)',
                marginBottom: '8px',
              }}
            >
              +880 1711 742927
            </p>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                marginTop: '16px',
              }}
            >
              {[
                {
                  href: 'https://bit.ly/4dVcrYP',
                  label: 'Google Scholar',
                },
                {
                  href: 'https://www.researchgate.net/profile/Mosiur-Apu',
                  label: 'ResearchGate',
                },
                {
                  href: 'https://www.linkedin.com/in/mosiur-rahman-apu/',
                  label: 'LinkedIn',
                },
                {
                  href: 'https://orcid.org/0000-0002-6690-7903',
                  label: 'ORCID',
                },
                {
                  href: 'https://github.com/Mosiuropu',
                  label: 'GitHub',
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '12px',
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '0.5px solid var(--border)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p
            style={{ fontSize: '12px', color: 'var(--text-quaternary)' }}
          >
            &copy; {year} Md. Mosiur Rahman. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: 'var(--text-quaternary)' }}>
            Built with Next.js &middot; Hosted on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  )
}
