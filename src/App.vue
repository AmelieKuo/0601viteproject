<script setup>
    import { ref } from "vue";

    // 接收 header > white 傳來的 data
    const idDate = ref('');

    function getNewsDate(idDate) {
        console.log(idDate);
    };


   // provide(/* key */ 'message', /* value */ 'hello!')


</script>


<template>
  <router-view @idDateChanged="getNewsDate"></router-view>
</template>