<script setup>

const props = defineProps({
  idDate: String
});


</script>


<template>

                <h1 class="font-bold text-36px m-b-24px leading-[1] lg:text-72px">
                    D-news
                </h1>
                <p>來自 Header 值 {{ idDate }}</p>
                <p>來自 App 值 {{ idDate }}</p>


                <!-- <h1 class="font-bold text-36px m-b-24px leading-[1] lg:text-72px">
                    D-news-{{ id }}-來自 router.path
                </h1> -->

                <!-- <h1 class="font-bold text-36px m-b-24px leading-[1] lg:text-72px">
                    D-news
                </h1> -->


</template>