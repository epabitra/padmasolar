import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import {
  hero,
  subsidyBar,
  odishaFocus,
  benefits,
  sections,
  subsidy,
  whySolar,
  savingsExample,
  credentials,
  process,
  testimonials,
  faqs,
  ui
} from '../data/site'
import { Icon } from '../components/Icons'
import StatBand from '../components/StatBand'
import CtaStrip from '../components/CtaStrip'
import Accordion from '../components/Accordion'
import heroSolarField from '../assets/hero-solar-field.webp'
import leadershipImg from '../assets/leadership.webp'
import useSeo from '../hooks/useSeo'
import { routes, buildOrganizationJsonLd, buildFaqJsonLd } from '../data/seo'

export default function Home() {
  const { tt } = useLang()

  useSeo({
    title: routes.home.title,
    description: routes.home.description,
    path: routes.home.path,
    jsonLd: [buildOrganizationJsonLd(), buildFaqJsonLd(faqs.slice(0, 5))]
  })

  return (
    <>
      {/* HERO */}
      <section className="hero hero--photo">
        <img className="hero__bg" src={heroSolarField} alt="" aria-hidden="true" />
        <span className="hero__overlay" aria-hidden="true" />

        <div className="container">
          <div>
            <span className="hero__badge">
              <Icon name="sun" /> {tt(hero.badge)}
            </span>
            <h1>{tt(hero.title)}</h1>
            <p className="hero__od">{tt(hero.kicker)}</p>
            <p>{tt(hero.subtitle)}</p>
            <div className="hero__cta">
              <Link to={hero.ctaPrimary.to} className="btn btn--primary">
                {tt(hero.ctaPrimary.label)} <Icon name="arrow" />
              </Link>
              <Link to={hero.ctaSecondary.to} className="btn btn--ghost">
                {tt(hero.ctaSecondary.label)}
              </Link>
            </div>
          </div>

          <aside className="leader-panel" aria-label="Government leadership">
            <div className="tricolour" aria-hidden="true">
              <i /><i /><i />
            </div>
            <div className="leader-panel__figure">
              <img
                src={leadershipImg}
                alt="Shri Narendra Modi, Prime Minister of India, and Shri Mohan Charan Majhi, Chief Minister of Odisha"
              />
            </div>
            <div className="leader-panel__names">
              {hero.leaders.map((l, i) => (
                <div key={i}>
                  <b>{tt(l.name)}</b>
                  <span>{tt(l.role)}</span>
                </div>
              ))}
            </div>
            <p className="leader-panel__caption">{tt(hero.leaderCaption)}</p>
          </aside>
        </div>
        <div className="tricolour" aria-hidden="true">
          <i /><i /><i />
        </div>
      </section>

      {/* SUBSIDY HIGHLIGHT BAR */}
      <section className="subsidy-bar">
        <div className="container">
          {subsidyBar.map((item, i) => (
            <div className="subsidy-bar__item" key={i}>
              <b>{tt(item.value)}</b>
              <span>{tt(item.label)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ODISHA FOCUS */}
      <section className="section odisha">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow" style={{ color: 'var(--saffron-600)' }}>
                {tt(odishaFocus.eyebrow)}
              </span>
              <h2>{tt(odishaFocus.heading)}</h2>
              {tt(odishaFocus.body).map((para, i) => (
                <p key={i} className={i === 0 ? 'lead' : undefined}>
                  {para}
                </p>
              ))}
            </div>
            <div>
              <img
                className="odisha__img"
                src={heroSolarField}
                alt="Rows of solar panels installed across an open field under a clear sky"
              />
              <ul className="list-check odisha__bullets">
                {odishaFocus.bullets.map((b, i) => (
                  <li key={i}>{tt(b)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{tt(sections.benefits.eyebrow)}</span>
            <h2>{tt(sections.benefits.heading)}</h2>
            <p>{tt(sections.benefits.text)}</p>
          </div>
          <div className="grid grid-4">
            {benefits.map((b, i) => (
              <article className="card card--lift" key={i}>
                <span className="card__icon">
                  <Icon name={b.icon} />
                </span>
                <h3>{tt(b.title)}</h3>
                <p>{tt(b.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSIDY */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow" style={{ color: 'var(--saffron-600)' }}>
                {tt(sections.subsidy.eyebrow)}
              </span>
              <h2>{tt(sections.subsidy.heading)}</h2>
              <p className="lead">{tt(subsidy.intro)}</p>
              <Link to="/contact" className="btn btn--solid">
                {tt(ui.checkEligibility)} <Icon name="arrow" />
              </Link>
            </div>
            <div>
              <table className="subsidy-table">
                <thead>
                  <tr>
                    <th>{tt(subsidy.colCapacity)}</th>
                    <th>{tt(subsidy.colSubsidy)}</th>
                  </tr>
                </thead>
                <tbody>
                  {subsidy.slabs.map((s, i) => (
                    <tr key={i}>
                      <td>{tt(s.size)}</td>
                      <td>{tt(s.amount)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="callout">{tt(subsidy.note)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SOLAR NUMBERS */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{tt(sections.economics.eyebrow)}</span>
            <h2>{tt(sections.economics.heading)}</h2>
          </div>
          <div className="grid grid-4">
            {whySolar.map((w, i) => (
              <div className="card" key={i} style={{ textAlign: 'center' }}>
                <b
                  style={{
                    fontFamily: '"Noto Serif", serif',
                    fontSize: '1.9rem',
                    color: 'var(--green-600)',
                    display: 'block',
                    marginBottom: 8
                  }}
                >
                  {tt(w.stat)}
                </b>
                <p>{tt(w.label)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAVINGS EXAMPLE */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow" style={{ color: 'var(--saffron-600)' }}>
                {tt(sections.savings.eyebrow)}
              </span>
              <h2>{tt(sections.savings.heading)}</h2>
              <p className="lead">{tt(sections.savings.intro)}</p>
              <p className="callout">{tt(savingsExample.disclaimer)}</p>
            </div>
            <table className="subsidy-table">
              <tbody>
                {savingsExample.rows.map((r, i) => (
                  <tr key={i}>
                    <td>{tt(r.k)}</td>
                    <td>{tt(r.v)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <StatBand />

      {/* CREDENTIALS */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">{tt(sections.credentials.eyebrow)}</span>
              <h2>{tt(sections.credentials.heading)}</h2>
              <p className="lead">{tt(sections.credentials.text)}</p>
              <Link to="/about" className="btn btn--solid">
                {tt(ui.moreAboutUs)} <Icon name="arrow" />
              </Link>
            </div>
            <ul className="list-check">
              {tt(credentials).map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{tt(sections.process.eyebrow)}</span>
            <h2>{tt(sections.process.heading)}</h2>
          </div>
          <div className="steps">
            {process.map((p) => (
              <div className="step" key={p.step}>
                <span className="step__num">{p.step}</span>
                <div>
                  <h3>{tt(p.title)}</h3>
                  <p>{tt(p.text)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{tt(sections.testimonials.eyebrow)}</span>
            <h2>{tt(sections.testimonials.heading)}</h2>
          </div>
          <div className="grid grid-2">
            {testimonials.map((t, i) => (
              <blockquote className="quote" key={i}>
                <p>&ldquo;{tt(t.text)}&rdquo;</p>
                <div className="quote__who">
                  <span className="quote__avatar" aria-hidden="true">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <b>{t.name}</b>
                    <span>{tt(t.place)}</span>
                  </span>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{tt(sections.faq.eyebrow)}</span>
            <h2>{tt(sections.faq.heading)}</h2>
          </div>
          <Accordion items={faqs.slice(0, 5)} />
          <p style={{ textAlign: 'center', marginTop: 24 }}>
            <Link to="/faqs" className="btn btn--solid">
              {tt(ui.seeAllFaqs)} <Icon name="arrow" />
            </Link>
          </p>
        </div>
      </section>

      <CtaStrip />
    </>
  )
}
