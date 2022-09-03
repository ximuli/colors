# pointer API

# Scss 变量与 JS 公用

https://vitejs.cn/config/#css-preprocessoroptions

https://segmentfault.com/a/1190000021627804

```ts
// vite.config.ts
import { vars } from './src/assets/style/vars.scss.js'

export default defineConfig({
  // ……
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

```
