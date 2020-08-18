import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP,
  AUTH_USER_REQUEST,
  AUTH_FAILURE_REQUEST,
  USER_PROFILE_UPDATE_SUCCESS,
  DELETE_ME_SUCCESS,
} from './actionTypes';
// import axios from 'axios';
import EasyHomesAxios from '../../shared/APIs/EasyHomes';

// Calls the API to get a token and
// dispatches actions to the auth reducer

export const loginUser = (credentials) => async (dispatch) => {
  dispatch(startUserRequest());
  try {
    const res = await EasyHomesAxios.post('/api/v1/users/login', credentials);
    // If login was successful, set the token in local storage and dispatch success notification to reducer
    const user = res.data.data?.user || null;
    // if (!user) {
    //   console.log('login failed, user is', user);
    // }
    localStorage.setItem('jwt', res.data.token);
    localStorage.setItem('user_profile', JSON.stringify(user));
    dispatch(receiveLogin(user));
  } catch (err) {
    console.log('eror', err);
    const errorMessage = err.response?.data.message || err.message;
    dispatch(authError(errorMessage));
  }
};

export const signUpUser = (user) => async (dispatch) => {
  dispatch(startUserRequest());
  try {
    const res = await EasyHomesAxios.post('/api/v1/users/signup', user);

    // If login was successful, set the token in local storage and dispatch success notification to reducer
    localStorage.setItem('jwt', res.data.token);
    localStorage.setItem('user_profile', JSON.stringify(res.data.data?.user));
    dispatch(receiveLogin(res.data.data?.user));
  } catch (err) {
    console.log('eror', err);
    const errorMessage = err.response?.data.message || err.message;
    dispatch(authError(errorMessage));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const res = await EasyHomesAxios.get('/api/v1/users/logout');
    localStorage.removeItem('jwt');
    localStorage.removeItem('user_profile');
    dispatch(recieveLogOut());
  } catch (err) {
    console.log('logout error', err);
    const errorMessage = err.response?.data.message || err.message;
    dispatch(authError(errorMessage));
  }
};

