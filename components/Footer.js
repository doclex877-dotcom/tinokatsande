// Footer
import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-name">Dr. Tino <span>Katsande</span></div>
            <p className="footer__brand-desc">Evidence-based health guides written in plain English. Because you deserve to understand your own body.</p>
          </div>
          <div>
            <div className="footer__col-title">Topics</div>
            <ul className="footer__links">
              <li><Link href="/category/chronic-conditions">Chronic Conditions</Link></li>
              <li><Link href="/category/mental-health">Mental Health</Link></li>
              <li><Link href="/category/symptoms">Symptoms Guide</Link></li>
              <li><Link href="/category/womens-health">Women's Health</Link></li>
              <li><Link href="/search?q=nutrition">Nutrition</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer__col-title">Conditions</div>
            <ul className="footer__links">
              <li><Link href="/tag/diabetes">Diabetes</Link></li>
              <li><Link href="/tag/hypertension">Hypertension</Link></li>
              <li><Link href="/tag/anxiety">Anxiety</Link></li>
              <li><Link href="/tag/depression">Depression</Link></li>
              <li><Link href="/tag/sickle-cell">Sickle Cell</Link></li>
              <li><Link href="/tag/chronic-kidney-disease">Kidney Disease</Link></li>
              <li><Link href="/tag/stroke">Stroke</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer__col-title">Site</div>
            <ul className="footer__links">
              <li><Link href="/about">About Dr. Tino</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
              <li><Link href="/medical-disclaimer">Medical Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">© {year} tinokatsande.com · All rights reserved · The content on this site is for informational purposes only and does not constitute medical advice.</p>
          <div className="footer__compliance">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/medical-disclaimer">Disclaimer</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// CookieBanner
import { useState, useEffect } from 'react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { if (!localStorage.getItem('tk_cookie')) setVisible(true) }, [])
  const accept = () => { localStorage.setItem('tk_cookie', 'accepted'); setVisible(false) }
  const decline = () => { localStorage.setItem('tk_cookie', 'declined'); setVisible(false) }
  if (!visible) return null
  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <p className="cookie-banner__text">
        We use cookies to personalise content and ads (including Google AdSense) and analyse traffic.
        By clicking "Accept" you agree. <Link href="/privacy-policy">Privacy Policy</Link>
      </p>
      <div className="cookie-banner__actions">
        <button className="btn btn--outline" onClick={decline}>Decline</button>
        <button className="btn btn--primary" onClick={accept}>Accept</button>
      </div>
    </div>
  )
}
