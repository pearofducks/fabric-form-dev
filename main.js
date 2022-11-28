import './style.css'
import './forms.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <label>
    <input type="text" class="input" />
    <span>i am a text field</span>
  </label>
  <br />
  <label>
    <input type="radio" class="radio" />
    <span>i am a radio field</span>
  </label>
  </div>
`

setupCounter(document.querySelector('#counter'))
