// Root vite.config.js
import { defineConfig } from 'vite'
import clientConfig from './client/vite.config'

export default defineConfig({
  ...clientConfig,
  root: process.cwd() // Explicitly set to current directory
})
