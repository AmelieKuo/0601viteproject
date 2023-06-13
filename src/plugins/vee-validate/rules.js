import { defineRule } from "vee-validate";
import { required } from "@vee-validate/rules";

// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n';
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// 將當前 VeeValidate 的語系設定為繁體中文
// configure({
//     generateMessage: localize({ zh_TW: zhTW }),
//     validateOnInput: true,
//   });

localize({ zh_TW: zhTW });
setLocale('zh_TW');


defineRule('required', required)
