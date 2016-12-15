import fetch from "isomorphic-fetch"

export const url = 'http://localhost:3000'

  const resource = (method, endpoint, payload) =>{
    const options = {
      method,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    console.log(payload)
    if (payload) options.body = (payload)

    return fetch(`${url}/${endpoint}`, options)
      .then(r => {
        console.log(r)
      if (r.status ===200){
        if (r.headers.get('Content-Type').indexOf('json') > 0){
          return r.json
        }
        else {
          return r.text
        }
      }
      else {
        //to deebug
        console.log('${method} ${endpoint} ${r.statusText}')
        throw new Error(r.statusText)
      }
      })
  }

export default resource
