import { useState } from 'react'
import { useLang } from '../i18n.jsx'

export default function Accordion({ items }) {
  const { tt } = useLang()
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = openIdx === i
        return (
          <div className={`acc-item ${isOpen ? 'open' : ''}`} key={i}>
            <button type="button" aria-expanded={isOpen} onClick={() => setOpenIdx(isOpen ? -1 : i)}>
              {tt(item.q)}
            </button>
            <div className="acc-body" role="region">
              <p style={{ marginTop: 0, marginBottom: 0 }}>{tt(item.a)}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
