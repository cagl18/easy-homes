import * as actionTypes from './actionTypes';

export const setListingsFilter = filters => {
  return {
    type: actionTypes.SET_LISTINGS_FILTER,
    filters
  };
};

export const filterListingData = newData => {
  return {
    type: actionTypes.FILTER_LISTING_DATA,
    filteredData: newData
  };
};
