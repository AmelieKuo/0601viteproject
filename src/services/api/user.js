import { url } from '@vee-validate/rules'
import { axiosInstance } from "../axiosInstance";

export const FETCH_USER ={
    login:(data)=> axiosInstance.post('/AllToken/Login',data),
    getUserInfo:()=> axiosInstance.get('/AllToken/GetLoginInfo')
}

// export const FETCH_USER = {
//     login: function (data) {
//         return axiosInstance
//             .post('/AllToken/Login', data)
//             .then(function (response) {
//                 return response;
//             })
//             .catch(function (error) {
//                 throw error;
//             });
//     },
//     getUserInfo: function () {
//         return axiosInstance
//             .post('/AllToken/GetLoginInfo')
//             .then(function (response) {
//                 return response;
//             })
//             .catch(function (error) {
//                 throw error;
//             });
//     }
// };