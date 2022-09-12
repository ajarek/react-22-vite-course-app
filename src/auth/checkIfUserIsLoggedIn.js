import {refreshTokens} from './refreshTokens';
export const checkIfUserIsLoggedIn = () => {
    if(refreshTokens()) {
    return refreshTokens()
        .then(res => {
            if (res.error) {
                return res.error.message;
            }
            localStorage.setItem('ID_TOKEN_KEY',res.id_token);
            localStorage.setItem('REFRESH_TOKEN_KEY',res.refresh_token);
           
            return res;
        })
    }
}
