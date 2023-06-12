import Cookies from "js-cookie";

// loginToken 是 cookie.name
const TokenKey = 'loginToken';

export function GET_COOKIES(){
    return Cookies.get(TokenKey);
}

export function SET_COOKIES(token){
    return Cookies.set(TokenKey,token)
}

export function REMOVE_COOKIES() {
    return Cookies.remove(TokenKey);
}