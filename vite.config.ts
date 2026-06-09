import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' para que funcione en GitHub Pages bajo /Landing-page/
export default defineConfig({
  plugins: [react()],
  base: './',
})
