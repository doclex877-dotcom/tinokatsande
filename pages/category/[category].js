import Link from 'next/link'
import SEO from '../../components/SEO'
import ArticleCard from '../../components/ArticleCard'
import { getAllArticles } from '../../lib/articles'

const CATS = {
  'chronic-conditions': { label: 'Chronic Conditions', icon: '🫀', desc: 'Plain-English guides to managing diabetes, hypertension, arthritis, and other long-term conditions.' },
  'mental-health': { label: 'Mental Health', icon: '🧠', desc: 'Understanding anxiety, depression, burnout, and how to find the right support.' },
  'symptoms': { label: 'Symptoms Guide', icon: '🔍', desc: 'What common symptoms mean, when to worry, and when to see a doctor.' },
  'womens-health': { label: "Women's Health", icon: '🌸', desc: 'PCOS, fibroids, fertility, menopause, and the health topics affecting women most.' },
  'nutrition': { label: 'Nutrition', icon: '🥦', desc: 'Evidence-based nutrition guides — what actually works and what is just marketing.' },
}

export default function CategoryPage({ category, articles }) {
  const meta = CATS[category] || { label: category, icon: '💊', desc: '' }
  return (
    <>
      <SEO title={meta.label} description={meta.desc} canonical={`/category/${category}`} />
      <div style={{ background: 'linear-gradient(135deg, var(--teal) 0%, #083D3D 100%)', padding: '56px 24px 48px' }}>
        <div className="container">
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>{meta.icon}</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '40px', fontWeight: '800', color: 'var(--white)', marginBottom: '12px' }}>{meta.label}</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', maxWidth: '560px', lineHeight: '1.65' }}>{meta.desc}</p>
        </div>
      </div>
      <div className="container" style={{ padding: '48px 24px 80px' }}>
        {articles.length === 0 ? (
          <div style={{ padding: '48px', background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>Guides in this category are coming soon.</p>
          </div>
        ) : (
          <div className="cards-grid">{articles.map(a => <ArticleCard key={a.slug} article={a} />)}</div>
        )}
      </div>
    </>
  )
}

export async function getStaticPaths() {
  return { paths: Object.keys(CATS).map(c => ({ params: { category: c } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const articles = getAllArticles().filter(a => a.category === params.category)
  return { props: { category: params.category, articles } }
}
