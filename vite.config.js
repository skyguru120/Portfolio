import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { createContributionsMiddleware } from './server/contributionsHandler.js'

const contributionsMiddleware = createContributionsMiddleware()

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  process.env.GH_TOKEN = env.GH_TOKEN || process.env.GH_TOKEN
  process.env.VITE_GH_TOKEN = env.VITE_GH_TOKEN || process.env.VITE_GH_TOKEN

  return {
    plugins: [
      react(),
      {
        name: 'dev-contributions-api',
        configureServer(server) {
          server.middlewares.use('/api/fetchContributions', contributionsMiddleware)
          server.middlewares.use(
            '/.netlify/functions/fetchContributions',
            contributionsMiddleware
          )
        },
      },
    ],
    server: {
      host: '127.0.0.1',
      port: 5173,
    },
    preview: {
      host: '127.0.0.1',
      port: 4173,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
      },
    },
  }
})
