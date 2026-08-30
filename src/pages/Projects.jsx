import { useMemo, useState } from 'react'
import { useLang } from '../i18n.jsx'
import PageHero from '../components/PageHero'
import CtaStrip from '../components/CtaStrip'
import { pageMeta, projects, projectCategories, projectsNote } from '../data/site'

export default function Projects() {
  const { tt } = useLang()
  const [cat, setCat] = useState('All')
  const list = useMemo(
    () => (cat === 'All' ? projects : projects.filter((p) => p.category === cat)),
    [cat]
  )

  return (
    <>
      <PageHero
        title={pageMeta.projects.title}
        subtitle={pageMeta.projects.subtitle}
        crumb={pageMeta.projects.crumb}
      />

      <section className="section">
        <div className="container">
          <div className="filter-bar" role="group" aria-label="Filter projects by category">
            {projectCategories.map((c) => (
              <button
                key={c.key}
                className={cat === c.key ? 'active' : ''}
                onClick={() => setCat(c.key)}
                aria-pressed={cat === c.key}
              >
                {tt(c.label)}
              </button>
            ))}
          </div>

          <div className="grid grid-3">
            {list.map((p, i) => (
              <article className="card card--lift project-card" key={i}>
                <div className="meta">
                  <span className="tag">
                    {tt(projectCategories.find((c) => c.key === p.category)?.label ?? { en: p.category })}
                  </span>
                  <span className="cap">{p.capacity}</span>
                </div>
                <h3 style={{ fontSize: '1.1rem' }}>{tt(p.title)}</h3>
                <p>{tt(p.detail)}</p>
              </article>
            ))}
          </div>

          <p className="callout" style={{ marginTop: 28 }}>
            {tt(projectsNote)}
          </p>
        </div>
      </section>

      <CtaStrip />
    </>
  )
}
