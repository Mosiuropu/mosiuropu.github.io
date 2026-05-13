'use client'
import { useState } from 'react'
import Link from 'next/link'

const projects = [
  {
    slug: 'apple-breeding-mas',
    category: 'Molecular Breeding',
    title: 'Apple Breeding via Marker-Assisted Selection',
    description: 'Population genetics and marker-assisted selection across 192 apple accessions. Uses SSR and SCAR markers to identify disease resistance and quality traits. Dissertation prepared for Tree Genetics & Genomes.',
    tags: ['SSR', 'SCAR', 'MAS', 'Apple', 'GenAlEx'],
    year: '2024',
    status: 'Publication Ready',
    icon: '🍎',
  },
  {
    slug: 'chrysanthemum-genetics',
    category: 'Floriculture',
    title: 'Chrysanthemum Genetic Diversity',
    description: 'SSR and ISSR-based genetic diversity analysis across chrysanthemum cultivars at BARI. Fingerprinting for conservation and breeding programs.',
    tags: ['SSR', 'ISSR', 'Chrysanthemum', 'Floriculture'],
    year: '2022',
    status: 'Published',
    icon: '🌸',
  },
  {
    slug: 'snp-marker-development',
    category: 'Genomics',
    title: 'SNP Marker Development',
    description: 'Development and validation of SNP marker systems for crop improvement, genetic fingerprinting, and phylogenetic analysis in Bangladeshi germplasm.',
    tags: ['SNP', 'Genomics', 'Fingerprinting'],
    year: '2021',
    status: 'Published',
    icon: '🧬',
  },
  {
    slug: 'tuberose-breeding',
    category: 'Floriculture',
    title: 'Tuberose Varietal Development',
    description: 'Genetic characterization and varietal improvement of tuberose (Polianthes tuberosa) under tropical conditions. Focused on yield, fragrance, and vase life traits.',
    tags: ['Tuberose', 'Floriculture', 'Breeding'],
    year: '2020',
    status: 'Published',
    icon: '🌼',
  },
  {
    slug: 'marigold-improvement',
    category: 'Floriculture',
    title: 'Marigold Breeding Program',
    description: 'Selection and evaluation of high-yielding marigold lines for commercial floricultural production in Bangladesh.',
    tags: ['Marigold', 'Floriculture', 'Selection'],
    year: '2019',
    status: 'Published',
    icon: '🌻',
  },
  {
    slug: 'fruit-postharvest',
    category: 'Fruit Physiology',
    title: 'Post-harvest Quality Management',
    description: 'Research on fruit ripening physiology and post-harvest management strategies for tropical and subtropical fruit species.',
    tags: ['Post-harvest', 'Fruit Physiology', 'Quality'],
    year: '2018',
    status: 'Published',
    icon: '🫐',
  },
  {
    slug: 'gerbera-genetics',
    category: 'Floriculture',
    title: 'Gerbera Genetic Improvement',
    description: 'Molecular characterization and improvement of gerbera cultivars using molecular marker systems at BARI.',
    tags: ['Gerbera', 'Floriculture', 'Markers'],
    year: '2017',
    status: 'Published',
    icon: '🌺',
  },
  {
    slug: 'orchid-conservation',
    category: 'Floriculture',
    title: 'Orchid Germplasm Conservation',
    description: 'Ex situ conservation and characterization of orchid germplasm. Molecular fingerprinting for identification and conservation management.',
    tags: ['Orchid', 'Conservation', 'Germplasm'],
    year: '2016',
    status: 'Published',
    icon: '💜',
  },
]

const categories = ['All', 'Molecular Breeding', 'Floriculture', 'Genomics', 'Fruit Physiology']

const statusColor = {
  'Published': { bg: '#e8f5ee', color: '#1a6b3c' },
  'Publication Ready': { bg: '#fff8e1', color: '#b8860b' },
  'In Progress': { bg: '#e8eaf6', color: '#3949ab' },
}

export default function PortfolioPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 80px' }}>
        {/* Header */}
        <div style={{ marginBottom: '52px' }}>
          <span style={{
            display: 'inline-block', padding: '4px 12px', borderRadius: '20px',
            fontSize: '12px', fontWeight: '500', background: 'var(--accent-bg)',
            color: 'var(--accent)', marginBottom: '16px',
          }}>Portfolio</span>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700,
            letterSpacing: '-0.04em', color: 'var(--text-primary)', marginBottom: '16px',
          }}>
            Research Projects
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '560px' }}>
            13+ years of applied agricultural science — from field breeding to molecular genomics.
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{
          display: 'flex', gap: '8px', marginBottom: '40px', flexWrap: 'wrap',
        }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              padding: '8px 20px', borderRadius: '30px',
              border: '0.5px solid',
              borderColor: active === cat ? 'transparent' : 'var(--border-strong)',
              background: active === cat ? 'var(--accent)' : 'transparent',
              color: active === cat ? 'white' : 'var(--text-secondary)',
              fontSize: '14px', fontWeight: '500', cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
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
            <article key={project.slug} style={{
              background: 'var(--card-bg)',
              border: '0.5px solid var(--border)',
              borderRadius: '20px',
              padding: '28px',
              display: 'flex', flexDirection: 'column',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.borderColor = 'var(--accent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'var(--border)'
            }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span style={{ fontSize: '32px' }}>{project.icon}</span>
                <span style={{
                  padding: '4px 10px', borderRadius: '20px',
                  fontSize: '11px', fontWeight: 600,
                  background: statusColor[project.status]?.bg || 'var(--bg-tertiary)',
                  color: statusColor[project.status]?.color || 'var(--text-tertiary)',
                }}>
                  {project.status}
                </span>
              </div>

              <span style={{
                fontSize: '11px', color: 'var(--text-tertiary)',
                textTransform: 'uppercase', letterSpacing: '0.08em',
                marginBottom: '8px', fontWeight: 600,
              }}>{project.category} · {project.year}</span>

              <h2 style={{
                fontSize: '17px', fontWeight: 600,
                color: 'var(--text-primary)', marginBottom: '12px',
                lineHeight: 1.3, letterSpacing: '-0.01em',
              }}>
                {project.title}
              </h2>

              <p style={{
                fontSize: '14px', color: 'var(--text-secondary)',
                lineHeight: 1.7, flexGrow: 1, marginBottom: '20px',
              }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '3px 10px', borderRadius: '20px',
                    fontSize: '11px',
                    background: 'var(--bg-tertiary)',
                    color: 'var(--text-tertiary)',
                    border: '0.5px solid var(--border)',
                  }}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
