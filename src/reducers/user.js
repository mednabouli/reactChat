import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT
} from '../actions/user';

if (!global.window.localStorage) {
  global.window.localStorage = {
    getItem() { return '{}'; },
    setItem() {}
  };
}


const info = localStorage.getItem('token');

const initialState = {
  isLogged: info != null,
  loading: false,
  token: info,
  error: null,
  info: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER':
      return {
        ...state,
        loading: true
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogged: true,
        info: action.data.token
      };

    case 'REGISTER_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case 'LOGIN':
      return {
        ...state,
        loading: true
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogged: true,
        info: action.data
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case 'LOGOUT':
      return {
        isLogged: false,
        loading: false,
        token: null,
        error: null
      };
    default:
      return state;
  }
};
