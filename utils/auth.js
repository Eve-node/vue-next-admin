import Cookies from 'js-cookie';

const env = process.env.NODE_ENV;
const TokenKey = 'token_' + env;

export function getToken() {
    return Cookies.get(TokenKey);
}

export function setToken(token) {
    return Cookies.set(TokenKey, token);
}

export function removeToken() {
    return Cookies.remove(TokenKey);
}
