import { fetchMethod } from "./fetchMethod";
const  REFRESH_TOKEN_URL = `https://identitytoolkit.googleapis.com/v1/token?key=${import.meta.env.VITE_KEY_ID}`
export const refreshTokens = () => {
    const refreshToken = localStorage.getItem('REFRESH_TOKEN_KEY')
    if (refreshToken) {
    return fetchMethod('POST',  REFRESH_TOKEN_URL, {
        grant_type: 'refresh_token',
        refresh_token:refreshToken,
    })
}
else {
    return
}
}
