import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  base: "/",
  server: {
    allowedHosts: true, // membebaskan semua host
    host: true,         // biar bisa diakses dari jaringan luar
  },
})
