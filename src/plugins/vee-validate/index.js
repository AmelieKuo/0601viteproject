import { Field, Form, ErrorMessage } from "vee-validate";
import './rules';
import './locales'

export function setupVeeValidator(AppInstance){
    AppInstance.component('V-Field',Field)
    AppInstance.component('V-Form',Form)
    AppInstance.component('V-ErrMsg',ErrorMessage)
};