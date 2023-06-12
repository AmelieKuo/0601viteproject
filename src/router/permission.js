// 路由守衛器
export function setupRoutePermission(routerInstane){
    routerInstane.beforeEach((to, from, next) => {
        
        if (to.meta.requiresAuth) {
            alert("請登入"); // 如果未登入，彈出提示請登入
            return;
        }
        
        next(); // 不需驗證
    }
)};




// if (to.meta.requiresAuth) {     const isLoggedIn = checkCookie();  檢查是否有
// cookie 資料     if (isLoggedIn) {         next();  登入前往 path     } else {
// alert("請登入");  如果未登入，彈出提示請登入     } } else {     next();  如果目標路由不需要驗證，直接前往 }
// 讀取 Cookie function checkCookie() {     const cookieString = document.cookie;
// return null; }