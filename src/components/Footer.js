import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '0.5px solid var(--border)',
      padding: '48px 24px',
      background: 'var(--bg-secondary)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px', marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <p style={{
              fontWeight: 600, fontSize: '18px',
              marginBottom: '8px', color: 'var(--text-primary)',
              letterSpacing: '-0.03em',
            }}>
              Md. Mosiur Rahman
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', lineHeight: '1.6' }}>
              Senior Scientific Officer<br />
              Bangladesh Agricultural Research Institute
            </p>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Navigate</p>
            {[
              { href: '/portfolio', label: 'Portfolio' },
              { href: '/blog', label: 'Blog' },
              { href: '/publications', label: 'Publications' },
              { href: '/#contact', label: 'Contact' },
            ].map(link => (
              <div key={link.href} style={{ marginBottom: '8px' }}>
                <Link href={link.href} style={{
                  fontSize: '14px', color: 'var(--text-secondary)',
                  textDecoration: 'none',
                }}>{link.label}</Link>
              </div>
            ))}
          </div>

          {/* Research */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Research Areas</p>
            {['Molecular Plant Breeding', 'Floriculture', 'SSR & ISSR Markers', 'Plant Genomics', 'Fruit Physiology'].map(area => (
              <p key={area} style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '6px' }}>{area}</p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Connect</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
              📧 mosiuropu@gmail.com
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
              🏛 BARI, Gazipur, Bangladesh
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              {[
                { href: 'https://scholar.google.com', label: 'Scholar' },
                { href: 'https://www.researchgate.net', label: 'ResearchGate' },
                { href: 'https://orcid.org', label: 'ORCID' },
              ].map(link => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '12px', color: 'var(--accent)',
                  textDecoration: 'none', fontWeight: '500',
                }}>{link.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '0.5px solid var(--border)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>
            © {new Date().getFullYear()} Md. Mosiur Rahman. All rights reserved.
          </p>
          <p style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>
            Built with Next.js · Hosted on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  )
}
