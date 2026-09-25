import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import PageHero from '../components/PageHero'
import StatBand from '../components/StatBand'
import CtaStrip from '../components/CtaStrip'
import { Icon } from '../components/Icons'
import { pageMeta, aboutPage, process, credentials, ui } from '../data/site'
import useSeo from '../hooks/useSeo'
import { routes, buildBreadcrumbJsonLd } from '../data/seo'

export default function About() {
  const { tt } = useLang()

  useSeo({
    title: routes.about.title,
    description: routes.about.description,
    path: routes.about.path,
    jsonLd: buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: pageMeta.about.crumb.en, path: routes.about.path }
    ])
  })

  return (
    <>
      <PageHero
        title={pageMeta.about.title}
        subtitle={pageMeta.about.subtitle}
        crumb={pageMeta.about.crumb}
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="prose">
              <span className="eyebrow">{tt(aboutPage.whoEyebrow)}</span>
              <h2>{tt(aboutPage.whoHeading)}</h2>
              {tt(aboutPage.who).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p>{tt(aboutPage.aboutWho2)}</p>
            </div>
            <ul className="list-check">
              {tt(credentials).map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{tt(aboutPage.valuesEyebrow)}</span>
            <h2>{tt(aboutPage.valuesHeading)}</h2>
          </div>
          <div className="grid grid-3">
            {aboutPage.values.map((v, i) => (
              <article className="card card--lift" key={i}>
                <span className="card__icon"><Icon name={v.icon} /></span>
                <h3>{tt(v.title)}</h3>
                <p>{tt(v.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StatBand />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{tt(aboutPage.processEyebrow)}</span>
            <h2>{tt(aboutPage.processHeading)}</h2>
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

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{tt(aboutPage.teamEyebrow)}</span>
            <h2>{tt(aboutPage.teamHeading)}</h2>
            <p>{tt(aboutPage.teamNote)}</p>
          </div>
          <div className="grid grid-4">
            {aboutPage.team.map((m, i) => (
              <article className="card" key={i} style={{ textAlign: 'center' }}>
                <span
                  className="quote__avatar"
                  aria-hidden="true"
                  style={{ width: 64, height: 64, margin: '0 auto 14px', fontSize: '1.3rem' }}
                >
                  {m.initials}
                </span>
                <h3 style={{ fontSize: '1.05rem' }}>{tt(m.name)}</h3>
                <p>{tt(m.role)}</p>
              </article>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 28 }}>
            <Link to="/contact" className="btn btn--solid">
              {tt(ui.talkToTeam)} <Icon name="arrow" />
            </Link>
          </p>
        </div>
      </section>

      <CtaStrip />
    </>
  )
}
