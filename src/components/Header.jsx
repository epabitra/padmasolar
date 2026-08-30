import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { company, nav } from '../data/site'
import Logo from './Logo'

export default function Header() {
  const { tt } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-main">
        <div className="container">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <Logo size={52} />
            <span className="brand__text">
              <strong>{company.name}</strong>
              <span>{tt(company.registration)}</span>
            </span>
          </Link>

          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
          </button>

          <nav id="primary-nav" className={`primary-nav ${open ? 'open' : ''}`} aria-label="Primary">
            <ul>
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                    onClick={() => setOpen(false)}
                  >
                    {tt(item.label)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
