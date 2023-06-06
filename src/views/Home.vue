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

            <!-- left Menu -->
            <Sidebar></Sidebar>
            <!-- end:left Menu -->

            <!-- Main Menu -->
            <Header></Header>
            <!-- end:Main Menu -->

            <!-- Main Content -->
            <section class="col-start-1 col-end-3 row-start-2 row-end-3 lg:col-start-2">
                <div
                    class="flex items-start justify-between lg:p-[40px_20px_20px_20px] lg:h-100% lg:justify-around">
                    <div class="hidden max-w-[320px] w-100% lg:block">
                        <h2
                            class="text-28px leading-48px tracking-[0.1em] mb-24px border-b-1 border-solid border-[#707070] relative after:content-[''] after:w-50% after:h-1px after:bg-[#EFC862] after:absolute after:-bottom-1px after:left-0px">/ 01</h2>
                        <ul>
                            <li
                                class="text-13px font-[500px] leading-18px color-[#646464] p-[4px_0] hover:text-21px hover:leading-30px hover:color-white active:text-21px active:leading-30px active:color-white">About Cat</li>
                            <li
                                class="text-13px font-[500px] leading-18px color-[#646464] p-[4px_0] hover:text-21px hover:leading-30px hover:color-white active:text-21px active:leading-30px active:color-white">Senses</li>
                            <li
                                class="text-13px font-[500px] leading-18px color-[#646464] p-[4px_0] hover:text-21px hover:leading-30px hover:color-white active:text-21px active:leading-30px active:color-white">Behavior</li>
                        </ul>
                    </div>
                    <div class="p-[5%_40px] lg:p-[0%_0px_0%_40px] lg:max-w-400px">
                        <h1 class="font-bold text-36px m-b-24px leading-[1] lg:text-72px">Eat Everyday</h1>
                        <p class="text-12px leading-30px tracking-0.1em lg:text-21px">The cat is a
                            domestic species of small carnivorous mammal.It is the only domesticated species
                            in the family Felidae and is often referred to as the domestic cat to
                            distinguish it from the wild members of the family.</p>
                    </div>
                </div>
            </section>
            <!-- end: Main Content -->

            <!-- footer -->
            <Footer></Footer>
            <!-- end:footer -->

        </div>
        <!-- end: catBg & grid -->
    </div>
    <!-- end: 漸層背景 -->
</template>
<style>
h2{
  font-family: "Tuffy",sans-serif;
}
/* *{ outline: 1px solid greenyellow;} */
</style>


