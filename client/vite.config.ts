import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, '../shared')
    }
  },
  // ADD THIS SERVER CONFIG
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3010
    }
  },
  // ADD THIS BUILD CONFIG
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
