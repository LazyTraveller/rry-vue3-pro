import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import vitePluginTransformId from './vite-plugin-transform-id'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    define: {
      __APP_VERSION__: JSON.stringify('v1.0.0'),
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      __DEV__: JSON.stringify(command === 'serve'),
      __API_URL__: JSON.stringify(env.API_URL)
    },
    plugins: [
      vue(),
      vueJsx(),
      VueDevTools(),
      vitePluginTransformId()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "sass:math";`
        },
        less: {
          javascriptEnabled: true
        }
      }
    }
  }
})
