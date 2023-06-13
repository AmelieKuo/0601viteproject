<script setup>
</script>

<template>

    <section
        class="p-40px col-start-1 col-end-3 row-start-2 row-end-3 lg:col-start-2 flex flex-col justify-center items-center">
        <h1 class="font-bold text-36px m-b-24px leading-[1] lg:text-60px">註冊</h1>
        <V-Form class="flex flex-col gap-10px max-w-900px min-w-300px">
            <div>
                <label name="name" class="block font-bold mb-2" for="">姓名</label>
                <V-Field name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="請輸入帳號" rules="required"/>
                <V-ErrMsg name="name"/>
            </div>
            <div>
                <label name="username" class="block font-bold mb-2" for="">帳號</label>
                <V-Field name="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="請輸入帳號" rules="required"/>
                <V-ErrMsg name="username"/>
            </div>
            <div>
                <label name="password" class="block font-bold mb-2" for="">密碼</label>
                <V-Field name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="請輸入密碼" rules="required"/>
                <V-ErrMsg name="password"/>
            </div>
            <div class="flex gap-15px md:gap-10px m-[20px_auto_0px_auto] flex-col md:flex-row md:items-end">
                <button class="bg-[#EFC862] hover:opacity-70 text-black font-bold py-2 px-4 rounded w-150px" type="submit">註冊</button>
                <router-link
                    class="text-[#EFC862] md:text-white md:underline hover:text-white md:hover:text-[#EFC862]"
                    to="/login">已有帳號？前往登入</router-link>
            </div>
        </V-Form>
    </section>

</template>