import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Site is served from the root of the custom domain padmasolar.epabitra.com,
  // so the base path is '/'. If you ever host it at github.io/<repo>/ instead,
  // change this to '/padmasolar/'.
  base: '/',
  server: {
    port: 5173,
    open: true
  }
})
