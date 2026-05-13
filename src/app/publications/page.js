export const metadata = {
  title: 'Publications — Md. Mosiur Rahman',
  description: 'Peer-reviewed publications by Md. Mosiur Rahman in plant breeding, floriculture, and molecular genetics.',
}

const publications = [
  {
    year: '2024',
    title: 'Marker-Assisted Selection in Apple Breeding: Population Genetics Analysis of 192 Accessions Using SSR and SCAR Markers',
    authors: 'Rahman MM, Considine MJ, Mia S',
    journal: 'Tree Genetics & Genomes',
    status: 'Manuscript in preparation',
    doi: null,
    type: 'Journal Article',
  },
  {
    year: '2022',
    title: 'Genetic Diversity and Population Structure of Chrysanthemum (Chrysanthemum morifolium) Cultivars Using SSR Markers',
    authors: 'Rahman MM, Khan FK, et al.',
    journal: 'Scientia Horticulturae',
    status: 'Published',
    doi: '#',
    type: 'Journal Article',
  },
  {
    year: '2021',
    title: 'ISSR-based Molecular Characterization of Tuberose (Polianthes tuberosa) Germplasm in Bangladesh',
    authors: 'Rahman MM, et al.',
    journal: 'Bangladesh Journal of Agricultural Research',
    status: 'Published',
    doi: '#',
    type: 'Journal Article',
  },
  {
    year: '2020',
    title: 'Varietal Performance and Selection of High-Yielding Marigold Lines for Commercial Production',
    authors: 'Rahman MM, et al.',
    journal: 'BARI Research Report',
    status: 'Published',
    doi: null,
    type: 'Research Report',
  },
  {
    year: '2019',
    title: 'Post-harvest Quality Maintenance of Tropical Fruits Using Edible Coating',
    authors: 'Rahman MM, Alam MK, et al.',
    journal: 'Journal of Food Science and Technology',
    status: 'Published',
    doi: '#',
    type: 'Journal Article',
  },
  {
    year: '2018',
    title: 'Molecular Characterization of Gerbera (Gerbera jamesonii) Cultivars Using SSR Markers',
    authors: 'Rahman MM, Khan FK, et al.',
    journal: 'Floriculture and Ornamental Biotechnology',
    status: 'Published',
    doi: '#',
    type: 'Journal Article',
  },
  {
    year: '2016',
    title: 'Ex Situ Conservation and Molecular Fingerprinting of Orchid Germplasm in Bangladesh',
    authors: 'Rahman MM, et al.',
    journal: 'Genetic Resources and Crop Evolution',
    status: 'Published',
    doi: '#',
    type: 'Journal Article',
  },
]

const statusStyle = {
  'Published': { bg: '#e8f5ee', color: '#1a6b3c' },
  'Manuscript in preparation': { bg: '#fff8e1', color: '#b8860b' },
  'Under Review': { bg: '#e8eaf6', color: '#3949ab' },
}

const typeStyle = {
  'Journal Article': { bg: 'var(--bg-tertiary)', color: 'var(--text-secondary)' },
  'Research Report': { bg: 'var(--bg-tertiary)', color: 'var(--text-secondary)' },
}

export default function PublicationsPage() {
  const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a)

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 24px 80px' }}>
        {/* Header */}
        <div style={{ marginBottom: '52px' }}>
          <span style={{
            display: 'inline-block', padding: '4px 12px', borderRadius: '20px',
            fontSize: '12px', fontWeight: '500', background: 'var(--accent-bg)',
            color: 'var(--accent)', marginBottom: '16px',
          }}>Publications</span>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700,
            letterSpacing: '-0.04em', color: 'var(--text-primary)', marginBottom: '16px',
          }}>
            Research Output
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            {publications.filter(p => p.status === 'Published').length} peer-reviewed publications across plant breeding, floriculture, and molecular genetics.
          </p>

          {/* Scholar links */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
            {[
              { label: '🎓 Google Scholar', href: 'https://scholar.google.com' },
              { label: '🔬 ResearchGate', href: 'https://www.researchgate.net' },
              { label: '🆔 ORCID', href: 'https://orcid.org' },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{
                padding: '8px 16px', borderRadius: '20px',
                border: '0.5px solid var(--border-strong)',
                fontSize: '13px', color: 'var(--text-secondary)',
                textDecoration: 'none', fontWeight: '500',
                transition: 'all 0.2s',
              }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Publications by year */}
        {years.map(year => (
          <div key={year} style={{ marginBottom: '48px' }}>
            <h2 style={{
              fontSize: '13px', fontWeight: 700, color: 'var(--text-tertiary)',
              textTransform: 'uppercase', letterSpacing: '0.1em',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: '0.5px solid var(--border)',
            }}>
              {year}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {publications.filter(p => p.year === year).map((pub, i) => (
                <div key={i} style={{
                  background: 'var(--card-bg)',
                  border: '0.5px solid var(--border)',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                >
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <span style={{
                      padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 600,
                      background: statusStyle[pub.status]?.bg || 'var(--bg-tertiary)',
                      color: statusStyle[pub.status]?.color || 'var(--text-secondary)',
                    }}>{pub.status}</span>
                    <span style={{
                      padding: '3px 10px', borderRadius: '20px', fontSize: '11px',
                      background: 'var(--bg-tertiary)', color: 'var(--text-tertiary)',
                      border: '0.5px solid var(--border)',
                    }}>{pub.type}</span>
                  </div>

                  <h3 style={{
                    fontSize: '16px', fontWeight: 600,
                    color: 'var(--text-primary)', lineHeight: 1.4,
                    marginBottom: '8px', letterSpacing: '-0.01em',
                  }}>
                    {pub.title}
                  </h3>

                  <p style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '4px' }}>
                    {pub.authors}
                  </p>

                  <p style={{ fontSize: '13px', color: 'var(--accent)', fontStyle: 'italic', marginBottom: '12px' }}>
                    {pub.journal}
                  </p>

                  {pub.doi && pub.doi !== '#' && (
                    <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" style={{
                      fontSize: '13px', color: 'var(--accent)',
                      textDecoration: 'none', fontWeight: '500',
                    }}>
                      DOI: {pub.doi} →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Note */}
        <div style={{
          padding: '20px 24px',
          borderRadius: '12px',
          background: 'var(--accent-bg)',
          border: '0.5px solid var(--accent)',
          fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7,
        }}>
          <strong style={{ color: 'var(--accent)' }}>Note:</strong> Update the publications list in{' '}
          <code style={{ background: 'var(--bg-tertiary)', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>
            src/app/publications/page.js
          </code>
          {' '}with your actual DOIs and journal details.
        </div>
      </div>
    </div>
  )
}
