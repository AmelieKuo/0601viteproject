import axios from "axios";
import Swal from "sweetalert2";

// axios.create([config])
const axiosInstance = axios.create({
  baseURL: '/service/api',
});

// Add a request interceptor 請求攔截器
axiosInstance.interceptors.request.use(function (config) {
    // Do something 『 before request 』is sent
    console.log({config})
    console.log('請求成功')
    return config;
  }, function (error) {
    console.log('請求失敗')
    return Promise.reject(error);
  });

// Add a response interceptor 回應攔截器
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger >> 收到 2XX 內的的回應後續行為放這
    // Do something with response data  >> 收到的回應數據處理
    console.log('回應成功')
    return response;
  }, function (error) {
    console.log('回應失敗')
    return Promise.reject(error);
  });


  export { axiosInstance };

// import axios from "axios";
// import { Swal } from "@/plugins";

// const axiosInstance = axios.create({
//   baseURL: '/service/api',
// });

// axiosInstance.interceptors.request.use(function (config) {
//   console.log('請求成功');
//   const { headers, ...configSetting } = config
  
//   const accessToken = GET_COOKIES() || ''
  
//   if(accessToken) {
//     headers['Authorization'] = `Bearer ${accessToken}`
//   }
//   return {...configSetting, headers};
// }, function (error) {
//   console.log('請求失敗');

//   return Promise.reject(error);
// });

// axiosInstance.interceptors.response.use(function (response) {
//   console.log('回應成功');
//   const {data, status} = response
//   return {data, status};
// }, function (error) {
//   console.log('回應失敗');
//   const { response = {} } = error
//   const { status, data = {} } = response
//   Swal.fire({
//     icon: 'error',
//     text: data.message || '',
//     timer: 3000,
//     timerProgressBar: true
//   }).then(()=> {
//     if(status === 401) {
//       window.location.href = '/#/login'
//     }
//   })
//   return Promise.resolve({status, data});
// });

// export { axiosInstance }