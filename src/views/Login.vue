<script setup="setup">
import { useRouter, useRoute } from 'vue-router';
import { FETCH_USER } from '@/services';
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const data = ref('')

function loginSubmit(){

    // 登入 api
    // event.preventDefault(); 用 @submit.prevent 取代

    const userInput = {
        username: username.value,
        password: password.value
    };

    // FETCH_USER.login(userInput);

    // console.log(userInput)

    // 獲取 userInfo api
    FETCH_USER.getUserInfo();
    console.log(data);

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
