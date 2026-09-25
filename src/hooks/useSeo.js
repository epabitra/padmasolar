import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, LOCALE_EN, LOCALE_OD } from '../data/seo'

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

let jsonLdCounter = 0

/**
 * Keeps <title>, meta description, canonical, Open Graph, Twitter Card and
 * (optionally) JSON-LD structured data in sync with the current route and
 * language. This covers Google's JS-rendering pass and anyone browsing with
 * client-side navigation; the build-time script
 * (scripts/generate-seo-shells.js) covers the same routes for crawlers/bots
 * that don't execute JavaScript, using the English copy defined once in
 * src/data/seo.js.
 */
export default function useSeo({ title, description, path, jsonLd, noindex = false }) {
  const { tt, lang } = useLang()
  const location = useLocation()

  useEffect(() => {
    const resolvedTitle = tt(title)
    const resolvedDesc = tt(description)
    const url = `${SITE_URL}${path}`

    document.title = resolvedTitle
    upsertMeta('name', 'description', resolvedDesc)
    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
    upsertLink('canonical', url)

    upsertMeta('property', 'og:title', resolvedTitle)
    upsertMeta('property', 'og:description', resolvedDesc)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:image', DEFAULT_OG_IMAGE)
    upsertMeta('property', 'og:locale', lang === 'od' ? LOCALE_OD : LOCALE_EN)

    upsertMeta('name', 'twitter:title', resolvedTitle)
    upsertMeta('name', 'twitter:description', resolvedDesc)
    upsertMeta('name', 'twitter:image', DEFAULT_OG_IMAGE)

    // JSON-LD: remove any tags this hook previously added, then add the current set
    document.head.querySelectorAll('script[data-seo-jsonld="page"]').forEach((n) => n.remove())
    const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []
    blocks.forEach((data) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-seo-jsonld', 'page')
      script.id = `seo-jsonld-${jsonLdCounter++}`
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
    })
  }, [title, description, path, jsonLd, noindex, tt, lang, location.pathname])
}
