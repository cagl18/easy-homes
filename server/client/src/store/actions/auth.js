import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  AUTH_USER_REQUEST,
  AUTH_FAILURE_REQUEST,
  USER_PROFILE_UPDATE_SUCCESS,
  DELETE_ME_SUCCESS,
} from './actionTypes';
// import { fetchListings } from './listings';
import easyHomesAxios from '../../shared/APIs/easyHomes';
// import Cookies from 'js-cookie';

const updateUserSession = (user_profile, jwt = null) => {
  localStorage.removeItem('user_profile');
  localStorage.setItem('user_profile', JSON.stringify(user_profile));
  if (jwt) {
    localStorage.removeItem('jwt');
    localStorage.setItem('jwt', jwt);
  }
  // Cookies.set('jwt', 'value', { expires: 7 });
};

const deleteCurrentUserSession = () => {
  localStorage.removeItem('jwt');
  localStorage.removeItem('user_profile');
  // Cookies.remove('jwt');
};

// Calls the API to get a token and
// dispatches actions to the auth reducer

export const loginUser = (credentials) => async (dispatch) => {
  dispatch(startUserRequest());
  try {
    const res = await easyHomesAxios.post('/api/v1/users/login', credentials);
    // console.log('res', res);
    // If login was successful, set the token in local storage and dispatch success notification to reducer
    const user = res.data.data?.user || null;
    const jwt = res.data.token;
    updateUserSession(user, jwt);

    setTimeout(() => dispatch(logoutUser()), 60 * 60 * 1000);
    dispatch(receiveLogin(user));
  } catch (err) {
    console.log('error', err);
    const errorMessage = err.response?.data.message || err.message;
    dispatch(authError(errorMessage));
  }
};

export const signUpUser = (user) => async (dispatch) => {
  dispatch(startUserRequest());
  try {
    const res = await easyHomesAxios.post('/api/v1/users/signup', this.user);
    // If login was successful, set the token in local storage and dispatch success notification to reducer
    console.log('res', res);
    const user = res.data.data?.user;
    const jwt = res.data.token;
    updateUserSession(user, jwt);
    dispatch(receiveLogin(res.data.data?.user));
  } catch (err) {
    console.log('eror', err);
    const errorMessage = err.response?.data.message || err.message;
    dispatch(authError(errorMessage));
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const res = await easyHomesAxios.get('/api/v1/users/me');
    const user = res.data.data?.doc;
    updateUserSession(user);
    dispatch(receiveLogin(user, null));
  } catch (err) {
    console.log('logout error', err);
    const errorMessage = err.response?.data.message || err.message;
    dispatch(authError(errorMessage));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await easyHomesAxios.get('/api/v1/users/logout'); //logout user on server
    // updateUserSession(null, ' ');
    deleteCurrentUserSession();
    dispatch(recieveLogOut());
    // dispatch(fetchListings()); //refreshing listing data after logout
  } catch (err) {
    console.log('logout error', err);
    const errorMessage = err.response?.data.message || err.message;
    dispatch(authError(errorMessage));
  }
};

export const deleteCurrentUser = () => async (dispatch) => {
  dispatch(startUserRequest());
  try {
    const res = await easyHomesAxios.delete('/api/v1/users/deleteMe');
    console.log('res', res);
    dispatch(recieveDeleteMe());
    setTimeout(() => dispatch(logoutUser()), 3000);
  } catch (err) {
    const errorMessage = err.response?.data.message || err.message;
    dispatch(authError(errorMessage));
  }
};

export const updateUserProfile = (userFields) => async (dispatch) => {
  dispatch(startUserRequest());
  // console.log('updateUserProfile user arg', user);
  try {
    const res = await easyHomesAxios.patch(
      '/api/v1/users/updateMe',
      userFields
    );

    // If request was successful, dispatch success notification to reducer
    const updatedUser = res.data?.user || null;
    localStorage.setItem('user_profile', JSON.stringify(updatedUser));
    dispatch(recieveUpdatedUserProfile(updatedUser));
  } catch (err) {
    const errorMessage = err.response?.data.message || err.message;
    // const resError = err.response?.data.error;
    // console.log('eror', err);
    dispatch(authError(errorMessage));
    if (
      errorMessage === 'User recently changed password! Please log in again.'
    ) {
      setTimeout(() => dispatch(logoutUser()), 3000);
    }
  }
};