export const deleteCurrentUser = () => async (dispatch) => {
  dispatch(startUserRequest());
  try {
    const res = await EasyHomesAxios.delete('/api/v1/users/deleteMe');
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
    const res = await EasyHomesAxios.patch(
      '/api/v1/users/updateMe',
      userFields
    );

    // If request was successful, dispatch success notification to reducer
    const updatedUser = res.data?.user || null;
    console.log('updatedUser', updatedUser, 'res.data', res.data);
    localStorage.setItem('user_profile', JSON.stringify(updatedUser));
    dispatch(recieveUpdatedUserProfile(updatedUser));
  } catch (err) {
    const errorMessage = err.response?.data.message || err.message;
    const resError = err.response?.data.error;
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
    const res = await EasyHomesAxios.patch(
      '/api/v1/users/updateMyPassword',
      credentials
    );
    // console.log('action creator', res.data);
    // If request was successful, dispatch success notification to reducer
    const user = res.data.data?.user || null;
    localStorage.setItem('jwt', res.data.token);
    localStorage.setItem('user_profile', JSON.stringify(user));
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
    const tokenExpiresAt = new Date(payload.exp);
    const tokenIssueAt = new Date(payload.iat);

    if (tokenExpiresAt > tokenIssueAt) {
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

const receiveLogin = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      isFetching: false,
      isAuthenticated: true,
      user,
      message: 'Login Successfully.',
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

// const showNotification = (message) => {
//   return { type: SHOW_NOTIFICATION, payload: { message } };
// };

// import {
//   LOGIN_SUCCESS,
//   LOGOUT_SUCCESS,
//   SIGNUP,
//   AUTH_USER_REQUEST,
//   AUTH_FAILURE_REQUEST,
//   USER_PROFILE_UPDATE_SUCCESS,
//   DELETE_ME_SUCCESS,
// } from './actionTypes';
// // import axios from 'axios';
// import EasyHomesAxios from '../../shared/APIs/EasyHomes';

// // Calls the API to get a token and
// // dispatches actions to the auth reducer

// export const loginUser = (credentials) => async (dispatch) => {
//   dispatch(startUserRequest());
//   try {
//     const res = await EasyHomesAxios.post('/api/v1/users/login', credentials);

//     // If login was successful, set the token in local storage and dispatch success notification to reducer
//     localStorage.setItem('jwt', res.data.token);
//     localStorage.setItem('user_profile', JSON.stringify(res.data.data?.user));
//     dispatch(receiveLogin(res.data.data?.user));
//   } catch (err) {
//     console.log('eror', err);
//     const errorMessage = err.response?.data.message || err.message;
//     dispatch(authError(errorMessage));
//   }
// };
// export const signUpUser = (user) => async (dispatch) => {
//   dispatch(startUserRequest());
//   try {
//     const res = await EasyHomesAxios.post('/api/v1/users/signup', user);

//     // If login was successful, set the token in local storage and dispatch success notification to reducer
//     localStorage.setItem('jwt', res.data.token);
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
//     const res = await EasyHomesAxios.get('/api/v1/users/logout');
//     localStorage.removeItem('jwt');
//     localStorage.removeItem('user_profile');
//     dispatch(recieveLogOut());
//   } catch (err) {
//     console.log('logout error', err);
//     dispatch(authError(err.message));
//   }
// };

// export const deleteCurrentUser = () => async (dispatch) => {
//   dispatch(startUserRequest());
//   isJWTValid(localStorage.getItem('jwt'));
//   try {
//     const res = await EasyHomesAxios.get('/api/v1/users/deleteMe');
//     dispatch(logoutUser());
//     dispatch(recieveDeleteMe());
//   } catch (err) {
//     // console.log('eror', err);
//     dispatch(authError(err.message));
//   }
// };

// export const updateUserProfile = (user) => async (dispatch) => {
//   dispatch(startUserRequest());
//   // console.log('updateUserProfile user arg', user);
//   try {
//     const res = await EasyHomesAxios.patch('/api/v1/users/updateMe', user);

//     // If request was successful, dispatch success notification to reducer
//     localStorage.setItem('user_profile', JSON.stringify(res.data.data?.user));
//     dispatch(recieveUpdatedUserProfile(res.data.data?.user));
//   } catch (err) {
//     const errorMessage = err.response?.data.message || err.message;
//     const resError = err.response?.data.error;
//     console.log('eror', err);
//     dispatch(authError(errorMessage));
//   }
// };

// export const changeUserPassword = (credentials) => async (dispatch) => {
//   if (!isJWTValid(localStorage.getItem('jwt'))) {
//     dispatch(logoutUser());
//   } //if JWTToken is invalid, logout user

//   dispatch(startUserRequest());
//   try {
//     const res = await EasyHomesAxios.patch(
//       '/api/v1/users/updateMyPassword',
//       credentials
//     );
//     // console.log('action creator', res.data);
//     // If request was successful, dispatch success notification to reducer
//     localStorage.setItem('jwt', res.data.token);
//     localStorage.setItem('user_profile', JSON.stringify(res.data.data?.user));
//     console.log('res data from changeUserPass', res.data?.data);
//     dispatch(recieveUpdatedUserProfile(res.data.data?.user));
//   } catch (err) {
//     const errorMessage = err.response?.data.message || err.message;
//     console.log('eror', err);
//     dispatch(authError(errorMessage));
//   }
// };

// export const isJWTValid = async (token) => {
//   //get JWT payload
//   if (!token) {
//     return false;
//   }

//   try {
//     const payload = JSON.parse(atob(token.split('.')[1]));
//     const now = new Date();
//     const tokenExp = new Date(payload.exp);
//     const userProfile =
//       localStorage.getItem('user_profile') !== 'undefined'
//         ? JSON.parse(localStorage.getItem('user_profile'))
//         : null;
//     const passLastChanged = new Date(userProfile.passwordChangedAt);
//     console.log(
//       'tokenExp',
//       tokenExp,
//       'passLastChanged',
//       passLastChanged,
//       'now',
//       now
//     );
//     if (tokenExp > now && tokenExp > passLastChanged) {
//       return true;
//     }
//   } catch (error) {
//     // ignore
//   }
//   return false;
// };

// const startUserRequest = () => {
//   return {
//     type: AUTH_USER_REQUEST,
//     payload: {
//       isFetching: true,
//       isAuthenticated: isJWTValid(localStorage.getItem('jwt')),
//       user:
//         localStorage.getItem('user_profile') !== 'undefined'
//           ? JSON.parse(localStorage.getItem('user_profile'))
//           : null,
//       error: false,
//       message: '',
//     },
//   };
// };

// const authError = (message) => {
//   return {
//     type: AUTH_FAILURE_REQUEST,
//     payload: {
//       isFetching: false,
//       isAuthenticated: isJWTValid(localStorage.getItem('jwt')),
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
//       isAuthenticated: false,
//       message: 'Your account was deleted successfully.',
//       user: null,
//     },
//   };
// };

// const recieveUpdatedUserProfile = (user) => {
//   return {
//     type: USER_PROFILE_UPDATE_SUCCESS,
//     payload: {
//       isFetching: false,
//       isAuthenticated: isJWTValid(localStorage.getItem('jwt')),
//       message: 'Your profile has been updated successfully.',
//       user,
//     },
//   };
// };

// // const showNotification = (message) => {
// //   return { type: SHOW_NOTIFICATION, payload: { message } };
// // };
