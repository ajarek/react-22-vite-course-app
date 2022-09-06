import { removeIdToken, removeRefreshToken } from './token'

export const logOut = () => {
  removeIdToken()
  removeRefreshToken()
  return Promise.resolve()
}

export default logOut
