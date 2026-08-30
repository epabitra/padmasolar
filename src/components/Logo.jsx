// Brand mark for Padma Solar Services - a golden sun over a lotus petal on deep navy.
export default function Logo({ size = 52 }) {
  return (
    <svg
      className="brand__logo"
      width={size}
      height={size}
      viewBox="0 0 56 56"
      role="img"
      aria-label="Padma Solar Services"
    >
      <defs>
        <linearGradient id="pss-navy" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#123c85" />
          <stop offset="1" stopColor="#082151" />
        </linearGradient>
        <linearGradient id="pss-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe08a" />
          <stop offset="0.5" stopColor="#ffcf5c" />
          <stop offset="1" stopColor="#f7b733" />
        </linearGradient>
      </defs>

      <rect x="1" y="1" width="54" height="54" rx="13" fill="url(#pss-navy)" />
      <rect x="1" y="1" width="54" height="54" rx="13" fill="none" stroke="#ffcf5c" strokeOpacity="0.35" />

      {/* sun rays */}
      <g stroke="url(#pss-gold)" strokeWidth="2.4" strokeLinecap="round">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180
          const r1 = 15
          const r2 = 21.5
          return (
            <line
              key={i}
              x1={28 + Math.cos(a) * r1}
              y1={24 + Math.sin(a) * r1}
              x2={28 + Math.cos(a) * r2}
              y2={24 + Math.sin(a) * r2}
            />
          )
        })}
      </g>

      {/* sun disc */}
      <circle cx="28" cy="24" r="9.5" fill="url(#pss-gold)" />

      {/* lotus petals at the base */}
      <path
        d="M28 46c-4-3-6-6-6-9 0 0 2.6 1 6 5 3.4-4 6-5 6-5 0 3-2 6-6 9Z"
        fill="url(#pss-gold)"
      />
      <path d="M20 44c-2.6-1.6-4-3.6-4.4-6 2.4.4 4.4 1.6 5.8 3.6ZM36 44c2.6-1.6 4-3.6 4.4-6-2.4.4-4.4 1.6-5.8 3.6Z" fill="#ffcf5c" fillOpacity="0.8" />
    </svg>
  )
}
