import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import PageHero from '../components/PageHero'
import { Icon } from '../components/Icons'
import { company, pageMeta, contactPage } from '../data/site'

export default function Contact() {
  const { tt } = useLang()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    district: '',
    interest: contactPage.interestOptions[0].en,
    bill: '',
    message: ''
  })

  const upd = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }
  const req = ` (${tt(contactPage.f.required)})`

  return (
    <>
      <PageHero
        title={pageMeta.contact.title}
        subtitle={pageMeta.contact.subtitle}
        crumb={pageMeta.contact.crumb}
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2>{tt(contactPage.heading)}</h2>
              <p className="lead">{tt(contactPage.intro)}</p>

              <div className="info-card">
                <span className="card__icon"><Icon name="phone" /></span>
                <div>
                  <h3>{tt(contactPage.phone)}</h3>
                  <p>{company.phonePrimary}</p>
                  <p>{company.phoneSecondary}</p>
                  <p>{tt(contactPage.tollFree)}: {company.helpline}</p>
                </div>
              </div>

              <div className="info-card">
                <span className="card__icon"><Icon name="mail" /></span>
                <div>
                  <h3>{tt(contactPage.email)}</h3>
                  <p>{company.email}</p>
                </div>
              </div>

              <div className="info-card">
                <span className="card__icon"><Icon name="pin" /></span>
                <div>
                  <h3>{tt(contactPage.office)}</h3>
                  {tt(company.address).map((l, i) => (
                    <p key={i}>{l}</p>
                  ))}
                </div>
              </div>

              <div className="info-card">
                <span className="card__icon"><Icon name="clock" /></span>
                <div>
                  <h3>{tt(contactPage.workingHours)}</h3>
                  <p>{tt(company.hours)}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="card">
                <h2 style={{ fontSize: '1.4rem' }}>{tt(contactPage.formHeading)}</h2>
                {sent ? (
                  <div className="form-success" role="status">
                    {tt(contactPage.success)}
                  </div>
                ) : (
                  <form onSubmit={submit} noValidate>
                    <div className="form-field">
                      <label htmlFor="name">{tt(contactPage.f.name)} *</label>
                      <input id="name" name="name" required value={form.name} onChange={upd} />
                    </div>
                    <div className="grid grid-2" style={{ gap: 16 }}>
                      <div className="form-field">
                        <label htmlFor="phone">{tt(contactPage.f.phone)} *</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          pattern="[0-9+ ]{8,15}"
                          value={form.phone}
                          onChange={upd}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="email">{tt(contactPage.f.email)}</label>
                        <input id="email" name="email" type="email" value={form.email} onChange={upd} />
                      </div>
                    </div>
                    <div className="grid grid-2" style={{ gap: 16 }}>
                      <div className="form-field">
                        <label htmlFor="district">{tt(contactPage.f.district)}</label>
                        <input id="district" name="district" value={form.district} onChange={upd} />
                      </div>
                      <div className="form-field">
                        <label htmlFor="bill">{tt(contactPage.f.bill)}</label>
                        <input id="bill" name="bill" inputMode="numeric" value={form.bill} onChange={upd} />
                      </div>
                    </div>
                    <div className="form-field">
                      <label htmlFor="interest">{tt(contactPage.f.interest)}</label>
                      <select id="interest" name="interest" value={form.interest} onChange={upd}>
                        {contactPage.interestOptions.map((o) => (
                          <option key={o.en} value={o.en}>
                            {tt(o)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-field">
                      <label htmlFor="message">{tt(contactPage.f.message)}</label>
                      <textarea id="message" name="message" rows="4" value={form.message} onChange={upd} />
                    </div>
                    <button
                      type="submit"
                      className="btn btn--primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      {tt(contactPage.f.submit)} <Icon name="arrow" />
                    </button>
                    <p className="form-note" style={{ marginTop: 12 }}>
                      {tt(contactPage.formNote)}
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            className="card"
            style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--line)' }}
          >
            <iframe
              title="Office location map"
              width="100%"
              height="360"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=84.74%2C19.28%2C84.85%2C19.35&layer=mapnik"
            />
          </div>
          <p className="form-note" style={{ marginTop: 10 }}>
            {tt(contactPage.mapNote)}
          </p>
        </div>
      </section>
    </>
  )
}
