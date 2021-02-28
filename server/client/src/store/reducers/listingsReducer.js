import {
  FETCH_LISTINGS,
  FETCH_ONE_LISTING,
  FETCH_FEATURED_LISTINGS,
  IS_LISTING_LIKED,
  SET_LISTING_LIKED,
  UNSET_LISTING_LIKED,
  LISTING_START_REQUEST,
  GET_FAVORITE_LISTINGS,
} from '../actions/actionTypes';
// import updateObject from '../../shared/utility';

// const setFilteredListingData = (state, action) => {
//   return updateObject(state, { filteredData: action.filteredData });
// };
import { setLikedForListingCollection } from '../actions/listings';

function listingReducer(state = { data: null }, action) {
  let newData, favoriteArr;
  switch (action.type) {
    case LISTING_START_REQUEST:
      return action.payload;
    case FETCH_LISTINGS:
      return {
        results: action.payload.results,
        data: action.payload.data.data?.docs,
        isFetching: action.payload.isFetching,
      };
    case FETCH_FEATURED_LISTINGS:
      return {
        results: action.payload.results,
        data: action.payload.data.data?.docs,
        isFetching: action.payload.isFetching,
      };
    case FETCH_ONE_LISTING:
      return {
        data: action.payload.data.data?.doc,
        isFetching: action.payload.isFetching,
      };
    case IS_LISTING_LIKED:
      return {
        data: { ...state.data, favorite: action.payload.data.favorite },
      };
    case SET_LISTING_LIKED:
      if (!state.data) return { ...state };
      favoriteArr = {
        [action.payload.data.id]: action.payload.data.favorite,
      };
      newData = !state.data.length ? [state.data] : [...state.data]; //copying state for single or multiple dataset
      newData = setLikedForListingCollection(newData, favoriteArr);
      newData = !state.data.length ? newData[0] : newData;
      // state for listing detail page
      if (!state.data.length) {
        return {
          ...state,
          newData,
        };
      }
      // state for listing search / filter page
      return {
        ...state,
        data: newData,
        results: newData.length,
      };

    case UNSET_LISTING_LIKED:
      if (!state.data) return { ...state };
      favoriteArr = {
        [action.payload.data.id]: action.payload.data.favorite,
      };
      newData = !state.data.length ? [state.data] : [...state.data]; //copying state for single or multiple dataset
      newData = setLikedForListingCollection(newData, favoriteArr);
      newData = !state.data.length ? newData[0] : newData;
      // state for listing detail page
      if (!state.data.length) {
        return {
          ...state,
          newData,
        };
      }
      // state for listing search / filter page
      return {
        ...state,
        data: newData,
        results: newData.length,
      };
    case GET_FAVORITE_LISTINGS:
      return {
        ...state,
        favorites: action.payload.data.data?.docs,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default listingReducer;
