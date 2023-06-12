<script setup="setup">
import { useRouter, useRoute } from 'vue-router';
import { FETCH_USER } from '@/services';
import { ref } from 'vue';
import { SET_COOKIES, REMOVE_COOKIES } from '@/plugins'
import { setupUserAuthStore } from '@/stores'
import Swal from "sweetalert2";


const username = ref('');
const password = ref('');

const router = useRouter();

const userAuthStore = setupUserAuthStore();
const { GET_USERINFO } = userAuthStore

async function loginSubmit(){

    // 登入 api
    // event.preventDefault(); 用 @submit.prevent 取代

    const userInput = {
        username: username.value,
        password: password.value
    };

    
    // 已在 axiosInstance 解構，在這裡取得需使用的資訊，data.accessToken、message、success
    const { data, message, success } = await FETCH_USER.login(userInput);

    if (!success){
        return
    }

    // 取得 data.accessToken
    const { accessToken } = data

    // 建立 COOKIES
    const cookieToken = await SET_COOKIES(accessToken);
    // console.log(cookieToken)

    // 調用 store 方法，取得 userInfo success
    const userInfo = await GET_USERINFO();
    // console.log(userInfo.success);
    if (userInfo.success){
        Swal.fire({
        icon: 'success',
        text: '登入成功',
        timer: 3000,
        timerProgressBar: true
    }).then(()=> {
        router.push('/')
    })
    }
};



</script>

<template>
    
    <section
        class="p-40px col-start-1 col-end-3 row-start-2 row-end-3 lg:col-start-2 flex flex-col justify-center items-center">
        <h1 class="font-bold text-36px m-b-24px leading-[1] lg:text-60px">登入頁</h1>
        <form class="flex flex-col gap-10px max-w-900px min-w-300px" @submit.prevent="loginSubmit">

            <div>
                <label name="username" class="block font-bold mb-2" for="">帳號</label>
                <input v-model="username" name="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="請輸入帳號" required>
            </div>
            <div>
                <label name="password" class="block font-bold mb-2" for="">密碼</label>
                <input v-model="password" name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="請輸入密碼" required>
            </div>

            <button class="bg-[#EFC862] hover:opacity-70 text-black font-bold py-2 px-4 rounded m-[30px_auto_0px_auto] w-150px" type="submit">登入</button>
        </form>
    </section>
    
</template>


<!-- <form class="flex flex-col gap-10px max-w-900px min-w-300px" action="" @submit="loginSubmit">

    <div>
        <label class="block font-bold mb-2" for="username">帳號</label>
        <input ref="usernameInput" v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text">
    </div>
    <div>
        <label class="block font-bold mb-2" for="password">密碼</label>
        <input ref="passwordInput" v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password">
    </div>

    <button class="bg-[#EFC862] hover:opacity-70 text-white font-bold py-2 px-4 rounded" type="submit">登入</button>
</form> -->
