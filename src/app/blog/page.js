import Link from 'next/link'
import { getAllPosts } from '../../lib/markdown'

export const metadata = {
  title: 'Blog — Md. Mosiur Rahman',
  description: 'Research notes, scientific insights, and personal reflections.',
}

export default function BlogPage() {
  const posts = getAllPosts('blog')

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ paddingBottom: '48px', borderBottom: '0.5px solid var(--border)', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '500', background: 'var(--accent-bg)', color: 'var(--accent)', marginBottom: '16px' }}>Blog</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, letterSpacing: '-0.04em', color: 'var(--text-primary)', marginBottom: '16px' }}>Research & Reflections</h1>
        </div>
        {posts.length === 0 ? <p>No posts yet</p> : <div>{posts.map(p => <p key={p.slug}>{p.meta.title}</p>)}</div>}
      </div>
    </div>
  )
}
