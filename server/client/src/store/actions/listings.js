import {
  FETCH_LISTINGS,
  FETCH_ONE_LISTING,
  FETCH_FEATURED_LISTINGS,
  SET_LISTING_LIKED,
  UNSET_LISTING_LIKED,
  IS_LISTING_LIKED,
  LISTING_FAILURE_REQUEST,
  LISTING_START_REQUEST,
  GET_FAVORITE_LISTINGS,
} from './actionTypes';

import easyHomesAxios from '../../shared/APIs/easyHomes';
import { getUser } from './index';

export const setLikedForListingCollection = (data = [], favorites = {}) => {
  if (!data.length) return [];
  let newData = data.length ? [...data] : [data];
  // if (favorites) {
  newData = newData.map((l, i) => {
    if (favorites && favorites[l.id] === true) {
      l.favorite = true;
    } else {
      l.favorite = false;
    }

    return l;
  });
  // }
  return newData;
};

export const fetchListings = () => async (dispatch) => {
  dispatch(startListingRequest());
  const res = await easyHomesAxios.get(`/api/v1/listings`);
  const { data } = res;
  return dispatch({
    type: FETCH_LISTINGS,
    payload: { data, isFetching: false },
  });
};

export const fetchOneListing = (listingId) => async (dispatch) => {
  dispatch(startListingRequest());
  const res = await easyHomesAxios.get(`/api/v1/listings/${listingId}`);
  const { data } = res;
  return dispatch({
    type: FETCH_ONE_LISTING,
    payload: { data, isFetching: false },
  });
};

export const fetchFeaturedListings = () => async (dispatch) => {
  dispatch(startListingRequest());
  const res = await easyHomesAxios.get(
    `/api/v1/listings?limit=6&sort=-createdAt`
  );
  const { data } = res;
  return dispatch({
    type: FETCH_FEATURED_LISTINGS,
    payload: { data, isFetching: false },
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
    payload: { data: { ...res.data.data, id: listingId } },
  });
};

export const unSetListingLiked = (listingId) => async (dispatch) => {
  const res = await easyHomesAxios.delete(
    `/api/v1/listings/${listingId}/favorite`
  );
  dispatch(getUser());
  return dispatch({
    type: UNSET_LISTING_LIKED,
    payload: { data: { ...res.data.data, id: listingId } },
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
    dispatch(startListingRequest());
    const res = await easyHomesAxios.get('/api/v1/users/me/favorties');
    const { data } = res;

    return dispatch({
      type: GET_FAVORITE_LISTINGS,
      payload: { data, isFetching: false },
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

const startListingRequest = () => {
  return {
    type: LISTING_START_REQUEST,
    payload: {
      isFetching: true,
      message: null,
      error: false,
      // data: null,
    },
  };
};
