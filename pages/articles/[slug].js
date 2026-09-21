import Link from 'next/link'
import { format } from 'date-fns'
import SEO from '../../components/SEO'
import ArticleCard from '../../components/ArticleCard'
import { getAllSlugs, getArticleBySlug, getAllArticles } from '../../lib/articles'

export default function ArticlePage({ article, related }) {
  if (!article) return <div style={{ padding: '80px 24px', textAlign: 'center' }}>Article not found.</div>
  const dateStr = article.date ? format(new Date(article.date), 'dd MMMM yyyy') : ''

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={`/articles/${article.slug}`}
        article
        publishedTime={article.date}
        ogImage={article.heroImage}
      />

      <div className="article-header">
        <div className="container--narrow">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb__sep">›</span>
            <Link href={`/category/${article.category}`}>{article.categoryLabel || article.category}</Link>
            <span className="breadcrumb__sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px' }}>{article.title}</span>
          </nav>
          <p className="article-header__cat">{article.categoryLabel || article.category}</p>
          <h1 className="article-header__title">{article.title}</h1>
          <div className="article-header__meta">
            <div className="article-header__author">
              <div className="author-avatar-lg" aria-hidden="true">TK</div>
              <div>
                <div className="author-info-name">Dr. Tino Katsande</div>
                <div className="author-info-cred">MB ChB · General Practitioner · NHS London</div>
              </div>
            </div>
            <span className="article-header__divider">·</span>
            <time className="article-header__date" dateTime={article.date}>{dateStr}</time>
            {article.readTime && (
              <><span className="article-header__divider">·</span>
              <span className="article-header__read">{article.readTime} min read</span></>
            )}
          </div>
        </div>
      </div>

      {article.heroImage && (
        <div style={{ width: '100%', maxHeight: '480px', overflow: 'hidden', background: '#0B6B6B' }}>
          <img
            src={article.heroImage}
            alt={article.title}
            style={{ width: '100%', maxHeight: '480px', objectFit: 'cover', display: 'block' }}
            loading="eager"
          />
        </div>
      )}

      <article className="article-body">
        <div className="med-reviewed" role="note">
          <span className="med-reviewed__icon" aria-hidden="true">✅</span>
          <span><strong>Medically reviewed</strong> by Dr. Tino Katsande, MB ChB — {dateStr}</span>
        </div>

        {article.lastUpdated && (
          <div className="last-updated">
            <span aria-hidden="true">🔄</span>
            <span>Last reviewed: {article.lastUpdated}</span>
          </div>
        )}

        {article.tags && article.tags.length > 0 && (
          <div className="tags" aria-label="Article tags">
            {article.tags.map(tag => (
              <Link
                key={tag}
                href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="tag"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}

        <div dangerouslySetInnerHTML={{ __html: article.content }} />

        <div className="author-bio">
          <div className="author-bio__avatar" aria-hidden="true">TK</div>
          <div>
            <div className="author-bio__name">Dr. Tino Katsande, MB ChB</div>
            <div className="author-bio__cred">General Practitioner · NHS · London, UK</div>
            <p className="author-bio__text">
              Dr. Tino Katsande is a Zimbabwe-born General Practitioner working within the NHS in London
              with over 12 years of clinical experience across primary care and community health.
              He writes to bridge the gap between clinical medicine and what patients actually need to know —
              with a particular focus on conditions that disproportionately affect Black and African communities.
            </p>
          </div>
        </div>

        <div className="callout callout--warning">
          <span className="callout__icon" aria-hidden="true">⚠️</span>
          <div>
            <div className="callout__title">Medical disclaimer</div>
            This article is for informational purposes only and does not constitute medical advice,
            diagnosis, or treatment. Always consult a qualified healthcare professional about any
            health concerns. In an emergency, call 999 (UK) immediately.
            See our <Link href="/medical-disclaimer">full medical disclaimer</Link>.
          </div>
        </div>
      </article>

      {related && related.length > 0 && (
        <section
          aria-label="Related guides"
          style={{ background: 'var(--off-white)', padding: '48px 0', borderTop: '1px solid var(--border)' }}
        >
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '700', color: 'var(--text-body)', marginBottom: '24px' }}>
              Related guides
            </h2>
            <div className="cards-grid">
              {related.map(a => <ArticleCard key={a.slug} article={a} />)}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export async function getStaticPaths() {
  return { paths: getAllSlugs(), fallback: false }
}

export async function getStaticProps({ params }) {
  const article = await getArticleBySlug(params.slug)
  if (!article) return { notFound: true }
  const related = getAllArticles()
    .filter(a => a.slug !== params.slug && a.category === article.category)
    .slice(0, 3)
  return { props: { article, related } }
}
