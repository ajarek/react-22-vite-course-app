import {fetchMethod} from "./fetchMethod";
const SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_KEY_ID}`;

export const signIn = (email, password) => {
    return fetchMethod('POST', SIGN_IN_URL, {
        email,
        password,
        returnSecureToken: true
    })
    
        
        
    
}