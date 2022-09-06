const PREFIX = 'coderoad'
const ID_TOKEN_KEY = `${PREFIX}-idToken`
const REFRESH_TOKEN_KEY = `${PREFIX}-refreshToken`

export const getIdToken = () => {
  return localStorage.getItem(ID_TOKEN_KEY)
}

export const setIdToken = (newToken) => {
  localStorage.setItem(ID_TOKEN_KEY, newToken)
}

export const removeIdToken = () => {
  return localStorage.removeItem(ID_TOKEN_KEY)
}

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_KEY)
}

export const setRefreshToken = (newToken) => {
  localStorage.setItem(REFRESH_TOKEN_KEY, newToken)
}

export const removeRefreshToken = () => {
  return localStorage.removeItem(REFRESH_TOKEN_KEY)
}
