<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { defineEmits, defineProps } from "vue"; 

  // menuToggle
  const menuisOpen = ref(false);

  function menuToggle(){
    menuisOpen.value = !menuisOpen.value;
    // console.log(menuisOpen.value)
  };


  // news/:id id產生&&推到 news/:id 
  const id = ref('');
  const idDate = ref('');

  function getID(){
    id.value = new Date().getTime().toString(); // 獲取當前時間的 ISO 字符串

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0]; // 將 2023-06-07T12:34:56.789Z 使用 "T" 进行字符串分割
    
    idDate.value = formattedDate;
    // console.log(idDate.value);
  };

  const router = useRouter();
  
  // 將 id 傳到父層
  const emits = defineEmits(['idDateChanged'], idDate.value);

  function toNewsPage() {
    getID();
    router.push({ name: 'newsInfo', params: { id: id.value } });
    // router.push({ path: '/news/' + id.value });

    emits('idDateChanged',idDate.value);
   };


</script>


<template>

    <header
        class="col-start-2 col-end-3 row-start-1 row-end-2 p-[8px_24px] lg:p-[40px_55px_0px_0px]">

        <!-- mobile 遮罩 -->
        <nav
            :class="menuisOpen === false ? 'after:hidden' : 'after:block'"
            id="menuParent"
            class="w-100% h-100% flex justify-center items-center after:content-[''] after:w-100vw after:h-100vh after:bg-white after:bg-opacity-40 after:absolute after:top-0px after:left-0px after:z-1 lg:leading-loose lg:justify-end lg:h-auto">

            <!-- hamburger -->
            <div class="w-100% lg:hidden" @click="menuToggle">
                <img
                    src="../../public/hamburger.svg"
                    alt=""
                    class="block m-l-auto h-auto w-24px hover:ease-in-out hover:duration-300 hover:scale-135"></div>

                <ul
                    :class="menuisOpen === false ? '-top-100%' : 'top-0'"
                    id="menu"
                    class="absolute bg-black w-100% min-h-300px right-0 -top-100% z-9 flex flex-col gap-20px p-24px box-border lg:static lg:bg-transparent lg:min-h-[auto] lg:flex lg:flex-row lg:justify-end lg:gap-55px lg:p-0px lg:w-auto">

                    <!-- close -->
                    <li class="h-30px lg:hidden" id="close" @click="menuToggle">
                        <img
                            src="../../public/close.svg"
                            alt=""
                            class="color-white text-white block m-l-auto hover:ease-in-out hover:duration-300 hover:scale-135"></li>

                        <li>
                            <router-link
                                to="/"
                                class="text-white text-18px hover:color-[#EFC862] hover:underline active:color-[#EFC862]"
                                :class="{'active:color-[#EFC862]': $route.name === 'home'}">Home</router-link>
                        </li>
                        <li>
                            <router-link
                                to="/article"
                                class="text-white text-18px hover:color-[#EFC862] hover:underline active:color-[#EFC862]"
                                :class="{'active:color-[#EFC862]': $route.name === 'article'}">A-Article</router-link>
                        </li>
                        <li
                            class="text-white text-18px hover:color-[#EFC862] hover:underline active:color-[#EFC862]">
                            <router-link
                                to="/about"
                                class="a-black"
                                :class="{'active:color-[#EFC862]': $route.name === 'about'}">B-About</router-link>
                        </li>
                        <li
                            class="text-white text-18px hover:color-[#EFC862] hover:underline active:color-[#EFC862]">
                            <router-link
                                to="/location"
                                class="a-black"
                                :class="{'active:color-[#EFC862]': $route.name === 'location'}">C-Location</router-link>
                        </li>
                        <li
                            class="text-white text-18px hover:color-[#EFC862] hover:underline active:color-[#EFC862]">
                            <a
                                @click="toNewsPage"
                                class="a-black"
                                :class="{'active:color-[#EFC862]': $route.name === 'news'}">D-News</a>

                            <!-- <router-link
                                to="news"
                                class="a-black"
                                :class="{'active:color-[#EFC862]': $route.name === 'location'}">D-News</router-link> -->


                        </li>
                        <li
                            class=" text-[#EFC862] text-18px hover:opacity-70 lg:px-15px lg:bg-[#EFC862] lg:b-rd-2 lg:text-black">
                            <router-link
                                to="/login"
                                class="a-black"
                                :class="{'text-[#EFC862] lg:text-orange-800': $route.name === 'login'}">Login</router-link>
                        </li>
                        <li>
                            <img src="../../public/zoom_in_24px.png" alt="" class="p-[10px_0] block"></li>
                        </ul>
                    </nav>
                </header>

            </template>