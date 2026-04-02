import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Vercel deployment configuration update
export default defineConfig({
  plugins: [react()],
})

// Trigger reload
