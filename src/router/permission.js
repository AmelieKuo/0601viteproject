import { setupUserAuthStore } from "../stores"
import { FETCH_USER } from '@/services';
import { GET_COOKIES } from '@/plugins';
import Swal from "sweetalert2";


// 路由守衛器
export function setupRoutePermission(routerInstance) {
    routerInstance.beforeEach(async (to, from) => {
      const userAuthStore = setupUserAuthStore();
      const { GET_USERINFO, FN_LOGOUT } = userAuthStore;
  
      const userAccessToken = GET_COOKIES() || '';
  
      // 要驗證的頁面
      if (to.path === '/location') {
        if (!userAccessToken) {
          await Swal.fire({
            icon: 'warning',
            text: '請先登入',
            timer: 1000,
            timerProgressBar: true
          });
          return '/login';
        } else {
          GET_USERINFO().then(userInfo => {
            const { status } = userInfo;
            if (status === 200) {
                return true;
            } else {
              FN_LOGOUT().then(() => {
                return '/login';
              });
            }
          });
        }
      }
  
      // 登入後無法進入登入頁
      if (to.path === '/login') {
        if (userAccessToken) {
          return false
        } else {
          return true
        }
      }
    });
}
  




// 要進入的頁面是需登入的頁面
//   if (to.path === '/location') {
//     if (userAccessToken) {
//         next();
//     } else {
//         Swal.fire({
//             icon: 'warning',
//             text: '請先登入',
//             timer: 3000,
//             timerProgressBar: true
//         }),
//         next('/login');
//     }
//   }


// if (to.meta.requiresAuth) {     const isLoggedIn = checkCookie();  檢查是否有
// cookie 資料     if (isLoggedIn) {         next();  登入前往 path     } else {
// alert("請登入");  如果未登入，彈出提示請登入     } } else {     next();  如果目標路由不需要驗證，直接前往 }
// 讀取 Cookie function checkCookie() {     const cookieString = document.cookie;
// return null; }