// Lightweight inline icon set (no external dependency).
const base = {
  className: 'icon',
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true
}

export function Icon({ name }) {
  switch (name) {
    case 'leaf':
      return (
        <svg {...base}>
          <path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 16-9 0 11-4 16-9 16Z" />
          <path d="M11 20c0-6 3-10 9-13" />
        </svg>
      )
    case 'bolt':
      return (
        <svg {...base}>
          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...base}>
          <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    case 'rupee':
      return (
        <svg {...base}>
          <path d="M7 5h10M7 9h10M7 5c6 0 6 8 0 8l7 6" />
        </svg>
      )
    case 'home':
      return (
        <svg {...base}>
          <path d="M4 11 12 4l8 7" />
          <path d="M6 10v10h12V10" />
        </svg>
      )
    case 'building':
      return (
        <svg {...base}>
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
        </svg>
      )
    case 'gov':
      return (
        <svg {...base}>
          <path d="M3 21h18M4 10h16M12 3 4 7h16l-8-4Z" />
          <path d="M6 10v8M10 10v8M14 10v8M18 10v8" />
        </svg>
      )
    case 'box':
      return (
        <svg {...base}>
          <path d="m12 3 8 4v10l-8 4-8-4V7l8-4Z" />
          <path d="m4 7 8 4 8-4M12 11v10" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...base}>
          <path d="M6 3h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 4 5a2 2 0 0 1 2-2Z" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...base}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      )
    case 'pin':
      return (
        <svg {...base}>
          <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...base}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      )
    case 'sun':
      return (
        <svg {...base}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
        </svg>
      )
    case 'arrow':
      return (
        <svg {...base}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )
    default:
      return null
  }
}

export function SocialIcon({ name }) {
  const p = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true }
  if (name === 'facebook')
    return (
      <svg {...p}>
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z" />
      </svg>
    )
  if (name === 'twitter')
    return (
      <svg {...p}>
        <path d="M4 4l7 9-7 7h2l6-6 5 6h4l-8-10 7-8h-2l-6 6-4-6H4Z" />
      </svg>
    )
  if (name === 'youtube')
    return (
      <svg {...p}>
        <path d="M22 12c0-2-.2-3.5-.4-4.2-.3-1-1-1.6-2-1.8C17.8 5.7 12 5.7 12 5.7s-5.8 0-7.6.3c-1 .2-1.7.8-2 1.8C2.2 8.5 2 10 2 12s.2 3.5.4 4.2c.3 1 1 1.6 2 1.8 1.8.3 7.6.3 7.6.3s5.8 0 7.6-.3c1-.2 1.7-.8 2-1.8.2-.7.4-2.2.4-4.2Zm-12 3V9l5 3-5 3Z" />
      </svg>
    )
  if (name === 'instagram')
    return (
      <svg {...p}>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="7" r="1.4" />
      </svg>
    )
  return null
}