export const changeUserPassword = (credentials) => async (dispatch) => {
  dispatch(startUserRequest());
  try {
    const res = await easyHomesAxios.patch(
      '/api/v1/users/updateMyPassword',
      credentials
    );
    // console.log('action creator', res.data);
    // If request was successful, dispatch success notification to reducer
    const user = res.data.data?.user || null;
    const jwt = res.data.token;
    updateUserSession(jwt, user);
    // localStorage.setItem('jwt', res.data.token);
    // localStorage.setItem('user_profile', JSON.stringify(user));
    // console.log('res data from changeUserPass', res.data?.data);
    dispatch(recieveUpdatedUserProfile(user));
  } catch (err) {
    const errorMessage = err.response?.data.message || err.message;
    console.log('eror', err);
    dispatch(authError(errorMessage));
    if (
      errorMessage === 'User recently changed password! Please log in again.'
    ) {
      setTimeout(() => dispatch(logoutUser()), 3000);
    }
  }
};

export const isJWTValid = (token) => {
  //get JWT payload
  if (!token) {
    return false;
  }

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));

    const tokenExpiresAt = new Date(payload.exp * 1000);
    // const tokenIssueAt = new Date(payload.iat * 1000);
    const now = new Date();

    if (tokenExpiresAt.getTime() > now.getTime()) {
      return true;
    }
  } catch (error) {
    // ignore
  }
  return false;
};

const startUserRequest = () => {
  const isAuthenticated = isJWTValid(localStorage.getItem('jwt'));
  return {
    type: AUTH_USER_REQUEST,
    payload: {
      isFetching: true,
      isAuthenticated,
      error: false,
      message: '',
    },
  };
};

const authError = (message) => {
  const isAuthenticated = isJWTValid(localStorage.getItem('jwt'));
  return {
    type: AUTH_FAILURE_REQUEST,
    payload: {
      isFetching: false,
      isAuthenticated,
      message,
      error: true,
    },
  };
};

const receiveLogin = (user, message = 'Login Successfully.') => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      isFetching: false,
      isAuthenticated: true,
      user,
      message,
    },
  };
};

const recieveLogOut = () => {
  return {
    type: LOGOUT_SUCCESS,
    payload: {
      isFetching: false,
      isAuthenticated: false,
      message: '',
      user: null,
      error: false,
    },
  };
};

const recieveDeleteMe = () => {
  return {
    type: DELETE_ME_SUCCESS,
    payload: {
      isFetching: false,
      message: 'Your account was deleted successfully.',
    },
  };
};

const recieveUpdatedUserProfile = (user) => {
  const isAuthenticated = isJWTValid(localStorage.getItem('jwt'));
  return {
    type: USER_PROFILE_UPDATE_SUCCESS,
    payload: {
      isFetching: false,
      isAuthenticated,
      message: 'Your profile has been updated successfully.',
      user,
    },
  };
};

//////////////////////
// import {
//   LOGIN_SUCCESS,
//   LOGOUT_SUCCESS,
//   AUTH_USER_REQUEST,
//   AUTH_FAILURE_REQUEST,
//   USER_PROFILE_UPDATE_SUCCESS,
//   DELETE_ME_SUCCESS,
// } from './actionTypes';
// // import axios from 'axios';
// import easyHomesAxios from '../../shared/APIs/easyHomes';
// import Cookies from 'js-cookie';

// const updateUserSession = (jwt, user_profile) => {
//   // localStorage.removeItem('jwt');
//   // localStorage.setItem('jwt', jwt);
//   localStorage.removeItem('user_profile');
//   // Cookies.set('jwt', jwt);
//   localStorage.setItem('user_profile', JSON.stringify(user_profile));
// };

