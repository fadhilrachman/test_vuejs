import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueMarqueeTextComponent from 'vue-marquee-text-component'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('VueMarqueeText', VueMarqueeTextComponent)
app.mount('#app')
