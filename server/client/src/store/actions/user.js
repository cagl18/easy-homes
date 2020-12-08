// import {
//   LOGIN_SUCCESS,
//   LOGOUT_SUCCESS,
//   AUTH_USER_REQUEST,
//   AUTH_FAILURE_REQUEST,
//   USER_PROFILE_UPDATE_SUCCESS,
//   DELETE_ME_SUCCESS,
// } from './actionTypes';
// import easyHomesAxios from '../../shared/APIs/easyHomes';

// export const getUser = () => async (dispatch) => {
//   try {
//     const res = await easyHomesAxios.get('/api/v1/users/me');
//     const user = res.data.data?.doc;
//     updateUserSession(user);
//     dispatch(receiveLogin(user, null));
//   } catch (err) {
//     console.log('logout error', err);
//     const errorMessage = err.response?.data.message || err.message;
//     dispatch(authError(errorMessage));
//   }
// };