// const deleteCurrentUserSession = () => {
//   // localStorage.removeItem('jwt');
//   localStorage.removeItem('user_profile');
//   Cookies.remove('jwt');
// };

// const getJwt = async () => {
//   await Cookies.get('jwt');
// };

// // Calls the API to get a token and
// // dispatches actions to the auth reducer

// export const loginUser = (credentials) => async (dispatch) => {
//   dispatch(startUserRequest());
//   try {
//     const res = await easyHomesAxios.post('/api/v1/users/login', credentials);
//     console.log('res', res);
//     // If login was successful, set the token in local storage and dispatch success notification to reducer
//     const user = res.data.data?.user || null;
//     // localStorage.setItem('jwt', res.data.token);
//     localStorage.setItem('user_profile', JSON.stringify(user));

//     // setTimeout(() => dispatch(logoutUser()), 60 * 60 * 1000);
//     dispatch(receiveLogin(user));
//   } catch (err) {
//     console.log('error', err);
//     const errorMessage = err.response?.data.message || err.message;
//     dispatch(authError(errorMessage));
//   }
// };

// export const signUpUser = (user) => async (dispatch) => {
//   dispatch(startUserRequest());
//   try {
//     const res = await easyHomesAxios.post('/api/v1/users/signup', user);

//     // If login was successful, set the token in local storage and dispatch success notification to reducer
//     // localStorage.setItem('jwt', res.data.token);
//     localStorage.setItem('user_profile', JSON.stringify(res.data.data?.user));
//     dispatch(receiveLogin(res.data.data?.user));
//   } catch (err) {
//     console.log('eror', err);
//     const errorMessage = err.response?.data.message || err.message;
//     dispatch(authError(errorMessage));
//   }
// };

// export const logoutUser = () => async (dispatch) => {
//   try {
//     await easyHomesAxios.get('/api/v1/users/logout'); //logout user on server
//     // localStorage.removeItem('jwt');
//     // localStorage.removeItem('user_profile');
//     deleteCurrentUserSession();
//     dispatch(recieveLogOut());
//   } catch (err) {
//     console.log('logout error', err);
//     const errorMessage = err.response?.data.message || err.message;
//     dispatch(authError(errorMessage));
//   }
// };

// export const deleteCurrentUser = () => async (dispatch) => {
//   dispatch(startUserRequest());
//   try {
//     const res = await easyHomesAxios.delete('/api/v1/users/deleteMe');
//     console.log('res', res);
//     dispatch(recieveDeleteMe());
//     setTimeout(() => dispatch(logoutUser()), 3000);
//   } catch (err) {
//     const errorMessage = err.response?.data.message || err.message;
//     dispatch(authError(errorMessage));
//   }
// };

// export const updateUserProfile = (userFields) => async (dispatch) => {
//   dispatch(startUserRequest());
//   // console.log('updateUserProfile user arg', user);
//   try {
//     const res = await easyHomesAxios.patch(
//       '/api/v1/users/updateMe',
//       userFields
//     );

//     // If request was successful, dispatch success notification to reducer
//     const updatedUser = res.data?.user || null;
//     localStorage.setItem('user_profile', JSON.stringify(updatedUser));
//     dispatch(recieveUpdatedUserProfile(updatedUser));
//   } catch (err) {
//     const errorMessage = err.response?.data.message || err.message;
//     // const resError = err.response?.data.error;
//     // console.log('eror', err);
//     dispatch(authError(errorMessage));
//     if (
//       errorMessage === 'User recently changed password! Please log in again.'
//     ) {
//       setTimeout(() => dispatch(logoutUser()), 3000);
//     }
//   }
// };

