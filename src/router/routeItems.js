// router name path

export const routes = [

    // 以下為 default.layout
    {
        path: '/',
        component: () => import ('../layout/default.vue'),
        children: [
            {
                name: 'home',
                path: '',
                component: () => import ('../views/Home.vue')
            }, {
                name: 'article',
                path: 'article',
                component: () => import ('../views/Article.vue')
            }, {
                name: 'about',
                path: 'about',
                component: () => import ('../views/About.vue')
            }, {
                name: 'location',
                path: 'location',
                component: () => import ('../views/Location.vue'),
                // meta: {
                //     requiresAuth: true
                // }
            }, {
                name: 'login',
                path: 'login',
                component: () => import ('../views/Login.vue'),
                // meta: {
                //     requiresAuth: true
                // }
            }, {
                name: 'signup',
                path: 'signup',
                component: () => import ('../views/Signup.vue'),
                // meta: {
                //     requiresAuth: true
                // }
            }
        ]
    },

    // 以下為 white.layout
    {
        path: '/',
        component: () => import ('../layout/white.vue'),
        children: [
            {
                name: 'news',
                path: 'news',
                component: () => import ('../views/News.vue'),
                children:[
                    {
                        name: 'newsInfo',
                        path: ':id',
                        component: () => import ('../views/NewsInfo.vue')
                    },
                ]
            }
        ]
    }
]