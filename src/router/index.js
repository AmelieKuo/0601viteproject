import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routeItems'
import { setupRoutePermission } from './permission'

const routerInstane = createRouter({
    history: createWebHashHistory(),
    routes, // routeItems: path、name 建在該檔案
    scrollBehavior() {        // 使用 vue router scrollBehavior 函式每次切換頁面會在 top: 0
        return { top: 0 }
    },
})

export function setupRouter(AppInstance){
    AppInstance.use(routerInstane)
    setupRoutePermission(routerInstane) // permission.js: 路由守衛器
}









//   切換頁面後會在視窗最上方
// router.afterEach((to, from) => {
//     window.scrollTo(0, 0);
// });