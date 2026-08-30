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

- [ ] Phone numbers, email, address, helpline, working hours, social links (`src/data/site.js`)
- [ ] Confirm rights/authorisation to display the PM/CM leadership image; replace with an official asset
- [ ] Have a native Odia speaker proofread the translated copy in `src/data/site.js`
- [ ] Real project case studies + photographs (`projects` array)
- [ ] Team member names (`src/pages/About.jsx`)
- [ ] Wire the contact form to email / CRM (`src/pages/Contact.jsx` — currently a front-end demo)
- [ ] Exact office location in the map embed (`src/pages/Contact.jsx`)
- [ ] Verify current subsidy figures against the PM Surya Ghar portal
- [ ] Replace the inline SVG brand mark (`src/components/Logo.jsx`) with a real logo if available

## Deployment — GitHub Pages (configured)

This repo is wired to deploy automatically to **GitHub Pages** on every push to `main`, via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

- Custom domain: **padmasolar.epabitra.com** (`public/CNAME`)
- SPA deep links (`/about`, `/contact`, …) work on hard refresh because `npm run build` also
  writes `dist/404.html` (a copy of `index.html`) — see `scripts/copy-404.js`.
- `public/.nojekyll` disables Jekyll processing.

### One-time setup on GitHub

1. Push this repo to `https://github.com/epabitra/padmasolar.git` (branch `main`).
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Repo **Settings → Pages → Custom domain**: enter `padmasolar.epabitra.com`, Save.
   Tick **Enforce HTTPS** once the certificate is issued (can take a few minutes to an hour).
4. DNS for `epabitra.com`: add a **CNAME** record
   `padmasolar` → `epabitra.github.io` (proxy/anything OFF if using Cloudflare, at least initially).

After that, every `git push` to `main` rebuilds and redeploys automatically (watch the **Actions** tab).

### Deploy to a different host instead

It's a plain static SPA — serve `/dist` from any static host. `public/_redirects` covers Netlify
SPA fallback; other hosts need an equivalent "rewrite all to /index.html" rule.
