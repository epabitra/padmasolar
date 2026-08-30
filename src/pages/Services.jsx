import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import PageHero from '../components/PageHero'
import CtaStrip from '../components/CtaStrip'
import { Icon } from '../components/Icons'
import { pageMeta, services, servicesPage, process, ui } from '../data/site'

export default function Services() {
  const { tt } = useLang()
  return (
    <>
      <PageHero
        title={pageMeta.services.title}
        subtitle={pageMeta.services.subtitle}
        crumb={pageMeta.services.crumb}
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {services.map((s) => (
              <article className="card card--lift" id={s.slug} key={s.slug}>
                <span className="card__icon">
                  <Icon name={s.icon} />
                </span>
                <h3>{tt(s.title)}</h3>
                <p style={{ marginBottom: 16 }}>{tt(s.summary)}</p>
                <ul className="list-check">
                  {tt(s.points).map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                <p style={{ marginTop: 18, marginBottom: 0 }}>
                  <Link to="/contact" className="btn btn--solid">
                    {tt(ui.requestQuote)} <Icon name="arrow" />
                  </Link>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <div className="section-head">
            <span
              className="eyebrow"
              style={{ color: 'var(--saffron)', borderColor: 'var(--saffron)' }}
            >
              {tt(servicesPage.includedEyebrow)}
            </span>
            <h2>{tt(servicesPage.includedHeading)}</h2>
          </div>
          <div className="grid grid-3">
            {servicesPage.included.map((item, i) => (
              <div
                className="card"
                key={i}
                style={{ background: 'rgba(255,255,255,.06)', borderColor: 'rgba(255,255,255,.18)' }}
              >
                <span
                  className="card__icon"
                  style={{ background: 'rgba(255,255,255,.12)', color: '#fff' }}
                >
                  <Icon name={item.icon} />
                </span>
                <h3 style={{ color: '#fff' }}>{tt(item.label)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{tt(servicesPage.deliveryEyebrow)}</span>
            <h2>{tt(servicesPage.deliveryHeading)}</h2>
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

      <CtaStrip />
    </>
  )
}
