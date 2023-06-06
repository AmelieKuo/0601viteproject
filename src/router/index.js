import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "home",
            path: "/",
            component: function() {
                return import('../views/Home.vue')
            }
        },
        {
            name: "article",
            path: "/article",
            component: function() {
                return import('../views/article.vue')
            }
        },
        {
            name: "about",
            path: "/about",
            component: function() {
                return import('../views/about.vue')
            }
        },
        {
            name: "location",
            path: "/location",
            component: function() {
                return import('../views/location.vue')
            },
            meta: {
                requiresAuth: true
            }
        },
        {
            name: "news",
            path: "/news/:ID",
            component: function() {
                return import('../views/news.vue')
            }
        },
        {
            name: "hello",
            path: "/hello",
            component: function() {
                return import('../components/HelloWorld.vue')
            }
        },
        {
            name: "demo",
            path: "/demo",
            component: function() {
                return import('../views/demo.vue')
            }
        }
    ]
  })


//   路由守衛器
router.beforeEach((to, from, next) => {

    if (to.meta.requiresAuth) {
        const isLoggedIn = checkCookie(); // 檢查是否有 cookie 資料

        if (isLoggedIn) {
            next(); // 登入前往 path
        } else {
            alert("請登入"); // 如果未登入，彈出提示請登入
        }
    } else {
        next(); // 如果目標路由不需要驗證，直接前往
    }

    // 讀取 Cookie
    function checkCookie() {
        const cookieString = document.cookie;
        return null;
    }
});

export default router