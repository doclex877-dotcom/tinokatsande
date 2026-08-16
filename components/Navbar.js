import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Navbar() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/category/chronic-conditions', label: 'Chronic Conditions' },
    { href: '/category/mental-health', label: 'Mental Health' },
    { href: '/category/symptoms', label: 'Symptoms' },
    { href: '/category/womens-health', label: "Women's Health" },
    { href: '/about', label: 'About Dr. Tino' },
  ]

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar__inner">
        <Link href="/" className="navbar__logo" aria-label="Tino Katsande Health home">
          <div className="navbar__logo-icon">TK</div>
          <div className="navbar__logo-text">
            <div className="navbar__logo-name">Dr. Tino <span>Katsande</span></div>
            <div className="navbar__logo-sub">Health & Wellness</div>
          </div>
        </Link>

        <ul className="navbar__nav">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={router.asPath === l.href || router.asPath.startsWith(l.href + '/') ? 'active' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
          <li><Link href="/contact" className="navbar__cta">Ask Dr. Tino</Link></li>
        </ul>

        <button className="navbar__mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div style={{ background: 'var(--white)', borderTop: '1px solid var(--border)', padding: '12px 24px' }}>
          {[...links, { href: '/contact', label: 'Ask Dr. Tino' }].map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '10px 0', fontSize: '15px', color: 'var(--text-mid)', borderBottom: '1px solid var(--border)' }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
