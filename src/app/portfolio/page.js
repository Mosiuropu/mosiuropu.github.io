'use client'
import { useState } from 'react'

const projects = [
  {
    category: 'Molecular Breeding',
    title: 'SSR/ISSR/SNP-based characterisation of apple germplasm for hybrid parent selection',
    description: 'MAgSci dissertation (UWA, 2024). Population genetics and marker-assisted parent selection across 192 apple accessions using SSR, SCAR, and SNP markers. GeneMapper v5.0, ABI 3130xl, GenAlEx 6.5.',
    tags: ['SSR', 'SCAR', 'SNP', 'MAS', 'Apple', 'GenAlEx', 'ABI 3130xl'],
    year: '2024',
    status: 'Dissertation',
    icon: '🍎',
  },
  {
    category: 'Molecular Breeding',
    title: 'SSR/ISSR/SNP-based characterisation of marigold germplasm for hybrid parent selection',
    description: 'PI (2025–Present). Molecular characterisation of marigold germplasm at BARI using SSR, ISSR, and SNP markers for hybrid parent identification and variety development.',
    tags: ['SSR', 'ISSR', 'SNP', 'Marigold', 'Hybrid', 'Germplasm'],
    year: '2025',
    status: 'Ongoing',
    icon: '🌻',
  },
  {
    category: 'Floriculture',
    title: 'Varietal evaluation and planting material optimisation for tuberose production',
    description: 'Co-investigator (2018–2020). Effects of varieties and planting materials on growth, flowering, and bulb production in tuberose (Polianthes tuberosa). Published in Journal of Ornamental Plants 10(3), 135–143 (2020).',
    tags: ['Tuberose', 'Variety Trial', 'Post-harvest', 'JOP'],
    year: '2020',
    status: 'Published',
    icon: '🌸',
  },
  {
    category: 'Floriculture',
    title: 'Varieties and disbudding effect on quality chrysanthemum production',
    description: 'First-author. Nitrogen and disbudding effects on chrysanthemum flower quality. Published in Bulletin of the ITA, Kyushu University 42, 7–11 (2019).',
    tags: ['Chrysanthemum', 'Disbudding', 'Quality', 'First Author'],
    year: '2019',
    status: 'Published',
    icon: '🌿',
  },
  {
    category: 'Floriculture',
    title: 'Orchid hybrid variety development through controlled hybridization',
    description: 'PI (2025–Present). Hybrid variety development in orchid at BARI through controlled hybridization, selection, and evaluation for commercial potential.',
    tags: ['Orchid', 'Hybridization', 'Breeding', 'Variety'],
    year: '2025',
    status: 'Ongoing',
    icon: '🌺',
  },
]

const categories = ['All', 'Molecular Breeding', 'Floriculture']

export default function PortfolioPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div style={{
      paddingTop: '44px',
      minHeight: '100vh',
      background: 'var(--bg-primary)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 80px' }}>
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
            Research
          </span>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            marginBottom: '16px',
          }}>
            Research Projects
          </h1>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-tertiary)',
            maxWidth: '480px',
            lineHeight: 1.7,
          }}>
            Ongoing and completed research spanning molecular breeding, floriculture,
            and crop improvement at BARI
          </p>
        </div>

        {/* Filter */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '40px',
          flexWrap: 'wrap',
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border: active === cat ? 'none' : '0.5px solid var(--border-strong)',
                background: active === cat ? 'var(--accent)' : 'transparent',
                color: active === cat ? 'white' : 'var(--text-secondary)',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {filtered.map(project => (
            <div
              key={project.title}
              style={{
                background: 'var(--card-bg)',
                border: '0.5px solid var(--card-border)',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: 'var(--card-shadow)',
                transition: 'all 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
                e.currentTarget.style.borderColor = 'var(--border-accent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--card-shadow)'
                e.currentTarget.style.borderColor = 'var(--card-border)'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px',
              }}>
                <span style={{ fontSize: '32px', lineHeight: 1 }}>{project.icon}</span>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--text-quaternary)',
                  background: 'var(--bg-tertiary)',
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  letterSpacing: '0.03em',
                }}>
                  {project.year}
                </span>
              </div>
              <span style={{
                display: 'inline-block',
                padding: '3px 10px',
                borderRadius: '9999px',
                fontSize: '11px',
                fontWeight: '600',
                background: 'var(--accent-bg)',
                color: 'var(--accent)',
                marginBottom: '10px',
                letterSpacing: '0.03em',
              }}>
                {project.category}
              </span>
              <h2 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '8px',
                lineHeight: 1.4,
              }}>
                {project.title}
              </h2>
              <p style={{
                fontSize: '13px',
                color: 'var(--text-tertiary)',
                lineHeight: 1.7,
                marginBottom: '20px',
              }}>
                {project.description}
              </p>
              <div style={{
                display: 'flex',
                gap: '6px',
                flexWrap: 'wrap',
              }}>
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      fontSize: '11px',
                      fontWeight: '500',
                      background: 'var(--bg-tertiary)',
                      color: 'var(--text-quaternary)',
                      border: '0.5px solid var(--border)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{
                marginTop: '16px',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                {project.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
