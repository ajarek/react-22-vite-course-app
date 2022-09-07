import {fetchMethod} from "./fetchMethod";
const PASSWORD_RESET_EMAIL_URL = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${import.meta.env.VITE_KEY_ID}`;

export const sendPasswordResetEmail = (email) => {
    return fetchMethod('POST', PASSWORD_RESET_EMAIL_URL, {
        requestType: 'PASSWORD_RESET',
        email,
       
    });
    
}