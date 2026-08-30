import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { ui } from '../data/site'
import { Icon } from './Icons'

export default function CtaStrip() {
  const { tt } = useLang()
  return (
    <section className="section cta-strip">
      <div className="container">
        <h2>{tt(ui.ctaHeading)}</h2>
        <p>{tt(ui.ctaText)}</p>
        <Link to="/contact" className="btn btn--solid">
          {tt(ui.bookFreeSurvey)} <Icon name="arrow" />
        </Link>
      </div>
    </section>
  )
}
