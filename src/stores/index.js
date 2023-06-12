import { createPinia } from 'pinia'

export function setupPinia(AppInstance) {
    const pinia = createPinia() 
    AppInstance.use(pinia)
}

export * from './userAuthStore' // 會員資料


// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import App from './App.vue'

// const pinia = createPinia()
// const app = createApp(App)

// app.use(pinia)
// app.mount('#app')

