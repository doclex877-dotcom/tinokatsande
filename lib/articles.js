import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

const articlesDir = path.join(process.cwd(), 'content/articles')

export function getAllArticles() {
  if (!fs.existsSync(articlesDir)) return []
  return fs.readdirSync(articlesDir)
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const slug = filename.replace('.md', '')
      const { data } = matter(fs.readFileSync(path.join(articlesDir, filename), 'utf8'))
      return { slug, ...data }
    })
    .filter(a => a.published !== false)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getArticleBySlug(slug) {
  const filePath = path.join(articlesDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const { data, content } = matter(fs.readFileSync(filePath, 'utf8'))
  const processed = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(content)
  return { slug, ...data, content: processed.toString() }
}

export function getAllSlugs() {
  if (!fs.existsSync(articlesDir)) return []
  return fs.readdirSync(articlesDir)
    .filter(f => f.endsWith('.md'))
    .map(f => ({ params: { slug: f.replace('.md', '') } }))
}
