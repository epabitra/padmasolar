// GitHub Pages has no SPA rewrite. Serving a copy of index.html as 404.html
// lets React Router handle deep links like /about or /contact on a hard refresh.
import { copyFileSync, existsSync } from 'node:fs'

const src = 'dist/index.html'
const dest = 'dist/404.html'

if (!existsSync(src)) {
  console.error('copy-404: dist/index.html not found - run "vite build" first')
  process.exit(1)
}

copyFileSync(src, dest)
console.log('copy-404: created dist/404.html')
