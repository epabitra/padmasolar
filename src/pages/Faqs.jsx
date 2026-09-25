import PageHero from '../components/PageHero'
import CtaStrip from '../components/CtaStrip'
import Accordion from '../components/Accordion'
import { pageMeta, faqs } from '../data/site'
import useSeo from '../hooks/useSeo'
import { routes, buildBreadcrumbJsonLd, buildFaqJsonLd } from '../data/seo'

export default function Faqs() {
  useSeo({
    title: routes.faqs.title,
    description: routes.faqs.description,
    path: routes.faqs.path,
    jsonLd: [
      buildBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: pageMeta.faqs.crumb.en, path: routes.faqs.path }
      ]),
      buildFaqJsonLd(faqs)
    ]
  })

  return (
    <>
      <PageHero
        title={pageMeta.faqs.title}
        subtitle={pageMeta.faqs.subtitle}
        crumb={pageMeta.faqs.crumb}
      />

      <section className="section">
        <div className="container">
          <Accordion items={faqs} />
        </div>
      </section>

      <CtaStrip />
    </>
  )
}
