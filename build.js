import * as lightning from 'lightningcss'

const { code } = lightning.bundle({
  filename: 'forms.css',
  minify: true,
  drafts: { nesting: true, customMedia: true },
  targets: {
    safari: (12 << 16),
    chrome: (80 << 16),
    firefox: (80 << 16),
  }
})

console.log(code.toString())
