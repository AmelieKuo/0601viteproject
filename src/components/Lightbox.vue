<script setup>
import { ref } from 'vue';

const props = defineProps({
    modalValue:{
        type: Boolean,
        default: false,
    },
    imageUrl:{
        type:String,
        default:'/default_catHands.png',
    }
});

const emits = defineEmits(['update:modalValue','closeValue'])

function closeModal(){
    emits('update:modalValue',false)
}

</script>

<template>
    <section v-if="modalValue">
        <!-- :class="modal  === true ? 'block fixed' : 'hidden static'"  -->
        <div class="fixed top-0 left-0 bg-black/40 z-99 h-full w-full">
            <div class="flex items-center justify-center h-full w-full">
                <div class="bg-white max-w-600px max-h-400px w-70% h-40% relative rounded-10px p-20px flex flex-col gap-20px justify-center items-center">
                    <div @click="closeModal" class="absolute bg-gray p-10px rounded-full max-w-35px max-h-35px top-16px right-16px hover:opacity-80">
                        <img src="/close.svg" alt="" class="w-100% block">
                    </div>
                    <div class="w-120px rounded-full overflow-hidden">
                        <img :src="imageUrl" alt="" class="w-100% block">
                    </div>
                    <slot name="title">
                        <h3 class="text-green-700 font-bold text-28px">注意！貓貓可愛</h3>
                    </slot>
                    <slot name="content">
                        <p class="text-gray text-16px max-w-80%">養一隻貓貓你會每天早上都早起，養一隻貓貓你會每天早上都早起，養一隻貓貓你會每天早上都早起</p>
                    </slot>
            
                    <div class="flex gap-20px">
                        <button class="min-w-100px bg-gray-300 p-[10px_20px] rounded-10px text-black font-bold shadow-sm shadow-light-50 text-20px hover:bg-gray-400">
                            <slot name="leftBtn">
                                不同意
                            </slot>
                        </button>
                        <button class="min-w-100px bg-green-300 p-[10px_20px] rounded-10px text-black font-bold shadow-sm shadow-light-50 text-20px hover:bg-green-400">
                            <slot name="rightBtn">
                                同意
                            </slot>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>