import { useState } from 'react'
import SEO from '../components/SEO'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <>
      <SEO title="Contact Dr. Tino Katsande" description="Ask a health question or get in touch with Dr. Tino Katsande." canonical="/contact" />
      <div style={{ background: 'linear-gradient(135deg, var(--teal) 0%, #083D3D 100%)', padding: '56px 24px 48px' }}>
        <div className="container--narrow">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: '800', color: 'var(--white)', marginBottom: '12px' }}>Ask Dr. Tino</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>A question not answered by our guides? Found an error? Want to suggest a topic? I read everything.</p>
        </div>
      </div>
      <div className="container--narrow" style={{ padding: '56px 24px 80px' }}>
        <div className="callout callout--warning" style={{ marginBottom: '32px' }}>
          <span className="callout__icon">⚠️</span>
          <div><div className="callout__title">This is not a medical consultation</div>I cannot provide personal medical advice through this form. If you have an urgent health concern, please contact your GP or call 111 (UK). For emergencies, call 999.</div>
        </div>
        <div className="contact-grid">
          <div>
            {sent ? (
              <div style={{ background: 'var(--success-bg)', border: '1px solid var(--success-border)', borderRadius: 'var(--radius-lg)', padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>✓</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: '#065F46', marginBottom: '8px' }}>Message received</h2>
                <p style={{ fontSize: '14px', color: '#065F46' }}>Dr. Tino typically responds within 3–5 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="form-group"><label htmlFor="name">Your name</label><input type="text" id="name" name="name" value={form.name} onChange={handleChange} required /></div>
                <div className="form-group"><label htmlFor="email">Email address</label><input type="email" id="email" name="email" value={form.email} onChange={handleChange} required /></div>
                <div className="form-group"><label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange} required>
                    <option value="">Select...</option>
                    <option>Question about a health guide</option>
                    <option>I found an error</option>
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
            {[{ icon: '✏️', t: 'Corrections', d: 'If you spot a medical error or outdated information, please tell me — I take accuracy seriously and update immediately.' }, { icon: '💡', t: 'Topic suggestions', d: 'Is there a condition or symptom you wish I covered? I build my content plan largely from reader requests.' }, { icon: '📖', t: 'General questions', d: 'If a guide didn\'t fully answer your question, let me know and I will either clarify or write a follow-up.' }].map(i => (
              <div key={i.t} style={{ display: 'flex', gap: '12px', marginBottom: '16px', padding: '14px', background: 'var(--off-white)', borderRadius: 'var(--radius)' }}>
                <span style={{ fontSize: '20px' }}>{i.icon}</span>
                <div><div style={{ fontWeight: '600', fontSize: '14px', color: 'var(--text-body)', marginBottom: '4px' }}>{i.t}</div><div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{i.d}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
