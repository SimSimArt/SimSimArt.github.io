import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // GitHub Actions sets this to /<repository-name>/ for project pages.
    // Keep `/` for local development and user/organization pages.
    base: env.VITE_BASE_PATH || '/',
    plugins: [vue(), vuetify({ autoImport: true })],
  }
})
