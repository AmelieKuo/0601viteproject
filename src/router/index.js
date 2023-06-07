import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [

        // 以下為 default.layout
        {
            path: '/',
            component: () => import('../layout/default.vue'),
            children: [
                {
                    name: 'home',
                    path: '',
                    component: () => import('../views/Home.vue')
                },
                {
                    name: 'article',
                    path: 'article',
                    component: () => import('../views/Article.vue')
                },
                {
                    name: 'about',
                    path: 'about',
                    component: () => import('../views/About.vue')
                },
                {
                    name: 'location',
                    path: 'location',
                    component: () => import('../views/Location.vue'),
                    meta: {
                        requiresAuth: true
                    },
                },
            ],
        },

        // 以下為 white.layout
        {
            path: '/',
            component: () => import('../layout/white.vue'),
            children: [
                {
                    name: 'newsIndex',
                    path: 'news',
                    component: () => import('../views/News.vue')
                },
                {
                    name: 'news',
                    path: 'news/:id',
                    component: () => import('../views/News.vue')
                },
            ],
        },
    ]
  })


//   路由守衛器
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        alert("請登入"); // 如果未登入，彈出提示請登入
        return;
    }
    
    next(); // 不需驗證
});


export default router























// if (to.meta.requiresAuth) {
//     const isLoggedIn = checkCookie(); // 檢查是否有 cookie 資料

//     if (isLoggedIn) {
//         next(); // 登入前往 path
//     } else {
//         alert("請登入"); // 如果未登入，彈出提示請登入
//     }
// } else {
//     next(); // 如果目標路由不需要驗證，直接前往
// }

// // 讀取 Cookie
// function checkCookie() {
//     const cookieString = document.cookie;
//     return null;
// }