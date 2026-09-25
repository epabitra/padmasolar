# Padma Solar Services — Website

A responsive, government-style marketing website for **Padma Solar Services**, an MNRE-registered
solar energy provider. Built with **React 18 + Vite** and **React Router**. Structure and section
flow are modelled on a typical solar-franchise site and rewritten with original content for this
client.

## Stack

- React 18, React Router 6
- Vite 5 (no CSS framework — a hand-built design system in `src/index.css`)
- Zero runtime dependencies beyond React / Router; all icons are inline SVG

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to /dist
npm run preview    # serve the production build
```

## Pages

| Route        | Page        |
|--------------|-------------|
| `/`          | Home        |
| `/about`     | About Us    |
| `/services`  | Services    |
| `/projects`  | Projects    |
| `/faqs`      | FAQs        |
| `/contact`   | Contact Us  |

## Design system

- **Palette:** government blue (`--navy`), Indian-flag saffron (`--saffron`) and green (`--green`),
  on white / light-grey. Tricolour accent strips, serif headings (Noto Serif), sans body (Noto Sans).
- **Accessibility:** skip link, keyboard-focus rings, text-resize (A- / A / A+), high-contrast
  toggle, `prefers-reduced-motion` support, semantic landmarks, ARIA on nav/accordion/forms.
- **Responsive:** CSS grid/flex with breakpoints at 1000px, 860px (mobile nav), 620px.

## Editing content

Almost everything lives in [`src/data/site.js`](src/data/site.js) — company details, navigation,
hero copy, subsidy slabs, services, projects, testimonials and FAQs.

## Images

Hero art lives in `src/assets/`:

- `hero-solar-field.webp` — hero background + Odisha-section photo
- `leadership.webp` — PM / Odisha CM portrait panel in the hero (standard on PM Surya Ghar
  channel-partner sites). Confirm the client is an authorised partner and is comfortable displaying
  it before launch; swap for an official current image if needed.

## Language switch (English / Odia)

The site targets Odisha and is fully bilingual. A two-button **English / ଓଡ଼ିଆ** switch sits in the
top utility bar; it swaps the entire site — every page, heading, card, form label, FAQ, footer and
button — and the choice is remembered in `localStorage` (`padma-lang`). It also sets
`<html lang>` to `en` / `or`.

Implementation:

- `src/i18n.jsx` — `LangProvider` context exposing `lang`, `setLang`, `tt({en,od})` and `t(en,od)`
- `src/data/site.js` — every user-facing string is a `{ en, od }` pair (or `{en:[…], od:[…]}` for lists)
- Components/pages call `const { tt } = useLang()` and render `tt(someField)`

To add or edit copy, change the `{ en, od }` pair in `src/data/site.js` — no component edits needed.

## Before going live — replace placeholders

- [ ] **Phone/email/address are still fake placeholders** (`+91 00000 00000`, `info@padmasolar.example`,
      a placeholder Berhampur address) in `src/data/site.js` — the site is already live at
      padmasolar.in with these. This is now also baked into the SEO structured data (see below), so
      it's actively working against local search rankings until fixed — see the SEO section.
- [ ] **`src/assets/hero-solar-field.webp` is a watermarked Freepik stock photo** ("freepik" text
      tiled across it) — visible on the hero background and the Odisha-focus section on the live
      site. Needs a properly licensed replacement image before this gets more traffic; it isn't used
      as the `og:image` (that's the logo instead) precisely to avoid spreading it further.
- [ ] Confirm rights/authorisation to display the PM/CM leadership image; replace with an official asset
- [ ] Have a native Odia speaker proofread the translated copy in `src/data/site.js`
- [ ] Real project case studies + photographs (`projects` array)
- [ ] Team member names (`src/pages/About.jsx`)
- [ ] Wire the contact form to email / CRM (`src/pages/Contact.jsx` — currently a front-end demo)
- [ ] Exact office location in the map embed (`src/pages/Contact.jsx`)
- [ ] Verify current subsidy figures against the PM Surya Ghar portal

## Logo

`src/assets/logo.jpeg` is the client-supplied logo (sun + panel + swoosh, "Padma Solar Services /
Powering Your Tomorrow"). It's rendered via `src/components/Logo.jsx`:

- **Header** — shown directly (white background, no card needed).
- **Footer** — wrapped in a white rounded card (`badge` prop / `.logo-badge`) since the footer is
  navy and the logo's background is near-white, not transparent.

Favicons are generated crops of the same file (`public/favicon-16.png`, `favicon-32.png`,
`favicon-192.png`, `apple-touch-icon.png`): the tiny 16/32px ones use a tight crop of just the
sun/panel icon (the full lockup is illegible at that size), the larger ones use the full logo. If
the client ever supplies a vector/high-res or transparent-background version, swap
`src/assets/logo.jpeg` and regenerate the favicons from it.

## Deployment — GitHub Pages (configured)

This repo is wired to deploy automatically to **GitHub Pages** on every push to `main`, via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

- Custom domain: **padmasolar.in** (`public/CNAME`) — the site is live here.
- SPA deep links (`/about`, `/contact`, …) work on hard refresh because `npm run build` also
  writes `dist/404.html` (a copy of `dist/index.html`) — see `scripts/copy-404.js`.
- Each route also gets its own pre-rendered `<head>` at `dist/<route>/index.html` for SEO — see
  below, `scripts/generate-seo-shells.js`.
- `public/.nojekyll` disables Jekyll processing.

### One-time setup on GitHub

1. Push this repo to `https://github.com/epabitra/padmasolar.git` (branch `main`).
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Repo **Settings → Pages → Custom domain**: enter `padmasolar.in`, Save.
   Tick **Enforce HTTPS** once the certificate is issued.
