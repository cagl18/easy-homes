import * as actionTypes from './actionTypes';
import easyHomesAxios from '../../shared/APIs/easyHomes';

export const setListingsFilter = (filters) => {
  return {
    type: actionTypes.SET_LISTINGS_FILTER,
    filters,
  };
};

export const setFilteredListingData = (newData) => {
  return {
    type: actionTypes.FILTER_LISTING_DATA,
    filteredData: newData,
  };
};

export const fetchSearchResults = (query) => async (dispatch) => {
  const res = await easyHomesAxios.get(`/api/v1/search?q=${query}`);
  return dispatch({
    type: actionTypes.FETCH_SEARCH_RESULTS,
    searchResults: res.data,
  });
};
