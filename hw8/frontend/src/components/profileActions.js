import resource from '../actions'

const updateHeadlineAction = (newHeadline) => (dispatch) =>{
  console.log("new headline is " + newHeadline.value)

  return resource('PUT', 'headline', {
      headline: newHeadline.value
  }).then(r =>
    {
      console.log(r)
      return (dispatch({
      type: 'updateHeadlineToDo',
      payload: r
  }))})
}

const logoutAction = (ownProps) => (dispatch) => resource('PUT', 'logout').then(r =>
  (dispatch({
    type: 'logoutToDo',
    //id: ownProps.id,
    payload: "OK"
})))

const loginAction = (username, password) => (dispatch) => {
  console.log(username, password)
  const loginObject = {username: username, password: password}

  return  resource('POST', 'login', loginObject).then(r =>
  (dispatch({
    type: 'loginToDo',
    //id: ownProps.id,
    payload: r
  })))
}

const registerAction = (user) => (dispatch) => {
const  registerObj = {
    username: user.username.value,
    email: user.email.value,
    dob: user.dob.value,
    zipcode: user.zip.value,
    password: user.password.value
  }
  console.log("Register Object is " + registerObj)
  return  resource('POST', 'register', registerObj).then(r =>
  (dispatch({
    type: 'registerToDo',
    //id: ownProps.id,
    payload: r
  })))
}

export {updateHeadlineAction, logoutAction, loginAction, registerAction}
