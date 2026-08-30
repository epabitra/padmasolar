import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import PageHero from '../components/PageHero'
import { notFound, ui, pageMeta } from '../data/site'

export default function NotFound() {
  const { tt } = useLang()
  return (
    <>
      <PageHero title={notFound.title} subtitle={notFound.subtitle} crumb={{ en: '404', od: '୪୦୪' }} />
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="lead">{tt(notFound.tryThese)}</p>
          <p>
            <Link to="/" className="btn btn--solid">
              {tt(notFound.goHome)}
            </Link>{' '}
            <Link to="/contact" className="btn btn--primary">
              {tt(pageMeta.contact.title)}
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
