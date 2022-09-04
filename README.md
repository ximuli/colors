# pointer API

# Scss 变量与 JS 公用

1. 如何把Scss变量提前打入全局环境

    * https://vitejs.cn/config/#css-preprocessoroptions

    * https://segmentfault.com/a/1190000021627804

2. tsconfig.node.json的作用

    https://juejin.cn/post/7126043888573218823

```ts
// vite.config.ts
import { vars } from './src/assets/style/vars.scss'

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
