import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../shared/utility';
// import { fetchListings } from '../actions';
// import listingData from '../../js/components/data/dummy_data';

const listingData = [];

const initialState = {
  listingData,
  filteredData: listingData,
  searchResults: 0,
  // filtersParams: {
  //   searchTerm: '',
  //   minPrice: 0,
  //   maxPrice: 9999999999,
  //   minBeds: -1,
  //   maxBeds: 7,
  //   minBaths: 0
  // }
};

const setListingsFilters = (state, action) => {
  const updatedFilters = updateObject(state.filtersParams, action.filters);
  //   console.log('redux state', updatedFilters, 'action', action);
  return updateObject(state, { filtersParams: updatedFilters });
};

const setFilteredListingData = (state, action) => {
  return updateObject(state, { filteredData: action.filteredData });
};
const fetchSearchResults = (state, action) => {
  return updateObject(state, { searchResults: action.searchResults });
};

const reducer = (state = initialState, action) => {
  // console.log('redux state', state);
  switch (action.type) {
    case actionTypes.SET_LISTINGS_FILTER:
      return setListingsFilters(state, action);
    case actionTypes.FILTER_LISTING_DATA:
      return setFilteredListingData(state, action);
    case actionTypes.FETCH_SEARCH_RESULTS:
      return fetchSearchResults(state, action);
    default:
      return state;
  }
};

export default reducer;
