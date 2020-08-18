import {
  AUTH_USER_REQUEST,
  AUTH_FAILURE_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP,
  USER_PROFILE_UPDATE_SUCCESS,
  SHOW_NOTIFICATION,
  DELETE_ME_SUCCESS,
} from '../actions/actionTypes';

import { isJWTValid } from '../actions/index';

const initialState = {
  isFetching: false,
  isAuthenticated: isJWTValid(localStorage.getItem('jwt')),
  message: null,
  user:
    localStorage.getItem('user_profile') !== 'undefined'
      ? JSON.parse(localStorage.getItem('user_profile'))
      : null,
  error: false,
};

export default function (state = initialState, action) {
  console.log('Auth reducer state', state, 'Action ', action);
  const newState = {
    ...state,
    ...action.payload,
  };
  switch (action.type) {
    case AUTH_USER_REQUEST:
      return newState;
    case AUTH_FAILURE_REQUEST:
      return newState;
    case LOGIN_SUCCESS:
      return newState;
    case LOGOUT_SUCCESS:
      return newState;
    case USER_PROFILE_UPDATE_SUCCESS:
      return newState;
    case DELETE_ME_SUCCESS:
      return newState;
    case SIGNUP:
      return newState;
    case SHOW_NOTIFICATION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
