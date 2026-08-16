import SEO from '../components/SEO'
export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" canonical="/privacy-policy" />
      <div className="container--narrow compliance-page">
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: June 2025</p>
        <p>This Privacy Policy explains how tinokatsande.online collects and uses information when you visit our website. By using the site you agree to this policy.</p>
        <h2>Information we collect</h2>
        <p>We collect usage data automatically via Google Analytics (pages visited, browser type, device, IP address) and cookie preference data. If you use our contact form, we collect your name, email, and message content.</p>
        <h2>Google AdSense and advertising</h2>
        <p>We use Google AdSense to display advertisements. Google uses cookies to serve personalised ads based on your browsing history. You can opt out at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>. For more information: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">How Google uses data</a>.</p>
        <h2>Cookies</h2>
        <p>We use essential cookies (cookie consent preference), analytics cookies (Google Analytics), and advertising cookies (Google AdSense). You can manage cookies through your browser settings.</p>
        <h2>Third-party services</h2>
        <p>We use Google Analytics, Google AdSense, and Vercel (hosting). We do not sell your data to any third party.</p>
        <h2>Your rights (GDPR)</h2>
        <p>If you are in the EEA or UK, you have the right to access, rectify, erase, and port your personal data. Contact us via our <a href="/contact">contact page</a> to exercise these rights.</p>
        <h2>Contact</h2>
        <p>For privacy questions, use our <a href="/contact">contact page</a>.</p>
      </div>
    </>
  )
}
