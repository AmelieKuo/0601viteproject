import { createApp } from 'vue'
import App from './App.vue'

import { setupRouter } from './router'
import { setupPinia } from './stores';

import { setupSwal } from '@/plugins' // 外掛
import { setupVeeValidator } from '@/plugins/vee-validate' // 外掛


import '@unocss/reset/tailwind.css'
import 'virtual:uno.css';
import './style.css'

// 建立一個 setupApp 方法，將 use
async function setupApp(){
    const AppInstance = createApp(App)

    // use
    setupPinia(AppInstance)
    setupSwal(AppInstance)
    setupVeeValidator(AppInstance)

    await setupRouter(AppInstance)
    // use end

    AppInstance.mount('#app')
}

setupApp()


// async function setupApp() {
//     const AppInstance = createApp(App)
  
//     // use
//     AppInstance.use(pinia)
//     AppInstance.use(Swal)
  
//     await setupRouter(AppInstance)
//     // use end
  
//     AppInstance.mount('#app')
// }

// createApp(App)
//     .use(router)
//     .use(pinia)
//     .mount('#app')