import Link from 'next/link'
import { getPostWithHtml, getPostSlugs } from '../../../lib/markdown'

export async function generateStaticParams() {
  const slugs = getPostSlugs('blog')
  return slugs.map(slug => ({ slug: slug.replace(/\.md$/, '') }))
}

export default async function BlogPost({ params }) {
  const post = await getPostWithHtml('blog', params.slug)
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px' }}>
        <h1>{post.meta.title}</h1>
        <div className="prose-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}
