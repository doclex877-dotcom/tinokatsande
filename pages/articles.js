import SEO from '../components/SEO'
import ArticleCard from '../components/ArticleCard'
import { getAllArticles } from '../lib/articles'

export default function ArticlesPage({ articles }) {
  return (
    <>
      <SEO
        title="All Health Guides"
        description="Browse all evidence-based health guides by Dr. Tino Katsande — chronic conditions, mental health, symptoms, and women's health."
        canonical="/articles"
      />

      <div style={{ background: 'linear-gradient(135deg, var(--teal) 0%, #083D3D 100%)', padding: '56px 24px 48px' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '40px', fontWeight: '800', color: 'var(--white)', marginBottom: '12px' }}>
            All Health Guides
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)' }}>
            {articles.length} evidence-based guides — written and reviewed by Dr. Tino Katsande
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '48px 24px 80px' }}>
        <div className="cards-grid">
          {articles.map(a => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const articles = getAllArticles()
  return { props: { articles } }
}
