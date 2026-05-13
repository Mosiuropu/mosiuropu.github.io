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
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>Notes from the field, lab, and desk.</p>
        </div>

        {posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-tertiary)' }}>
            <p style={{ fontSize: '48px', marginBottom: '16px' }}>✍️</p>
            <p style={{ fontSize: '18px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '8px' }}>No posts yet</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {posts.map((post, i) => (
              <article key={post.slug} style={{ padding: '32px 0', borderBottom: i < posts.length - 1 ? '0.5px solid var(--border)' : 'none' }}>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <h2 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '10px', lineHeight: 1.3 }}>{post.meta.title}</h2>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
