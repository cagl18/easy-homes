import {
  AUTH_USER_REQUEST,
  AUTH_FAILURE_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP,
} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('jwt_token') ? true : false,
  message: null,
  user: null,
};

export default function (state = initialState, action) {
  // console.log('Auth reducer state', state, 'Action ', action);
  switch (action.type) {
    case AUTH_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      };
    case AUTH_FAILURE_REQUEST:
      return {
        isFetching: false,
        isAuthenticated: false,
        message: action.message,
      };
    case LOGIN_SUCCESS:
      // console.log('login reducer', action.payload.data);
      return {
        isFetching: false,
        message: '',
        isAuthenticated: true,
        user: action.payload.data.user,
      };
    case LOGOUT_SUCCESS:
      return {
        isFetching: false,
        message: '',
        isAuthenticated: false,
        user: action.payload.user,
      };
    case SIGNUP:
      return { data: action.payload.data.user };
    default:
      return state;
  }
}
