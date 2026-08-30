import PageHero from '../components/PageHero'
import CtaStrip from '../components/CtaStrip'
import Accordion from '../components/Accordion'
import { pageMeta, faqs } from '../data/site'

export default function Faqs() {
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
