import Link from 'next/link'
import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO title="About Dr. Tino Katsande" description="Dr. Tino Katsande is a Zimbabwe-born GP based in the UK writing evidence-based health guides in plain English." canonical="/about" />
      <div style={{ background: 'linear-gradient(135deg, var(--teal) 0%, #083D3D 100%)', padding: '64px 24px 56px' }}>
        <div className="container--narrow">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,44px)', fontWeight: '800', color: 'var(--white)', marginBottom: '16px', lineHeight: '1.2' }}>
            The doctor who explains<br /><em style={{ fontStyle: 'italic', color: '#7EEEDD' }}>what they didn't have time to tell you</em>
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.7' }}>A GP. A writer. Someone who got tired of patients leaving consultations more confused than when they walked in.</p>
        </div>
      </div>
      <div className="container--narrow" style={{ padding: '56px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '32px', alignItems: 'start', marginBottom: '48px' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '800', color: 'var(--white)' }}>TK</div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '700', color: 'var(--text-body)', marginBottom: '4px' }}>Dr. Tino Katsande, MB ChB</h2>
            <p style={{ fontSize: '13px', color: 'var(--teal)', fontWeight: '500', marginBottom: '16px' }}>General Practitioner · NHS · London, UK</p>
            {['I trained in medicine in the UK after growing up in Zimbabwe. In over a decade of general practice, the thing that has struck me most consistently is how little time doctors have to actually explain things.', 'A patient comes in. They have worrying symptoms. I examine them, make a diagnosis, write a prescription, and have 8 minutes before the next patient. There is simply no time to explain what this condition actually means for their life — what causes it, what makes it worse, what the medication is really doing, what warning signs to watch for.', 'They leave with a prescription and a leaflet. They go home and Google their diagnosis at midnight and find something that frightens them. Or they find something wrong. Or they find something designed to sell them a supplement.', 'TinoKatsande.com is my attempt to fix that. Long, careful, evidence-based explanations — written the way I would explain things to a friend who happens to have a medical question. Honest about uncertainty. Referenced against real sources. Updated when guidelines change.', 'My particular focus is conditions that disproportionately affect Black and African patients. Hypertension. Type 2 diabetes. Sickle cell. Fibroids. Mental health in communities where it is still stigmatised. These are underserved in mainstream health media and I intend to change that.'].map((p, i) => (
              <p key={i} style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--text-body)', marginBottom: '1rem' }}>{p}</p>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '700', color: 'var(--text-body)', marginBottom: '20px' }}>Editorial standards</h2>
          {['Every article on this site is written or personally reviewed by me. Every factual claim is referenced against a peer-reviewed source, NHS guidance, WHO guidelines, or equivalent official source. I include the sources at the bottom of every article.', 'When medical evidence is uncertain or contested, I say so. When guidelines have changed recently, I note it. Every article displays the date it was last reviewed.', 'This site does not accept paid content, sponsored articles, or payments from pharmaceutical companies. It does display advertising through Google AdSense. My editorial decisions are not influenced by advertisers.'].map((p, i) => (
              <p key={i} style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--text-body)', marginBottom: '1rem' }}>{p}</p>
          ))}
        </div>
      </div>
    </>
  )
}
