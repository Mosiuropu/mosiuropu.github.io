import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDir = path.join(process.cwd(), 'content')

export function getPostSlugs(folder) {
  const dir = path.join(contentDir, folder)
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter(f => f.endsWith('.md'))
}

export function getPostBySlug(folder, slug) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(contentDir, folder, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { slug: realSlug, meta: data, content }
}

export async function getPostWithHtml(folder, slug) {
  const post = getPostBySlug(folder, slug)
  const processed = await remark().use(html).process(post.content)
  return { ...post, html: processed.toString() }
}

export function getAllPosts(folder) {
  const slugs = getPostSlugs(folder)
  return slugs
    .map(slug => getPostBySlug(folder, slug))
    .sort((a, b) => {
      const dateA = a.meta.date ? new Date(a.meta.date) : new Date(0)
      const dateB = b.meta.date ? new Date(b.meta.date) : new Date(0)
      return dateB - dateA
    })
}
