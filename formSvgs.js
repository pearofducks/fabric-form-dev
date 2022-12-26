import svgToDataUri from 'mini-svg-data-uri'

const encode = svg => `url("${svgToDataUri(svg)}")`

const selectChevron = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="#71717a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
const checkMark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`
const checkDash = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`

const style = document.createElement('style')
style.innerHTML = `
  :root, :host {
    --x-form-select-chevron: ${encode(selectChevron)};
    --x-form-check-mark: ${encode(checkMark)};
    --x-form-check-dash: ${encode(checkDash)};
  }
`
document.querySelector('head').appendChild(style)