// export const changeUserPassword = (credentials) => async (dispatch) => {
//   dispatch(startUserRequest());
//   try {
//     const res = await easyHomesAxios.patch(
//       '/api/v1/users/updateMyPassword',
//       credentials
//     );
//     // console.log('action creator', res.data);
//     // If request was successful, dispatch success notification to reducer
//     const user = res.data.data?.user || null;
//     const jwt = res.data.token;
//     updateUserSession(jwt, user);
//     // localStorage.setItem('jwt', res.data.token);
//     // localStorage.setItem('user_profile', JSON.stringify(user));
//     // console.log('res data from changeUserPass', res.data?.data);
//     dispatch(recieveUpdatedUserProfile(user));
//   } catch (err) {
//     const errorMessage = err.response?.data.message || err.message;
//     console.log('eror', err);
//     dispatch(authError(errorMessage));
//     if (
//       errorMessage === 'User recently changed password! Please log in again.'
//     ) {
//       setTimeout(() => dispatch(logoutUser()), 3000);
//     }
//   }
// };

// export const isJWTValid = (token) => {
//   //get JWT payload
//   if (!token) {
//     return false;
//   }

//   try {
//     const payload = JSON.parse(atob(token.split('.')[1]));
//     const tokenExpiresAt = new Date(payload.exp * 1000);
//     const tokenIssueAt = new Date(payload.iat * 1000);

//     console.log(
//       'token',
//       token,
//       'tokenExpiresAt',
//       tokenExpiresAt,
//       'tokenIssueAt',
//       tokenIssueAt
//     );

//     console.log(
//       'tokenExpiresAt.getTime() > tokenIssueAt.getTime()',
//       tokenExpiresAt.getTime() > tokenIssueAt.getTime()
//     );
//     if (tokenExpiresAt.getTime() > tokenIssueAt.getTime()) {
//       return true;
//     }
//   } catch (error) {
//     // ignore
//   }
//   console.log('isJWTValid-outside try/catch');

//   return false;
// };

// const startUserRequest = () => {
//   // const isAuthenticated = isJWTValid(Cookies.get('jwt'));
//   const jwt = getJwt();
//   const isAuthenticated = isJWTValid(jwt);
//   console.log('token', jwt, 'isAuthenticated', isAuthenticated);
//   return {
//     type: AUTH_USER_REQUEST,
//     payload: {
//       isFetching: true,
//       isAuthenticated,
//       // isAuthenticated: isJWTValid(Cookies.get('jwt')),
//       error: false,
//       message: '',
//     },
//   };
// };

// const authError = (message) => {
//   const isAuthenticated = isJWTValid(Cookies.get('jwt'));
//   console.log(
//     'token',
//     Cookies.get('jwt'),
//     'isAuthenticated',
//     isJWTValid(Cookies.get('jwt'))
//   );
//   return {
//     type: AUTH_FAILURE_REQUEST,
//     payload: {
//       isFetching: false,
//       isAuthenticated,
//       message,
//       error: true,
//     },
//   };
// };

// const receiveLogin = (user) => {
//   return {
//     type: LOGIN_SUCCESS,
//     payload: {
//       isFetching: false,
//       isAuthenticated: true,
//       user,
//       message: 'Login Successfully.',
//     },
//   };
// };

// const recieveLogOut = () => {
//   return {
//     type: LOGOUT_SUCCESS,
//     payload: {
//       isFetching: false,
//       isAuthenticated: false,
//       message: '',
//       user: null,
//       error: false,
//     },
//   };
// };

// const recieveDeleteMe = () => {
//   return {
//     type: DELETE_ME_SUCCESS,
//     payload: {
//       isFetching: false,
//       message: 'Your account was deleted successfully.',
//     },
//   };
// };

// const recieveUpdatedUserProfile = (user) => {
//   console.log(
//     'token',
//     Cookies.get('jwt'),
//     'isAuthenticated',
//     isJWTValid(Cookies.get('jwt'))
//   );
//   const isAuthenticated = isJWTValid(Cookies.get('jwt'));

//   return {
//     type: USER_PROFILE_UPDATE_SUCCESS,
//     payload: {
//       isFetching: false,
//       isAuthenticated,
//       message: 'Your profile has been updated successfully.',
//       user,
//     },
//   };
// };
