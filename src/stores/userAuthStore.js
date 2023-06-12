import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { FETCH_USER } from '@/services';
import { SET_COOKIES, REMOVE_COOKIES } from '@/plugins'
import { useRouter, useRoute } from 'vue-router';
import Swal from "sweetalert2";


export const setupUserAuthStore = defineStore('user-auth-store', function () {
    
    // 取得使用者資訊
    const userInfo = ref({});

    function GET_USERINFO() {
      return new Promise((resolve, reject) => {
        FETCH_USER.getUserInfo()
          .then(resp => {        
            const userInfo = resp;   
            // console.log(userInfo);         
            resolve(userInfo);
          })
          .catch(error => {
            console.error(error);
            reject(error);
          });
      });
    }

    // 登出
    function FN_LOGOUT () {
      return new Promise((resolve)=> {
        REMOVE_COOKIES()
        Swal.fire({
          icon: 'success',
          text: '已登出',
          timer: 3000,
          timerProgressBar: true
        }).then(()=> {
          location.reload();
          router.push('/')
        })
        resolve()
      })
    }

    return {
      GET_USERINFO,
      userInfo,
      FN_LOGOUT
    }
  });

// import { defineStore } from 'pinia'

// // 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// // 第一个参数是你的应用中 Store 的唯一 ID。
// export const useAlertsStore = defineStore('alerts', {
//   // 其他配置...
// })