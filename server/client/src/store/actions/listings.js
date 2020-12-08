import {
  FETCH_LISTINGS,
  FETCH_ONE_LISTING,
  FETCH_FEATURED_LISTINGS,
  SET_LISTING_LIKED,
  UNSET_LISTING_LIKED,
  IS_LISTING_LIKED,
  LISTING_FAILURE_REQUEST,
} from './actionTypes';

import easyHomesAxios from '../../shared/APIs/easyHomes';
import { getUser } from './index';

export const setLikedForListingCollection = (data, favorites) => {
  let newData = [...data];
  if (favorites) {
    newData = newData.map((l, i) => {
      if (favorites[l.id] === true) {
        l.favorite = true;
      } else {
        l.favorite = false;
      }

      return l;
    });
  }
  return newData;
};

// export const setLikedForListingCollection = (data, favorites) => {
//   let newData = [...data];
//   if (favorites) {
//     newData = newData.map((l, i) => {
//       const index = favorites.indexOf(l.id);

//       if (index > -1) {
//         l.favorite = true;
//       } else {
//         l.favorite = false;
//       }

//       return l;
//     });
//   }
//   return newData;
// };

export const fetchListings = () => async (dispatch) => {
  const res = await easyHomesAxios.get(`/api/v1/listings`);
  return dispatch({
    type: FETCH_LISTINGS,
    payload: res.data,
  });
};

export const fetchOneListing = (listingId) => async (dispatch) => {
  const res = await easyHomesAxios.get(`/api/v1/listings/${listingId}`);
  return dispatch({
    type: FETCH_ONE_LISTING,
    payload: res.data,
  });
};

export const fetchFeaturedListings = () => async (dispatch) => {
  const res = await easyHomesAxios.get(
    `/api/v1/listings?limit=6&sort=-createdAt`
  );

  return dispatch({
    type: FETCH_FEATURED_LISTINGS,
    payload: res.data,
  });
};

export const setListingLiked = (listingId) => async (dispatch) => {
  const res = await easyHomesAxios.patch(
    `/api/v1/listings/${listingId}/favorite`
  );

  // console.log('res', res);
  if (res.status === 401) {
    //log out user.
  }

  dispatch(getUser());
  return dispatch({
    type: SET_LISTING_LIKED,
    payload: { data: { ...res.data.data, listingId } },
  });
};

export const unSetListingLiked = (listingId) => async (dispatch) => {
  const res = await easyHomesAxios.delete(
    `/api/v1/listings/${listingId}/favorite`
  );
  dispatch(getUser());
  return dispatch({
    type: UNSET_LISTING_LIKED,
    payload: { data: { ...res.data.data, listingId } },
  });
};

export const isListingLiked = (listingId) => async (dispatch) => {
  const res = await easyHomesAxios.get(
    `/api/v1/listings/${listingId}/favorite`
  );

  return dispatch({
    type: IS_LISTING_LIKED,
    payload: { data: { ...res.data.data, listingId } },
  });
};

export const getUserFavorties = () => async (dispatch) => {
  try {
    const res = await easyHomesAxios.get('/api/v1/users/me/favorties');
    console.log('res', res);

    return dispatch({
      type: FETCH_LISTINGS,
      payload: res.data,
    });
    // updateUserSession(user);
    // dispatch(receiveLogin(user, null));
  } catch (err) {
    console.log('logout error', err);
    const errorMessage = err.response?.data.message || err.message;
    dispatch(listingError(errorMessage));
  }
};

const listingError = (message) => {
  return {
    type: LISTING_FAILURE_REQUEST,
    payload: {
      isFetching: false,
      message,
      error: true,
    },
  };
};
