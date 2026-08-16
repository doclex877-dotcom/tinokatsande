import Link from 'next/link'
import { format } from 'date-fns'

const CAT_CONFIG = {
  'chronic-conditions': { color: '#0B6B6B', bg: '#E8F5F5', icon: '🫀', label: 'Chronic Conditions', imageBg: '#0B6B6B' },
  'mental-health': { color: '#6B21A8', bg: '#F3E8FF', icon: '🧠', label: 'Mental Health', imageBg: '#3B0764' },
  'symptoms': { color: '#B45309', bg: '#FEF3C7', icon: '🔍', label: 'Symptoms', imageBg: '#78350F' },
  'womens-health': { color: '#BE185D', bg: '#FCE7F3', icon: '🌸', label: "Women's Health", imageBg: '#831843' },
  'nutrition': { color: '#15803D', bg: '#DCFCE7', icon: '🥦', label: 'Nutrition', imageBg: '#14532D' },
}

export default function ArticleCard({ article, featured = false, compact = false }) {
  const cfg = CAT_CONFIG[article.category] || { color: '#0B6B6B', bg: '#E8F5F5', icon: '💊', label: article.category, imageBg: '#0B6B6B' }
  const dateStr = article.date ? format(new Date(article.date), 'dd MMM yyyy') : ''

  return (
    <Link href={`/articles/${article.slug}`} className={`card${featured ? ' card--featured' : ''}`} style={{ display: 'block' }}>
      {!compact && (
        <div className="card__image">
          <div className="card__image-fallback" style={{ background: cfg.imageBg }}>
            <span style={{ fontSize: featured ? '56px' : '40px' }} role="img" aria-hidden="true">{cfg.icon}</span>
            <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>{cfg.label}</span>
          </div>
        </div>
      )}
      <div className="card__body">
        <span className="card__category" style={{ color: cfg.color }}>{cfg.label}</span>
        <h2 className="card__title">{article.title}</h2>
        {!compact && <p className="card__excerpt">{article.excerpt}</p>}
        <div className="card__meta">
          <div className="card__author-avatar">TK</div>
          <span className="card__author">Dr. Tino Katsande</span>
          <span className="card__dot" />
          <span>{dateStr}</span>
          {article.readTime && (
            <><span className="card__dot" /><span className="card__read-badge">⏱ {article.readTime} min</span></>
          )}
        </div>
      </div>
    </Link>
  )
}
