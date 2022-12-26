import * as lightning from 'lightningcss'
import { defineConfig } from 'vite'

const hasCssSuffix = /\.(css)$/

export default defineConfig({
  plugins: [
    {
      name: 'lightning-css-plugin',
      transform(src, id) {
        if (hasCssSuffix.test(id)) {
          const { code, map } = lightning.transform({
            filename: id,
            code: Buffer.from(src),
            sourceMap: true,
            drafts: { nesting: true, customMedia: true },
            targets: {
              safari: (12 << 16),
              chrome: (80 << 16),
              firefox: (80 << 16),
            }
          })
          return {
            code: code.toString(),
            map: map?.toString()
          }
        }
      }
    }
  ]
})
