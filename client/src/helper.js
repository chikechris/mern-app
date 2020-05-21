
// save login respose (user's) name and tken to session storage
export const auth = (response, next) => {
  if(window !== 'undefined') {
    sessionStorage.setItem('token', JSON.stringify(response.data.token))
    sessionStorage.setItem('user', JSON.stringify(response.data.name))
  }
  next()
}
 
// acess token  from sees. storage 
export const getToken = () => {
  if (window !== 'undefined') {
    if(sessionStorage.getItem('token')) {
      return JSON.parse(sessionStorage.getItem('token'))
    }
    else {
      return false
    }
  }
}

// acess user name from sees. storage 
export const getUser = () => {
  if (window !== 'undefined') {
    if (sessionStorage.getItem('user')) {
      return JSON.parse(sessionStorage.getItem('user'))
    }
    else {
      return false
    }
  }
}

// remove token from session storage 
export const logout = next => {
  if (window !== 'undefined') {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
  }
  next()
}