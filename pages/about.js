import Link from 'next/link'
import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="About Dr. Tino Katsande"
        description="Dr. Tino Katsande is a Zimbabwe-born NHS General Practitioner based in London, UK, with over a decade of clinical experience writing evidence-based health guides."
        canonical="/about"
      />
      <div style={{ background: 'linear-gradient(135deg, var(--teal) 0%, #083D3D 100%)', padding: '64px 24px 56px' }}>
        <div className="container--narrow">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,44px)', fontWeight: '800', color: 'var(--white)', marginBottom: '16px', lineHeight: '1.2' }}>
            The doctor who explains<br /><em style={{ fontStyle: 'italic', color: '#7EEEDD' }}>what they didn't have time to tell you</em>
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.7' }}>NHS General Practitioner · London, UK · MB ChB · Over 12 years of clinical practice</p>
        </div>
      </div>

      <div className="container--narrow" style={{ padding: '56px 24px 80px' }}>

        {/* Credentials bar */}
        <div style={{ background: 'var(--teal-light)', border: '1px solid var(--teal-mid)', borderRadius: 'var(--radius-lg)', padding: '20px 24px', marginBottom: '40px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', textAlign: 'center' }}>
          {[
            { label: 'Qualification', value: 'MB ChB' },
            { label: 'Registration', value: 'GMC Registered Physician' },
            { label: 'Experience', value: '12+ Years NHS' },
          ].map(item => (
            <div key={item.label}>
              <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '4px' }}>{item.label}</div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-body)' }}>{item.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '32px', alignItems: 'start', marginBottom: '48px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '800', color: 'var(--white)' }}>TK</div>
            <div style={{ fontWeight: '600', fontSize: '15px', color: 'var(--text-body)' }}>Dr. Tino Katsande</div>
            <div style={{ fontSize: '12px', color: 'var(--teal)', fontWeight: '500', marginTop: '4px' }}>MB ChB, GMC Registered</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>NHS GP · London, UK</div>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-body)', marginBottom: '16px' }}>About Dr. Tino</h2>
            {[
              "I am a Zimbabwe-born General Practitioner working within the NHS in London. I completed my medical degree (MB ChB) and have been practising clinical medicine for over 12 years, working across primary care and community health settings in the United Kingdom.",
              "In over a decade of general practice, the thing that has struck me most consistently is how little time doctors have to actually explain things. A patient comes in. They have worrying symptoms. I examine them, make a diagnosis, write a prescription — and have 8 minutes before the next patient. There is simply no time to explain what this condition actually means for their life.",
              "TinoKatsande.online is my attempt to fix that. Long, careful, evidence-based explanations — written the way I would explain things to a patient I had a full hour with. Honest about uncertainty. Referenced against real NHS and peer-reviewed sources. Updated when guidelines change.",
              "My particular focus is conditions that disproportionately affect Black and African patients — hypertension, diabetes, sickle cell, fibroids, and mental health in communities where stigma remains high. These are underserved in mainstream health media and I am determined to change that."
            ].map((p, i) => (
              <p key={i} style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--text-body)', marginBottom: '1rem' }}>{p}</p>
            ))}
          </div>
        </div>

        {/* Editorial standards */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-body)', marginBottom: '16px' }}>Editorial standards</h2>
          {[
            "Every article on this site is written or personally reviewed by me as a licensed medical professional. Every factual claim is referenced against a peer-reviewed source, NHS guidance, NICE guidelines, WHO recommendations, or equivalent official source.",
            "When medical evidence is uncertain or contested, I say so explicitly. When guidelines have changed recently, I note it. Every article displays the date it was last reviewed. I do not accept sponsored content, paid placements, or payments from pharmaceutical companies.",
            "This site displays advertising through Google AdSense. My editorial decisions are not influenced by advertisers. The medical disclaimer on every page reflects the genuine limitations of general health information versus personalised medical advice."
          ].map((p, i) => (
            <p key={i} style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--text-body)', marginBottom: '1rem' }}>{p}</p>
          ))}
        </div>

        {/* Contact CTA */}
        <div style={{ background: 'var(--teal)', borderRadius: 'var(--radius-lg)', padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--white)', marginBottom: '4px' }}>Have a question or found an error?</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>I read every message. You can also email directly: <strong style={{ color: '#7EEEDD' }}>contact@tinokatsande.online</strong></div>
          </div>
          <Link href="/contact" className="btn btn--primary" style={{ background: 'var(--white)', color: 'var(--teal)', whiteSpace: 'nowrap' }}>Get in touch</Link>
        </div>

      </div>
    </>
  )
}
