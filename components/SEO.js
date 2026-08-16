import Head from 'next/head'
import Script from 'next/script'

export default function SEO({ title, description, canonical, article, publishedTime }) {
  const siteName = 'Dr. Tino Katsande'
  const siteUrl = 'https://tinokatsande.online'
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — Health & Wellness Guides`
  const metaDesc = description || "Evidence-based health guides written in plain English by Dr. Tino Katsande — chronic conditions, mental health, symptoms, and women's health."
  const url = canonical ? `${siteUrl}${canonical}` : siteUrl

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />
        <meta property="og:type" content={article ? 'article' : 'website'} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={siteName} />
        {article && publishedTime && <meta property="article:published_time" content={publishedTime} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="google-adsense-account" content="ca-pub-2225780585720003" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2225780585720003"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  )
}
