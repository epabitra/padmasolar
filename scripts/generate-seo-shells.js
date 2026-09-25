// Generates a per-route static HTML shell in dist/<route>/index.html (and
// overwrites the Home entry straight into dist/index.html) with route-specific
// <title>, meta description, canonical, Open Graph, Twitter Card and JSON-LD.
//
// Why: this is a client-rendered React SPA (one shared index.html for every
// route). Search engines that execute JavaScript (Google, modern Bing) will
// eventually see the right content via src/hooks/useSeo.js, but anything that
// doesn't run JS - link-preview bots (WhatsApp, Facebook, Twitter/X,
// LinkedIn, Slack), simpler crawlers, and the "first wave" of Google's own
// indexing - only ever sees the raw HTML returned for that URL. Pre-baking a
// correct <head> per route, while keeping the exact same JS bundle for the
// actual app, gets both without a full SSR rewrite.
//
// English is used for this static shell (see src/data/seo.js) even though
// the app defaults to Odia for real visitors: it's the safer bet for broad
// keyword coverage in search, and src/hooks/useSeo.js re-syncs the <head> to
// whichever language the visitor is actually using once the JS boots.
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import {
  routes,
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  buildOrganizationJsonLd,
  buildFaqJsonLd,
  buildBreadcrumbJsonLd
} from '../src/data/seo.js'
import { faqs, pageMeta } from '../src/data/site.js'

const DIST = path.resolve('dist')
const TEMPLATE_PATH = path.join(DIST, 'index.html')
const START = '<!-- SEO:HEAD:START -->'
const END = '<!-- SEO:HEAD:END -->'

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function escapeText(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function jsonLdScript(data) {
  // Defensively neutralise "</script>" so the JSON can never prematurely
  // close the surrounding <script> tag when serialised into raw HTML.
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  return `<script type="application/ld+json">${json}</script>`
}

function buildHead({ title, description, url, jsonLdBlocks, noindex = false }) {
  const t = escapeText(title)
  const d = escapeAttr(description)
  const lines = [
    START,
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow'}" />`,
    `<link rel="canonical" href="${url}" />`,
    '',
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${escapeAttr(SITE_NAME)}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${DEFAULT_OG_IMAGE}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta property="og:locale" content="en_IN" />',
    '<meta property="og:locale:alternate" content="or_IN" />',
    '',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${DEFAULT_OG_IMAGE}" />`,
    '',
    '<meta name="geo.region" content="IN-OR" />',
    '<meta name="geo.placename" content="Odisha" />',
    '',
    ...jsonLdBlocks.map(jsonLdScript),
    END
  ]
  return lines.join('\n    ')
}

async function main() {
  if (!existsSync(TEMPLATE_PATH)) {
    console.error('generate-seo-shells: dist/index.html not found - run "vite build" first')
    process.exit(1)
  }
  const template = await readFile(TEMPLATE_PATH, 'utf8')
  const startIdx = template.indexOf(START)
  const endIdx = template.indexOf(END)
  if (startIdx === -1 || endIdx === -1) {
    console.error('generate-seo-shells: SEO head markers not found in dist/index.html')
    process.exit(1)
  }
  const before = template.slice(0, startIdx)
  const after = template.slice(endIdx + END.length)

  const orgJsonLd = buildOrganizationJsonLd()

  const pages = [
    {
      key: 'home',
      route: routes.home,
      crumb: null,
      jsonLdBlocks: [orgJsonLd, buildFaqJsonLd(faqs.slice(0, 5))]
    },
    {
      key: 'about',
      route: routes.about,
      crumb: pageMeta.about.crumb.en,
      jsonLdBlocks: [orgJsonLd]
    },
    {
      key: 'services',
      route: routes.services,
      crumb: pageMeta.services.crumb.en,
      jsonLdBlocks: [orgJsonLd]
    },
    {
      key: 'projects',
      route: routes.projects,
      crumb: pageMeta.projects.crumb.en,
      jsonLdBlocks: [orgJsonLd]
    },
    {
      key: 'faqs',
      route: routes.faqs,
      crumb: pageMeta.faqs.crumb.en,
      jsonLdBlocks: [orgJsonLd, buildFaqJsonLd(faqs)]
    },
    {
      key: 'contact',
      route: routes.contact,
      crumb: pageMeta.contact.crumb.en,
      jsonLdBlocks: [orgJsonLd]
    }
  ]

  for (const page of pages) {
    const url = `${SITE_URL}${page.route.path}`
    const jsonLdBlocks = [...page.jsonLdBlocks]
    if (page.crumb) {
      jsonLdBlocks.push(
        buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: page.crumb, path: page.route.path }
        ])
      )
    }

    const head = buildHead({
      title: page.route.title.en,
      description: page.route.description.en,
      url,
      jsonLdBlocks
    })
    const html = before + head + after

    if (page.route.path === '/') {
      await writeFile(TEMPLATE_PATH, html, 'utf8')
      console.log(`generate-seo-shells: wrote dist/index.html (${page.key})`)
    } else {
      const dir = path.join(DIST, page.route.path.replace(/^\//, ''))
      await mkdir(dir, { recursive: true })
      await writeFile(path.join(dir, 'index.html'), html, 'utf8')
      console.log(`generate-seo-shells: wrote dist${page.route.path}/index.html`)
    }
  }
}

main()
