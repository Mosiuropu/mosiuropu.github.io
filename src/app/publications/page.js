'use client'

const publications = [
  {
    year: '2024',
    title: 'Marker-Assisted Selection in Apple Breeding',
    authors: 'Rahman MM, Considine MJ, Mia S',
    journal: 'Tree Genetics & Genomes',
    status: 'Manuscript in preparation',
  },
]

export default function PublicationsPage() {
  const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a)

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 24px 80px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '16px' }}>Publications</h1>
        {years.map(year => (
          <div key={year} style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-tertiary)', marginBottom: '20px' }}>{year}</h2>
            {publications.filter(p => p.year === year).map((pub, i) => (
              <div key={i} style={{ background: 'var(--card-bg)', border: '0.5px solid var(--border)', borderRadius: '16px', padding: '24px 28px', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>{pub.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '4px' }}>{pub.authors}</p>
                <p style={{ fontSize: '13px', color: 'var(--accent)', fontStyle: 'italic' }}>{pub.journal}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
