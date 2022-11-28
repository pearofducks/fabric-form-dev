import './style.css'
import './forms.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="radio"></div>
  <div class="radio checked"></div>
  <div style="margin: 32px 0;"></div>
  <label style="display: flex; align-items: center;">
    <input type="radio" class="radio" name="foo" />
    <span style="margin-left: 8px;">i am a radio field</span>
  </label>
  <label style="margin-top: 8px; display: flex; align-items: center;">
    <input type="radio" class="radio" name="foo" />
    <span style="margin-left: 8px">i am a radio field</span>
  </label>

  <div style="margin: 32px 0;"></div>
  <div class="checkbox"></div>
  <div class="checkbox checked"></div>
  <div style="margin: 32px 0;"></div>
  <label style="display: flex; align-items: center;">
    <input type="checkbox" class="checkbox" name="bar" />
    <span style="margin-left: 8px;">i am a checkbox field</span>
  </label>
  <label style="margin-top: 8px; display: flex; align-items: center;">
    <input type="checkbox" class="checkbox" name="bar" />
    <span style="margin-left: 8px">i am a checkbox field</span>
  </label>
  </div>
`

setupCounter(document.querySelector('#counter'))
