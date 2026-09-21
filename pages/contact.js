import { useState } from 'react'
import SEO from '../components/SEO'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <>
      <SEO title="Contact Dr. Tino Katsande" description="Get in touch with Dr. Tino Katsande — questions, corrections, or topic suggestions." canonical="/contact" />

      <div style={{ background: 'linear-gradient(135deg, var(--teal) 0%, #083D3D 100%)', padding: '56px 24px 48px' }}>
        <div className="container--narrow">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: '800', color: 'var(--white)', marginBottom: '12px' }}>Get in touch</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
            Found an error? Have a question not answered in our guides? Want to suggest a topic?
          </p>
          <div style={{ marginTop: '16px', padding: '12px 16px', background: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius)', display: 'inline-block' }}>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>You can also email directly: </span>
            <a href="mailto:contact@tinokatsande.online" style={{ fontSize: '13px', fontWeight: '600', color: '#7EEEDD' }}>contact@tinokatsande.online</a>
          </div>
        </div>
      </div>

      <div className="container--narrow" style={{ padding: '56px 24px 80px' }}>
        <div className="callout callout--warning" style={{ marginBottom: '32px' }}>
          <span className="callout__icon">⚠️</span>
          <div><div className="callout__title">This is not a medical consultation</div>I cannot provide personal medical advice through this form. If you have an urgent health concern, contact your GP or call 111 (UK). For emergencies, call 999.</div>
        </div>

        <div className="contact-grid">
          <div>
            {sent ? (
              <div style={{ background: 'var(--success-bg)', border: '1px solid var(--success-border)', borderRadius: 'var(--radius-lg)', padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>✓</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: '#065F46', marginBottom: '8px' }}>Message received</h2>
                <p style={{ fontSize: '14px', color: '#065F46' }}>Dr. Tino typically responds within 3–5 business days. You can also email contact@tinokatsande.online directly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="form-group"><label htmlFor="name">Your name</label><input type="text" id="name" name="name" value={form.name} onChange={handleChange} required /></div>
                <div className="form-group"><label htmlFor="email">Email address</label><input type="email" id="email" name="email" value={form.email} onChange={handleChange} required /></div>
                <div className="form-group"><label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange} required>
                    <option value="">Select...</option>
                    <option>Question about a health guide</option>
                    <option>I found a medical error</option>
                    <option>Topic suggestion</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" name="message" value={form.message} onChange={handleChange} required /></div>
                <button type="submit" className="btn btn--primary" style={{ width: '100%', padding: '13px' }}>Send message</button>
              </form>
            )}
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-body)', marginBottom: '16px' }}>What to expect</h2>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1rem' }}>
              Dr. Tino reads all messages personally. Response times are typically 3–5 business days. For urgent medical matters, please contact your GP or call 111 — this is not a clinical service.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              You can also email directly at <a href="mailto:contact@tinokatsande.online" style={{ color: 'var(--teal)', fontWeight: '500' }}>contact@tinokatsande.online</a>
            </p>
            {[
              { icon: '✏️', t: 'Medical errors', d: 'If you spot an inaccuracy in any guide, please tell me. I take accuracy extremely seriously and update immediately.' },
              { icon: '💡', t: 'Topic suggestions', d: 'Is there a condition, symptom, or health topic you wish I covered? I build my content plan from reader requests.' },
              { icon: '📖', t: 'Unclear explanations', d: "If a guide didn't fully answer your question, let me know and I'll clarify or write a follow-up." },
            ].map(item => (
              <div key={item.t} style={{ display: 'flex', gap: '12px', marginBottom: '16px', padding: '14px', background: 'var(--off-white)', borderRadius: 'var(--radius)' }}>
                <span style={{ fontSize: '20px' }}>{item.icon}</span>
                <div><div style={{ fontWeight: '600', fontSize: '14px', color: 'var(--text-body)', marginBottom: '4px' }}>{item.t}</div><div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{item.d}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
