import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { company, nav, quickLinks, ui } from '../data/site'
import { Icon, SocialIcon } from './Icons'
import Logo from './Logo'

export default function Footer() {
  const { tt } = useLang()
  return (
    <footer className="site-footer">
      <div className="tricolour" aria-hidden="true">
        <i /><i /><i />
      </div>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <Logo height={46} badge />
            </div>
            <p>{tt(ui.footerAbout)}</p>
            <div className="footer-social">
              <a href={company.social.facebook} aria-label="Facebook"><SocialIcon name="facebook" /></a>
              <a href={company.social.twitter} aria-label="Twitter / X"><SocialIcon name="twitter" /></a>
              <a href={company.social.youtube} aria-label="YouTube"><SocialIcon name="youtube" /></a>
              <a href={company.social.instagram} aria-label="Instagram"><SocialIcon name="instagram" /></a>
            </div>
          </div>

          <div>
            <h4>{tt(ui.pages)}</h4>
            <ul>
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to}>{tt(n.label)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{tt(ui.govtLinks)}</h4>
            <ul>
              {quickLinks.map((q) => (
                <li key={q.href + tt(q.label)}>
                  <a href={q.href} target="_blank" rel="noreferrer noopener">
                    {tt(q.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{tt(ui.contact)}</h4>
            <ul>
              <li><Icon name="phone" /> {company.phonePrimary}</li>
              <li style={{ paddingLeft: 34 }}>{company.phoneSecondary}</li>
              <li><Icon name="mail" /> {company.email}</li>
              <li><Icon name="pin" /> {tt(company.address).join(', ')}</li>
              <li><Icon name="clock" /> {tt(company.hours)}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {company.name}. {tt(ui.rightsReserved)}
          </span>
          <span>
            <Link to="/faqs">{tt(nav[4].label)}</Link> &nbsp;·&nbsp;{' '}
            <Link to="/contact">{tt(ui.support)}</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
