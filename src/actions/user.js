import { User } from '../utls/api'; 

export function register(userInput) {
  return async (dispatch) => {
    dispatch({ type: 'REGISTER' });

    try {
      const { data } = await User.registerUser(userInput);
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      
      console.log(data);
      return dispatch(registerSuccess(data));
    } catch (error) {
      return dispatch(registerError(error));
    }
  }
}

function registerSuccess(data) {
  return {
    type: 'REGISTER_SUCCESS',
    data
  }
}

function registerError(error) {
  return {
    type: 'REGISTER_ERROR',
    error
  }
}

export function login(userInput) {
  return async (dispatch) => {
    dispatch({ type: 'LOGIN' });

    try {
      const { data } = await User.loginUser(userInput);
      // localStorage.setItem('token', data.token)
      // localStorage.setItem('user', JSON.stringify(data.user))
      
      console.log(data);
      return dispatch(loginSuccess(data));
    } catch (error) {
      return dispatch(loginError(error));
    }
  }
}


export function loginSuccess(data) {
  return {
    type: 'LOGIN_SUCCESS',
    data
  }
}

function loginError(error) {
  return {
    type: 'LOGIN_ERROR',
    error
  }
}

export const LOGOUT = 'LOGOUT';

export function logout(){
  return({
    type: LOGOUT
  })
}

