import Link from 'next/link'
import { getAllPosts, getPostWithHtml, getPostSlugs } from '@/lib/markdown'

export async function generateStaticParams() {
  const slugs = getPostSlugs('blog')
  return slugs.map(slug => ({ slug: slug.replace(/\.md$/, '') }))
}

export async function generateMetadata({ params }) {
  const post = await getPostWithHtml('blog', params.slug)
  return {
    title: `${post.meta.title || params.slug} — Blog`,
    description: post.meta.excerpt || '',
  }
}

export default async function BlogPost({ params }) {
  const post = await getPostWithHtml('blog', params.slug)

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px' }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link href="/blog" style={{ fontSize: '14px', color: 'var(--text-tertiary)', textDecoration: 'none' }}>Blog</Link>
          <span style={{ color: 'var(--text-tertiary)', fontSize: '14px' }}>›</span>
          <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{post.meta.title}</span>
        </nav>

        {/* Tags */}
        {post.meta.tags && (
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
            {post.meta.tags.split(',').map(tag => (
              <span key={tag} style={{
                padding: '3px 10px', borderRadius: '20px',
                fontSize: '11px', fontWeight: 600,
                background: 'var(--accent-bg)', color: 'var(--accent)',
                textTransform: 'uppercase', letterSpacing: '0.06em',
              }}>{tag.trim()}</span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700,
          color: 'var(--text-primary)', letterSpacing: '-0.03em',
          lineHeight: 1.2, marginBottom: '20px',
        }}>
          {post.meta.title}
        </h1>

        {/* Meta */}
        <div style={{
          display: 'flex', gap: '20px', alignItems: 'center',
          paddingBottom: '32px', borderBottom: '0.5px solid var(--border)',
          marginBottom: '40px', flexWrap: 'wrap',
        }}>
          {post.meta.date && (
            <span style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
              {new Date(post.meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          )}
          {post.meta.readTime && (
            <span style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>{post.meta.readTime}</span>
          )}
          <span style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>by Md. Mosiur Rahman</span>
        </div>

        {/* Content */}
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* Back */}
        <div style={{
          marginTop: '64px', paddingTop: '32px',
          borderTop: '0.5px solid var(--border)',
        }}>
          <Link href="/blog" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: 'var(--accent)', textDecoration: 'none',
            fontSize: '14px', fontWeight: '500',
          }}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
