<script setup>
    import Header from "../components/Header.vue";
    import Sidebar from "../components/Sidebar.vue";
    import Footer from "../components/Footer.vue"

    import { ref } from "vue";
    import { defineEmits, defineProps } from "vue"; 
    
    // 接收 header 傳來的 data && 傳到 App vue

    const idDate = ref('');

    function getNewsDate(idDate) {
        // console.log(idDate);
        toApp(idDate);
        // toNews(idDate);
    };

    const emits = defineEmits(['idDateChanged']);

    function toApp(idDate) {
        emits('idDateChanged',idDate);
        // console.log(idDate);
    };


    // const getNewsDate = (idDate) => {
    //     console.log(idDate);
    //     toApp();
    // };


    // 接收 header 傳來的 data && 傳到 news info
    // const props = defineProps(['toNewsInfo']);

    // function toNews(idDate) {
    //     props.toNewsInfo = idDate;
    //     console.log(idDate);
    // };

</script>

<template>
    <!-- 漸層背景 -->
    <div
        class="font-sans color-white w-100% min-h-[100vh] bg-gradient-to-b from-[#C0C0C0] from-10% to-[#ffff] to-100%">

        <!-- catBg & grid -->
        <div
            class="w-100% h-100vh bg-[url(/Bg.png)] bg-no-repeat bg-right bg-contain grid grid-cols-[1fr_25%] grid-rows-[10%_1fr_40%] md:grid-rows-[10%_1fr_30%] lg:grid-cols-[11%_auto] lg:grid-rows-[11%_1fr_22%] lg:bg-[url(/Bg.png)] lg:bg-no-repeat lg:bg-center">

            <Sidebar></Sidebar>

            <Header @idDateChanged="getNewsDate"></Header>
            
            <!-- Main Content -->
            <router-view :idDate="idDate"></router-view>
            <!-- end: Main Content -->


            <Footer></Footer>

        </div>
        <!-- end: catBg & grid -->
    </div>
    <!-- end: 漸層背景 -->
</template>