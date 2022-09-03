import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vars } from './src/assets/style/vars.scss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: Object.keys(vars).map(item => {
          return `${item}: ${vars[item]};`
        }).join('\n')
      }
    }
  }
})
