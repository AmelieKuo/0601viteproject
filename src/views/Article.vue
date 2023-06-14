<script setup>
import Lightbox from '../components/Lightbox.vue'
import { ref } from 'vue'

const modalValue = ref(false)

function openLightbox(){
    modalValue.value = true;
}

const imageUrl = ref('/three_catHands.png')

</script>


<template>
            
            <section class="p-40px col-start-1 col-end-3 row-start-2 row-end-3 lg:col-start-2">
                <h1 class="font-bold text-36px m-b-24px leading-[1] lg:text-72px">A-Article</h1>
                <h2 class="color-gray font-bold text-30px m-b-24px leading-[1] lg:text-68px">black_layout</h2>

                <div>
                    <button @click="openLightbox" class="bg-orange-300 p-[10px_20px] rounded-10px text-black font-bold shadow-sm shadow-light-50 text-28px hover:bg-orange-400">Pop-up</button>
                </div>
            </section>
            
            <Lightbox v-model:modalValue="modalValue" :imageUrl="imageUrl">
                <template #title>
                    <h3 class="text-pink-700 font-bold text-28px">注意！有貓！</h3>
                </template>
                <template #content>
                    <p class="text-gray text-16px max-w-80%">養一隻貓貓你會每天早上都早起，養一隻貓貓你會每天早上都早起，養一隻貓貓你會每天早上都早起</p>
                    <div class="absolute top-10px left-10px rotate-y-180 rounded-full overflow-hidden border-green-300 border-2 border-dashed w-30% max-w-150px">
                        <img src="/Bg.png" alt="" class="block">
                    </div>
                </template>
                <template #leftBtn>
                    NoNo
                </template>
                <template #rightBtn>
                    YesYes
                </template>
            
            </Lightbox>
</template>