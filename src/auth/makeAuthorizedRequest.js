import {fetchMethod} from './fetchMethod';

export const makeAuthorizedRequest = (method, url) => {

    const token = localStorage.getItem('ID_TOKEN_KEY');
    const containsQuestionMark = url.indexOf('?') !== -1
    const urlWithToken = `${url}${containsQuestionMark ? '&' : '?'}auth=${token}`
    return fetchMethod(method,urlWithToken)
    

}