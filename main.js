import './style.css'
import './forms.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <h4 style="text-align: left; margin-bottom: 8px;">Dead toggles</h4>
  <div style="display: grid; grid-template-columns: 1fr 1fr;">
    <div class="radio" style="pointer-events: none"></div>
    <div class="radio checked" style="pointer-events: none"></div>
  </div>
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
  <h4 style="text-align: left; margin-bottom: 8px;">Dead toggles</h4>
  <div style="display: grid; grid-template-columns: 1fr 1fr;">
    <div class="checkbox" style="pointer-events: none"></div>
    <div class="checkbox checked" style="pointer-events: none"></div>
  </div>
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
  <ol style="margin-top: 48px">
    <li>cursor pointer only on input el?</li>
    <li>breaking up input el and label so can have more atomic-ness</li>
    <li>display block ok for input el?</li>
    <li>no checked+hover style for radio, ok? (doesn't make sense to have one?)</li>
    <li>how do we size these? will it need to change per-font/per-brand?</li>
    <li>more bold checkmark?</li>
  </ol>
`

setupCounter(document.querySelector('#counter'))
