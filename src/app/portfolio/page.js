'use client'
import { useState } from 'react'
import Link from 'next/link'

const projects = [
  {
    slug: 'apple-breeding-mas',
    category: 'Molecular Breeding',
    title: 'Apple Breeding via Marker-Assisted Selection',
    description: 'Population genetics and marker-assisted selection across 192 apple accessions.',
    tags: ['SSR', 'SCAR', 'MAS', 'Apple', 'GenAlEx'],
    year: '2024',
    status: 'Publication Ready',
    icon: '🍎',
  },
  {
    slug: 'chrysanthemum-genetics',
    category: 'Floriculture',
    title: 'Chrysanthemum Genetic Diversity',
    description: 'SSR and ISSR-based genetic diversity analysis across chrysanthemum cultivars.',
    tags: ['SSR', 'ISSR', 'Chrysanthemum', 'Floriculture'],
    year: '2022',
    status: 'Published',
    icon: '🌸',
  },
]

const categories = ['All', 'Molecular Breeding', 'Floriculture', 'Genomics', 'Fruit Physiology']

export default function PortfolioPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 80px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '16px' }}>Research Projects</h1>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{ padding: '8px 20px', borderRadius: '30px', border: active === cat ? 'none' : '0.5px solid var(--border-strong)', background: active === cat ? 'var(--accent)' : 'transparent', color: active === cat ? 'white' : 'var(--text-secondary)', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>
              {cat}
            </button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {filtered.map(project => (
            <div key={project.slug} style={{ background: 'var(--card-bg)', border: '0.5px solid var(--border)', borderRadius: '20px', padding: '28px' }}>
              <span style={{ fontSize: '32px' }}>{project.icon}</span>
              <h2 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '12px', marginTop: '16px' }}>{project.title}</h2>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
