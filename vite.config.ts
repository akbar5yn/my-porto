import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    allowedHosts: [
      'akbarsyn.my.id',
      'www.akbarsyn.my.id'
    ],
    hmr: {
      clientPort: 443,
    },
  },
})