4. DNS: an apex/root domain like `padmasolar.in` needs **A records** (not CNAME) pointing at
   GitHub Pages' IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   (add all four). If `www.padmasolar.in` should also work, add a CNAME for `www` →
   `epabitra.github.io` and let GitHub's redirect handle it.

After that, every `git push` to `main` rebuilds and redeploys automatically (watch the **Actions** tab).

### Deploy to a different host instead

It's a plain static SPA — serve `/dist` from any static host. `public/_redirects` covers Netlify
SPA fallback; other hosts need an equivalent "rewrite all to /index.html" rule. If you move off
`padmasolar.in`, update `SITE_URL` in `src/data/seo.js` and `public/{CNAME,sitemap.xml,robots.txt}`.

## SEO

The goal: rank for solar-related searches from Odisha ("rooftop solar Odisha", "PM Surya Ghar
subsidy", "solar company Berhampur/Ganjam", etc.) and produce good link previews when shared.

**What's implemented (code-level):**

- **Per-route metadata.** This is a client-rendered SPA (one `index.html` for every route), which
  normally means every page shares the same `<title>`/description and non-JS crawlers (WhatsApp,
  Facebook, Twitter/X, LinkedIn link-preview bots, plus the "first pass" of search engine crawling)
  see nothing route-specific. Fixed two ways:
  - `src/hooks/useSeo.js` — a hook every page calls that keeps `<title>`, meta description,
    canonical, Open Graph, Twitter Card and JSON-LD in sync with the current route *and* the active
    language, for anyone with JS running (all real visitors, and Google/Bing's rendering pass).
  - `scripts/generate-seo-shells.js` — runs after `vite build` and writes a **pre-rendered
    `<head>`** into `dist/index.html`, `dist/about/index.html`, `dist/services/index.html`, etc.
    (same JS bundle, just a smarter shell per URL) so link-preview bots and non-JS crawlers get
    the correct title/description/image immediately, no JS execution needed. Always uses the
    **English** copy (see the comment at the top of that file for why) — the client-side hook takes
    over and matches the visitor's actual language once the page loads.
  - Single source of truth for both: `src/data/seo.js`.
- **Structured data (JSON-LD):** `LocalBusiness`/`HomeAndConstructionBusiness` (sitewide, built
  from the *same* `company` object in `src/data/site.js` — fixing the placeholder contact details
  there automatically fixes the schema), `FAQPage` (home preview + full `/faqs`, good for FAQ rich
  results), `BreadcrumbList` (every inner page).
- **`public/sitemap.xml`** (all 6 routes) + **`public/robots.txt`** pointing to it.
- **`public/site.webmanifest`** + generated favicons (see the Logo section above).
- **`public/og-image.jpg`** (1200×630, generated from the logo — not the watermarked hero photo,
  see the placeholders checklist) for link previews.
- `<html lang>` reflects the active language; each page has exactly one `<h1>` via `PageHero`.

**What code alone cannot do** — ranking #1 for local searches depends much more on these than on
markup:
1. **Fix the placeholder NAP data first** (phone/email/address in `src/data/site.js`). Search
   engines cross-check your name/address/phone across the web; fake data actively hurts local
   trust signals, and the JSON-LD above is only as good as this data.
2. **Google Search Console**: verify `padmasolar.in`, submit `https://padmasolar.in/sitemap.xml`,
   monitor indexing/Core Web Vitals. Also worth doing in **Bing Webmaster Tools**.
3. **Google Business Profile**: create/claim one for Padma Solar Services with the *real* address
   and phone, matching the site exactly, get it verified, collect reviews. This is typically the
   single biggest factor for "solar company near me / in Odisha"-style local search.
4. **Backlinks & citations**: listings on JustDial, IndiaMART, Sulekha, local Odisha business
   directories, and genuine backlinks all build authority that no on-page change can substitute for.
5. **Content**: the existing FAQ/subsidy content is already good keyword coverage; consider adding
   a blog/news section over time (district-specific solar guides, subsidy update posts) for
   long-tail queries.

**After deploying:** spot-check that GitHub Pages actually serves the pre-rendered shells — e.g.
`curl -I https://padmasolar.in/about` should return the About page's own `<title>`, not the
homepage's (this relies on GitHub Pages resolving `/about` → `/about/index.html`, standard static
hosting behaviour, but worth confirming once live). Also test link previews with
[Facebook's Sharing Debugger](https://developers.facebook.com/tools/debug/) and validate structured
data with [Google's Rich Results Test](https://search.google.com/test/rich-results).
