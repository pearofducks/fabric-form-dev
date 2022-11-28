import './style.css'
import './forms.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="radio"></div>
  <div class="radio checked"></div>
  <br/>
  <label>
    <input type="radio" class="radio" name="foo" />
    <span>i am a radio field</span>
  </label>
  <br />
  <label style="margin-top: 8px; display: block;">
    <input type="radio" class="radio" name="foo" />
    <span>i am a radio field</span>
  </label>
  </div>
`

setupCounter(document.querySelector('#counter'))
