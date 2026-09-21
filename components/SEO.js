import Head from 'next/head'

export default function SEO({
  title,
  description,
  canonical,
  article = false,
  publishedTime,
  ogImage,
  author = 'Dr. Tino Katsande',
}) {
  const siteName = 'Dr. Tino Katsande — Health & Wellness'
  const baseUrl = 'https://tinokatsande.online'
  const defaultDesc = 'Evidence-based health guides written in plain English by Dr. Tino Katsande — chronic conditions, mental health, symptoms, and women\'s health.'
  const defaultImage = `${baseUrl}/images/hero-bg.webp`

  const fullTitle = title ? `${title} | Dr. Tino Katsande` : siteName
  const metaDesc = description || defaultDesc
  const metaImage = ogImage ? `${baseUrl}${ogImage}` : defaultImage
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl

  // Schema.org JSON-LD
  const schema = article ? {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    'name': title,
    'description': metaDesc,
    'url': canonicalUrl,
    'image': metaImage,
    'datePublished': publishedTime,
    'dateModified': publishedTime,
    'author': {
      '@type': 'Person',
      'name': 'Dr. Tino Katsande',
      'jobTitle': 'General Practitioner',
      'worksFor': { '@type': 'Organization', 'name': 'NHS' },
      'description': 'Zimbabwe-born NHS General Practitioner based in London with over 12 years of clinical experience.',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'TinoKatsande.online',
      'url': baseUrl,
    },
    'medicalAudience': { '@type': 'MedicalAudience', 'audienceType': 'Patient' },
    'reviewedBy': {
      '@type': 'Person',
      'name': 'Dr. Tino Katsande',
      'jobTitle': 'General Practitioner',
    },
  } : {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': siteName,
    'url': baseUrl,
    'description': defaultDesc,
    'publisher': {
      '@type': 'Person',
      'name': 'Dr. Tino Katsande',
      'jobTitle': 'General Practitioner',
    },
  }

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      {article && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {article && <meta property="article:author" content={author} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={metaImage} />

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* AdSense */}
      <meta name="google-adsense-account" content="ca-pub-2225780585720003" />
    </Head>
  )
}
