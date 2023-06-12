import Swal from 'sweetalert2'

export function setupSwal(AppInstance){
    AppInstance.provide('$swal',Swal) // 使用 provide 讓其他頁面可透過 swal 調用 Swal
}

export { Swal }


// import { createApp } from 'vue'
// const app = createApp({})
// app.provide(/* 注入名 */ 'message', /* 值 */ 'hello!')