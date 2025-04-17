import { createApp } from 'vue'
import Greeter from './components/Greeter.vue'
import './style.css'

window.Greeter = {
  init(selector, props) {
    const el = document.querySelector(selector)
    if (!el) return console.error('Target container not found.')
    const app = createApp(Greeter, props)
    app.mount(el)
  }
}
