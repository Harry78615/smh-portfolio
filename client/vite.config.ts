import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, '../shared'),
      '@tanstack/react-query': path.resolve(__dirname, '../node_modules/@tanstack/react-query')
    }
  },
   root: path.resolve(__dirname, '../'), // Points to project root
  build: {
    outDir: 'dist', // Output to /dist in root
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, '../index.html') // Explicit entry point
      }
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
