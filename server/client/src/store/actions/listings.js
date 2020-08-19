import {
  FETCH_LISTINGS,
  FETCH_ONE_LISTING,
  FETCH_FEATURED_LISTINGS,
} from './actionTypes';
import EasyHomesAxios from '../../shared/APIs/EasyHomes';
import axios from 'axios';

// const BASE_URL = process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}` : '/';
// const BASE_URL = '/';

export const fetchListings = () => async (dispatch) => {
  const res = await EasyHomesAxios.get(`/api/v1/listings`);
  return dispatch({
    type: FETCH_LISTINGS,
    payload: res.data,
  });
};

export const fetchOneListing = (listingId) => async (dispatch) => {
  const res = await EasyHomesAxios.get(`/api/v1/listings/${listingId}`);
  return dispatch({
    type: FETCH_ONE_LISTING,
    payload: res.data,
  });
};

export const fetchFeaturedListings = () => async (dispatch) => {
  const res = await EasyHomesAxios.get(
    `/api/v1/listings?limit=6&sort=-createdAt`
  );
  console.log('fetchFeaturedListings res', res);
  console.log(
    '{process.env.PUBLIC_URL}:${process.env.PORT}',
    `${process.env.PUBLIC_URL}:${process.env.PORT}`
  );
  return dispatch({
    type: FETCH_FEATURED_LISTINGS,
    payload: res.data,
  });
};
