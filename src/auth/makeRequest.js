export const makeRequest = (url, options) => {
  return fetch(url, options)
    .then((response) => {
      return response.json()
        .then((data) => {
          if (!response.ok) {
            // eslint-disable-next-line no-throw-literal
            throw {
              data,
              code: response.status
            }
          }
          return data
        })
    })
}

export default makeRequest
