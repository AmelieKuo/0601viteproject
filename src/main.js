import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'

import './style.css'

createApp(App).use(router).mount('#app')