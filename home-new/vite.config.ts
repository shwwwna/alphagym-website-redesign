import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Repo is served from https://shwwwna.github.io/alphagym-website-redesign/
  base: '/alphagym-website-redesign/',
  plugins: [react(), tailwindcss()],
})
