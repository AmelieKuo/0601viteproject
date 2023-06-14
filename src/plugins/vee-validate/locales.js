import { configure } from 'vee-validate';
import { localize, setLocale } from '@vee-validate/i18n';

// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
    generateMessage: localize({ zh_TW: zhTW }),
    validateOnInput: true,
  });

setLocale('zh_TW');
