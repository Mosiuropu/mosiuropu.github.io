import Link from 'next/link'
import { getAllPosts } from '../../lib/markdown'

export const metadata = {
  title: 'Blog — Md. Mosiur Rahman',
  description: 'Research notes on molecular breeding, floriculture, SSR markers, population genetics, and scientific insights.',
}

export default function BlogPage() {
  const posts = getAllPosts('blog')

  return (
    <div style={{
      paddingTop: '44px',
      minHeight: '100vh',
      background: 'var(--bg-primary)',
    }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 24px 80px' }}>
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
            Blog
          </span>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            marginBottom: '16px',
          }}>
            Research & Reflections
          </h1>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-tertiary)',
            maxWidth: '480px',
            lineHeight: 1.7,
          }}>
            Field notes, scientific perspectives, and personal reflections from
            a career in molecular plant breeding
          </p>
        </div>

        {posts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '80px 0',
            color: 'var(--text-tertiary)',
          }}>
            <p style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.5 }}>📝</p>
            <p style={{ fontSize: '16px', fontWeight: 500, marginBottom: '8px', color: 'var(--text-secondary)' }}>
              No posts yet
            </p>
            <p style={{ fontSize: '14px' }}>
              Research notes and reflections coming soon.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <article style={{
                  background: 'var(--card-bg)',
                  border: '0.5px solid var(--card-border)',
                  borderRadius: '20px',
                  padding: '28px 32px',
                  boxShadow: 'var(--card-shadow)',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  display: 'block',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '12px',
                    flexWrap: 'wrap',
                  }}>
                    {post.meta.date && (
                      <span style={{
                        fontSize: '12px',
                        color: 'var(--text-quaternary)',
                        fontWeight: '500',
                      }}>
                        {new Date(post.meta.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    )}
                    {post.meta.readTime && (
                      <span style={{
                        fontSize: '11px',
                        color: 'var(--text-quaternary)',
                        background: 'var(--bg-tertiary)',
                        padding: '2px 10px',
                        borderRadius: '9999px',
                        fontWeight: '500',
                      }}>
                        {post.meta.readTime}
                      </span>
                    )}
                  </div>
                  <h2 style={{
                    fontSize: '17px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                    lineHeight: 1.4,
                  }}>
                    {post.meta.title}
                  </h2>
                  {post.meta.excerpt && (
                    <p style={{
                      fontSize: '14px',
                      color: 'var(--text-tertiary)',
                      lineHeight: 1.7,
                      marginBottom: '16px',
                    }}>
                      {post.meta.excerpt}
                    </p>
                  )}
                  {post.meta.tags && (
                    <div style={{
                      display: 'flex',
                      gap: '6px',
                      flexWrap: 'wrap',
                    }}>
                      {post.meta.tags.split(',').map(tag => (
                        <span
                          key={tag.trim()}
                          style={{
                            padding: '3px 10px',
                            borderRadius: '9999px',
                            fontSize: '11px',
                            fontWeight: '500',
                            background: 'var(--accent-bg)',
                            color: 'var(--accent)',
                          }}
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
