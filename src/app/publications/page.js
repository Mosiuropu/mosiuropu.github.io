'use client'

const publications = [
  {
    year: '2024',
    authors: 'Alam, M. M., Alam, K. M., Momotaz, R., Arifunnahar, M., Bhuyin Apu, M. M. R., & Siddique, S. S.',
    title: 'Botrytis gray mold of Lilium in Bangladesh: Diagnosis, basic study and control',
    journal: 'Heliyon',
    volume: '10(12), e33165',
    doi: 'https://doi.org/10.1016/j.heliyon.2024.e33165',
    type: 'SCIE + Scopus',
  },
  {
    year: '2020',
    authors: 'Alam, M. K., Bell, R. W., Hasanuzzaman, M. et al. [incl. Apu, M. M. R.]',
    title: 'Rice establishment techniques and implications for soil properties, global warming potential, and crop yields',
    journal: 'Agronomy',
    volume: '10, 888',
    doi: 'https://doi.org/10.3390/agronomy10060888',
    type: 'SCIE + Scopus',
  },
  {
    year: '2019',
    authors: 'Apu, M. R. B., Ambia, K., Naznin, A., Khan, F. N., Saha, K. C., & Halder, S. C.',
    title: 'Varieties and disbudding effect on quality chrysanthemum production',
    journal: 'Bulletin of the Institute of Tropical Agriculture, Kyushu University',
    volume: '42, 7–11',
    doi: 'https://doi.org/10.11189/bita.42.7',
    type: 'First Author · J-STAGE',
  },
  {
    year: '2020',
    authors: 'Khan, F. N., Naznin, A., Ambia, K., & Bhuyin, M. M. R.',
    title: 'Effect of varieties and planting materials on growth, flowering and bulb production in tuberose',
    journal: 'Journal of Ornamental Plants',
    volume: '10(3), 135–143',
    type: 'Peer-Reviewed',
  },
  {
    year: '2022',
    authors: 'Ambia, K., Khan, F. N., Naznin, A., Bhuiyin, M. M. R., & Ara, K. A.',
    title: 'Characterization and evaluation of Lilium in Bangladesh',
    journal: 'Bangladesh Journal of Agricultural Research',
    volume: '47(1), 39–50',
    doi: 'https://doi.org/10.3329/bjar.v47i1.64853',
    type: 'Peer-Reviewed',
  },
  {
    year: '2024',
    authors: 'Khan, F. N., Ambia, K., Naznin, A., Bhuiyin, M. M. R., & Rashid, M. T.',
    title: 'Bulb preservation influenced by various temperature and media on flower and bulb production in Lilium',
    journal: 'Current Horticulture',
    volume: '12(1), 35–42',
    doi: 'https://doi.org/10.48165/chr.2023.11.3.11',
    type: 'Peer-Reviewed',
  },
  {
    year: '2015',
    authors: 'Khan, M. H., Bhuiyan, S. R., Saha, K. C., Bhuyin, M. R. et al.',
    title: 'Variability, correlation and path coefficient analysis of bitter gourd',
    journal: 'Bangladesh Journal of Agricultural Research',
    volume: '40(4), 607–618',
    type: 'Peer-Reviewed',
  },
]

export default function PublicationsPage() {
  const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a)

  return (
    <div style={{
      paddingTop: '44px',
      minHeight: '100vh',
      background: 'var(--bg-primary)',
    }}>
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{
          paddingBottom: '48px',
          borderBottom: '0.5px solid var(--border)',
          marginBottom: '48px',
        }}>
          <span style={{
            display: 'inline-block',
            padding: '4px 14px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: '600',
            background: 'var(--accent-bg)',
            color: 'var(--accent)',
            marginBottom: '16px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}>
            Publications
          </span>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            marginBottom: '16px',
          }}>
            Peer-Reviewed Research
          </h1>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-tertiary)',
            maxWidth: '520px',
            lineHeight: 1.7,
          }}>
            7 articles published in SCI, SCOPUS, and peer-reviewed journals,
            spanning molecular breeding, floriculture, and crop science
          </p>
        </div>

        {years.map(year => (
          <div key={year} style={{ marginBottom: '40px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px',
            }}>
              <span style={{
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--text-tertiary)',
                letterSpacing: '0.05em',
              }}>
                {year}
              </span>
              <div style={{
                flex: 1,
                height: '0.5px',
                background: 'var(--border)',
              }} />
            </div>

            {publications.filter(p => p.year === year).map((pub, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--card-bg)',
                  border: '0.5px solid var(--card-border)',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  marginBottom: '16px',
                  boxShadow: 'var(--card-shadow)',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--border-accent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--card-border)'
                }}
              >
                <h2 style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                  lineHeight: 1.5,
                }}>
                  {pub.title}
                </h2>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-tertiary)',
                  marginBottom: '6px',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                }}>
                  {pub.authors}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                }}>
                  <span style={{
                    fontSize: '13px',
                    color: 'var(--accent)',
                    fontWeight: '500',
                  }}>
                    {pub.journal}
                  </span>
                  {pub.volume && (
                    <span style={{ fontSize: '13px', color: 'var(--text-tertiary)', fontWeight: 400 }}>
                      {pub.volume}
                    </span>
                  )}
                  <span style={{
                    fontSize: '11px',
                    color: 'var(--text-quaternary)',
                    background: 'var(--bg-tertiary)',
                    padding: '2px 10px',
                    borderRadius: '9999px',
                    fontWeight: '500',
                  }}>
                    {pub.type}
                  </span>
                  {pub.doi && (
                    <a href={pub.doi} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: '11px', color: 'var(--accent)', opacity: 0.7, textDecoration: 'none' }}>
                      DOI ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
