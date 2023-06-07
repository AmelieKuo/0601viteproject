<script setup>
    import Header from "../components/Header.vue";
    import Sidebar from "../components/Sidebar.vue";
    import Footer from "../components/Footer.vue"

</script>

<template>
    <!-- 漸層背景 -->
    <div
        class="font-sans color-white w-100% min-h-[100vh] bg-gradient-to-b from-[#313132] from-0% to-[#161618] to-100%">

        <!-- catBg & grid -->
        <div
            class="w-100% h-100vh bg-[url(/Bg.png)] bg-no-repeat bg-right bg-contain grid grid-cols-[1fr_25%] grid-rows-[10%_1fr_40%] md:grid-rows-[10%_1fr_30%] lg:grid-cols-[11%_auto] lg:grid-rows-[11%_1fr_22%] lg:bg-[url(/Bg.png)] lg:bg-no-repeat lg:bg-center">

            <Sidebar></Sidebar>

            <Header></Header>

            <!-- Main Content -->
            <router-view></router-view>
            <!-- end: Main Content -->

            <Footer></Footer>

        </div>
        <!-- end: catBg & grid -->
    </div>
    <!-- end: 漸層背景 -->
</template>
<style>
</style>
