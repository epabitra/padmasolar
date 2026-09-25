import logoImg from '../assets/logo.jpeg'

// Client-supplied brand mark (sun + solar panel + green swoosh, with the
// "PADMA SOLAR SERVICES / Powering Your Tomorrow" wordmark baked in).
// Source is a JPEG with a near-white background, so on dark surfaces
// (e.g. the navy footer) pass `badge` to wrap it in a white card instead
// of letting a white rectangle float on navy.
export default function Logo({ height = 52, badge = false, className = '' }) {
  const img = (
    <img
      className="brand__logo"
      src={logoImg}
      alt="Padma Solar Services"
      height={height}
      style={{ height, width: 'auto' }}
    />
  )

  if (!badge) return className ? <span className={className}>{img}</span> : img

  return <span className={`logo-badge ${className}`.trim()}>{img}</span>
}
