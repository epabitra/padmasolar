import { useEffect, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { company, ui } from '../data/site'

export default function UtilityBar() {
  const { lang, setLang, tt } = useLang()
  const [scale, setScale] = useState(1)
  const [contrast, setContrast] = useState(false)

  useEffect(() => {
    document.documentElement.style.setProperty('--fs-scale', String(scale))
  }, [scale])

  useEffect(() => {
    document.body.classList.toggle('contrast', contrast)
  }, [contrast])

  const clamp = (n) => Math.min(1.3, Math.max(0.9, Number(n.toFixed(2))))

  return (
    <div className="utilitybar">
      <div className="container">
        <div className="utility-left">
          <span className="hide-sm">{tt(company.registration)}</span>
        </div>
        <div className="utility-right">
          <span className="utility-hours">
            {tt(ui.helpline)}: {company.helpline}
          </span>
          <div className="a11y-controls" role="group" aria-label="Accessibility options">
            <button type="button" onClick={() => setScale((s) => clamp(s - 0.1))} aria-label={tt(ui.decreaseText)}>
              A-
            </button>
            <button type="button" onClick={() => setScale(1)} aria-label={tt(ui.resetText)}>
              A
            </button>
            <button type="button" onClick={() => setScale((s) => clamp(s + 0.1))} aria-label={tt(ui.increaseText)}>
              A+
            </button>
            <button
              type="button"
              onClick={() => setContrast((c) => !c)}
              aria-pressed={contrast}
              aria-label={tt(ui.highContrast)}
              title={tt(ui.highContrast)}
            >
              ◐
            </button>
          </div>
          <div className="lang-switch" role="group" aria-label={tt(ui.switchLanguage)}>
            <button
              type="button"
              className={lang === 'en' ? 'active' : ''}
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              English
            </button>
            <button
              type="button"
              className={lang === 'od' ? 'active' : ''}
              aria-pressed={lang === 'od'}
              onClick={() => setLang('od')}
              lang="or"
            >
              ଓଡ଼ିଆ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
