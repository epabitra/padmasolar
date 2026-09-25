// SEO metadata: one source of truth used by (a) the client-side useSeo hook
// (src/hooks/useSeo.js, bilingual via tt()) and (b) the build-time static-shell
// generator (scripts/generate-seo-shells.js, which always renders the
// English copy into the crawlable HTML - see that script for why).
import { company, faqs as allFaqs } from './site.js'

export const SITE_URL = 'https://padmasolar.in'
export const SITE_NAME = 'Padma Solar Services'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`
export const LOCALE_EN = 'en_IN'
export const LOCALE_OD = 'or_IN'

// district / service-area keywords reused in descriptions and JSON-LD areaServed
export const SERVICE_AREAS = [
  'Berhampur',
  'Ganjam',
  'Chatrapur',
  'Aska',
  'Gopalpur',
  'Odisha'
]

export const routes = {
  home: {
    path: '/',
    title: {
      en: 'Padma Solar Services | Solar Panel Installation in Odisha',
      od: 'ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ | ଓଡ଼ିଶାରେ ସୌର ପ୍ୟାନେଲ ସ୍ଥାପନ'
    },
    description: {
      en: 'MNRE-registered solar installer in Odisha. Rooftop solar panels, PM Surya Ghar subsidy up to ₹78,000, net metering & free site survey in Berhampur, Ganjam and across Odisha.',
      od: 'ଓଡ଼ିଶାର MNRE-ପଞ୍ଜୀକୃତ ସୌର ସ୍ଥାପନକାରୀ। ଛାତ ଉପର ସୌର ପ୍ୟାନେଲ, ପିଏମ ସୂର୍ଯ୍ୟ ଘର ସବସିଡି ₹୭୮,୦୦୦ ପର୍ଯ୍ୟନ୍ତ, ନେଟ୍ ମିଟରିଂ ଓ ମାଗଣା ସର୍ଭେ - ବ୍ରହ୍ମପୁର, ଗଞ୍ଜାମ ଓ ସମଗ୍ର ଓଡ଼ିଶାରେ।'
    }
  },
  about: {
    path: '/about',
    title: {
      en: 'About Us | Solar Company in Odisha - Padma Solar Services',
      od: 'ଆମ ବିଷୟରେ | ଓଡ଼ିଶାର ସୌର ପ୍ରତିଷ୍ଠାନ - ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ'
    },
    description: {
      en: 'Padma Solar Services is a locally rooted, MNRE-certified solar EPC company installing rooftop solar systems for homes, businesses and institutions across Odisha since 2013.',
      od: 'ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ ୨୦୧୩ ମସିହାରୁ ଓଡ଼ିଶାର ଘର, ବ୍ୟବସାୟ ଓ ପ୍ରତିଷ୍ଠାନ ପାଇଁ ଛାତ ଉପର ସୌର ସିଷ୍ଟମ ସ୍ଥାପନ କରୁଥିବା ଏକ ସ୍ଥାନୀୟ, MNRE-ପ୍ରମାଣିତ ସୌର EPC ପ୍ରତିଷ୍ଠାନ।'
    }
  },
  services: {
    path: '/services',
    title: {
      en: 'Solar Services in Odisha - Residential, Commercial & Govt Solar',
      od: 'ଓଡ଼ିଶାରେ ସୌର ସେବା - ଘରୋଇ, ବାଣିଜ୍ୟିକ ଓ ସରକାରୀ ସୌର'
    },
    description: {
      en: 'Residential rooftop solar, commercial & industrial solar, government/institutional projects and solar products & AMC in Odisha, with full PM Surya Ghar subsidy assistance.',
      od: 'ଓଡ଼ିଶାରେ ଘରୋଇ ଛାତ ସୌର, ବାଣିଜ୍ୟିକ ଓ ଶିଳ୍ପ ସୌର, ସରକାରୀ/ପ୍ରାତିଷ୍ଠାନିକ ପ୍ରକଳ୍ପ ଏବଂ ସୌର ଉତ୍ପାଦ ଓ AMC, ସମ୍ପୂର୍ଣ୍ଣ ପିଏମ ସୂର୍ଯ୍ୟ ଘର ସବସିଡି ସହାୟତା ସହିତ।'
    }
  },
  projects: {
    path: '/projects',
    title: {
      en: 'Solar Projects in Odisha | Padma Solar Services Case Studies',
      od: 'ଓଡ଼ିଶାରେ ସୌର ପ୍ରକଳ୍ପ | ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ କେସ ଷ୍ଟଡି'
    },
    description: {
      en: 'Rooftop and ground-mount solar installations completed by Padma Solar Services across Berhampur, Chatrapur, Ganjam, Aska and other districts of Odisha.',
      od: 'ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ ଦ୍ୱାରା ବ୍ରହ୍ମପୁର, ଛତ୍ରପୁର, ଗଞ୍ଜାମ, ଆସିକା ଓ ଓଡ଼ିଶାର ଅନ୍ୟ ଜିଲ୍ଲାରେ ସମ୍ପନ୍ନ ଛାତ ଉପର ଓ ଭୂମି-ମାଉଣ୍ଟ ସୌର ସ୍ଥାପନ।'
    }
  },
  faqs: {
    path: '/faqs',
    title: {
      en: 'Solar Subsidy & Installation FAQs | Padma Solar Services Odisha',
      od: 'ସୌର ସବସିଡି ଓ ସ୍ଥାପନ ପ୍ରଶ୍ନ | ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ ଓଡ଼ିଶା'
    },
    description: {
      en: 'Common questions about the PM Surya Ghar subsidy, net metering, solar panel warranty, installation time and cost for rooftop solar in Odisha, answered.',
      od: 'ପିଏମ ସୂର୍ଯ୍ୟ ଘର ସବସିଡି, ନେଟ୍ ମିଟରିଂ, ସୌର ପ୍ୟାନେଲ ୱାରେଣ୍ଟି, ସ୍ଥାପନ ସମୟ ଓ ଖର୍ଚ୍ଚ ସମ୍ପର୍କରେ ସାଧାରଣ ପ୍ରଶ୍ନର ଉତ୍ତର।'
    }
  },
  contact: {
    path: '/contact',
    title: {
      en: 'Contact Us | Free Solar Site Survey in Odisha - Padma Solar Services',
      od: 'ଯୋଗାଯୋଗ | ଓଡ଼ିଶାରେ ମାଗଣା ସୌର ସର୍ଭେ - ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ'
    },
    description: {
      en: 'Contact Padma Solar Services for a free rooftop solar site survey, subsidy eligibility check and quotation. Serving Berhampur, Ganjam and all of Odisha.',
      od: 'ମାଗଣା ସୌର ସର୍ଭେ, ସବସିଡି ଯୋଗ୍ୟତା ଯାଞ୍ଚ ଓ ମୂଲ୍ୟ ଉଦ୍ଧୃତି ପାଇଁ ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ।'
    }
  }
}

export const notFoundSeo = {
  title: { en: 'Page Not Found | Padma Solar Services', od: 'ପୃଷ୍ଠା ମିଳିଲା ନାହିଁ | ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ' },
  description: {
    en: 'The page you requested could not be found on the Padma Solar Services website.',
    od: 'ଆପଣ ଖୋଜୁଥିବା ପୃଷ୍ଠା ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ ୱେବସାଇଟରେ ମିଳିଲା ନାହିଁ।'
  }
}

// ---- JSON-LD builders (plain data in, plain object out - safe for both
// the browser hook and the Node build script to JSON.stringify) ----

export function buildOrganizationJsonLd() {
  const sameAs = Object.values(company.social || {}).filter((u) => u && u !== '#')
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: company.name,
    alternateName: company.nameOd,
    description:
      'MNRE-registered solar energy company providing rooftop solar installation, PM Surya Ghar subsidy assistance and net-metering support across Odisha, India.',
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.jpg`,
    image: `${SITE_URL}/og-image.jpg`,
    telephone: company.phonePrimary,
    email: company.email,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.en[0],
      addressLocality: 'Berhampur',
      addressRegion: 'Odisha',
      postalCode: '760001',
      addressCountry: 'IN'
    },
    areaServed: SERVICE_AREAS.map((name) => ({ '@type': 'AdministrativeArea', name })),
    sameAs
  }
}

export function buildFaqJsonLd(faqs = allFaqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q.en,
      acceptedAnswer: { '@type': 'Answer', text: f.a.en }
    }))
  }
}

export function buildBreadcrumbJsonLd(items) {
  // items: [{ name, path }] in order, path relative ('/', '/about', ...)
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`
    }))
  }
}
