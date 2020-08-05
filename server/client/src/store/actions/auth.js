import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP,
  AUTH_USER_REQUEST,
  AUTH_FAILURE_REQUEST,
} from './actionTypes';
import axios from 'axios';

export const loginUser = (credentials) => async (dispatch) => {
  dispatch(requestAuthUser());
  try {
    const res = await axios.post('/api/v1/users/login', credentials);
    console.log('action creator', res.data);
    // If login was successful, set the token in local storage
    localStorage.setItem('jwt_token', res.data.token);
    dispatch(receiveLogin(res.data));
  } catch (err) {
    console.log('eror', err);
    dispatch(authError(err.message));
  }
};

export const logoutUser = () => async (dispatch) => {
  const res = await axios.get('/api/v1/users/logout');
  localStorage.removeItem('jwt_token');
  return dispatch({ type: LOGOUT_SUCCESS, payload: res.data });
};

export const requestAuthUser = () => {
  return {
    type: AUTH_USER_REQUEST,
    loading: true,
    isAuthenticated: false,
    // message: action.payload.message,
    // user: action.payload.data.user,
  };
};

export const authError = (message) => {
  return {
    type: AUTH_FAILURE_REQUEST,
    isFetching: false,
    isAuthenticated: false,
    message,
  };
};

export const receiveLogin = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    payload,
  };
};
