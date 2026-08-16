import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SEO from '../components/SEO'
import ArticleCard from '../components/ArticleCard'
import { getAllArticles } from '../lib/articles'

const TOPICS = [
  { icon: '🫀', label: 'Chronic Conditions', href: '/category/chronic-conditions', desc: 'Diabetes, hypertension, arthritis & more' },
  { icon: '🧠', label: 'Mental Health', href: '/category/mental-health', desc: 'Anxiety, depression, burnout & therapy' },
  { icon: '🔍', label: 'Symptoms Guide', href: '/category/symptoms', desc: 'What your body is trying to tell you' },
  { icon: '🌸', label: "Women's Health", href: '/category/womens-health', desc: 'PCOS, fibroids, fertility & menopause' },
]

export default function Home({ articles }) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = React.useState('')

  const handleSearch = e => {
    e.preventDefault()
    if (searchQuery.trim()) router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
  }

  const featured = articles[0]
  const recent = articles.slice(1, 7)

  return (
    <>
      <SEO />

      {/* Hero */}
      <section className="hero">
        <div className="hero__inner">
          <div>
            <p className="hero__eyebrow"><span className="hero__eyebrow-dot" />Evidence-based · Plain English · Written by a doctor</p>
            <h1 className="hero__title">
              Health answers you can<br /><em>actually trust</em>
            </h1>
            <p className="hero__subtitle">
              Dr. Tino Katsande explains chronic conditions, mental health, and symptoms in the plain
              English your doctor didn't have time to use. No jargon. No scare tactics. Just facts.
            </p>
            <form onSubmit={handleSearch} className="hero__search">
              <input
                type="search"
                placeholder='Search — e.g. "high blood pressure symptoms"'
                aria-label="Search health topics"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </div>

          <div className="hero__card">
            <div className="hero__card-title">Browse by topic</div>
            <div className="hero__topics">
              {TOPICS.map(t => (
                <Link href={t.href} key={t.label} className="hero__topic">
                  <span className="hero__topic-icon">{t.icon}</span>
                  <div>
                    <div className="hero__topic-text">{t.label}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>{t.desc}</div>
                  </div>
                  <span className="hero__topic-count">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="trust-bar">
        <div className="trust-bar__inner">
          {[
            { icon: '🩺', text: 'Written by Dr. Tino Katsande, MB ChB' },
            { icon: '📚', text: 'All sources cited — NHS, WHO, CDC' },
            { icon: '✅', text: 'Medically reviewed content' },
            { icon: '🔄', text: 'Regularly updated guides' },
          ].map(t => (
            <div key={t.text} className="trust-item">
              <span className="trust-item-icon">{t.icon}</span>
              <span>{t.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category pills */}
      <div className="cat-bar">
        <div className="cat-bar__inner">
          <span className="cat-bar__label">Topics:</span>
          {TOPICS.map(t => (
            <Link key={t.label} href={t.href} className="cat-pill">{t.icon} {t.label}</Link>
          ))}
        </div>
      </div>

      <div className="container">

        {/* Featured articles */}
        {articles.length > 0 && (
          <section className="articles-section">
            <div className="section-header">
              <h2 className="section-title">Latest health guides</h2>
              <Link href="/articles" className="section-link">View all guides →</Link>
            </div>
            <div className="cards-grid--featured">
              {featured && <ArticleCard article={featured} featured />}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {recent.slice(0, 3).map(a => <ArticleCard key={a.slug} article={a} compact />)}
              </div>
            </div>
          </section>
        )}

        {/* Category sections */}
        {[
          { cat: 'chronic-conditions', label: 'Chronic Conditions', icon: '🫀' },
          { cat: 'mental-health', label: 'Mental Health', icon: '🧠' },
        ].map(({ cat, label, icon }) => {
          const catArticles = articles.filter(a => a.category === cat).slice(0, 3)
          return (
            <section key={cat} className="articles-section" style={{ borderTop: '1px solid var(--border)', paddingTop: '48px' }}>
              <div className="section-header">
                <h2 className="section-title">{icon} {label}</h2>
                <Link href={`/category/${cat}`} className="section-link">All {label.toLowerCase()} →</Link>
              </div>
              {catArticles.length > 0 ? (
                <div className="cards-grid">
                  {catArticles.map(a => <ArticleCard key={a.slug} article={a} />)}
                </div>
              ) : (
                <div style={{ padding: '32px', background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px' }}>
                  Guides coming soon.
                </div>
              )}
            </section>
          )
        })}

        {/* About Dr. Tino strip */}
        <section style={{ background: 'var(--teal-pale)', border: '1px solid var(--teal-light)', borderRadius: 'var(--radius-xl)', padding: '40px 48px', margin: '48px 0', display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: '24px', alignItems: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: '800', color: 'var(--white)' }}>TK</div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--text-body)', marginBottom: '6px' }}>About Dr. Tino Katsande</div>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.65', maxWidth: '560px' }}>
              A Zimbabwe-born physician based in the UK with over a decade of clinical experience. Dr. Tino writes to give patients the clear, honest explanations they deserve — starting with the questions they were too afraid to ask in the consultation room.
            </p>
          </div>
          <Link href="/about" className="btn btn--primary" style={{ whiteSpace: 'nowrap' }}>Read my story</Link>
        </section>

      </div>
    </>
  )
}

export async function getStaticProps() {
  const articles = getAllArticles()
  return { props: { articles } }
}
