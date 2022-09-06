import {fetchMethod} from "./fetchMethod";
const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${import.meta.env.VITE_KEY_ID}`;

export const signUp = (email, password) => {
    return fetchMethod('POST', SIGN_UP_URL, {
        email,
        password,
        returnSecureToken: true
    })
    
    
}