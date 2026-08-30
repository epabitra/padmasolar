import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { ui } from '../data/site'

export default function PageHero({ title, subtitle, crumb }) {
  const { tt } = useLang()
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">{tt(ui.home)}</Link>
          <span aria-hidden="true">/</span>
          {tt(crumb ?? title)}
        </nav>
        <h1>{tt(title)}</h1>
        {subtitle && <p>{tt(subtitle)}</p>}
      </div>
    </section>
  )
}
