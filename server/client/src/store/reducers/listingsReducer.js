import {
  FETCH_LISTINGS,
  FETCH_ONE_LISTING,
  FETCH_FEATURED_LISTINGS,
  IS_LISTING_LIKED,
  SET_LISTING_LIKED,
  UNSET_LISTING_LIKED,
} from '../actions/actionTypes';

// import updateObject from '../../shared/utility';

// const setFilteredListingData = (state, action) => {
//   return updateObject(state, { filteredData: action.filteredData });
// };

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_LISTINGS:
      return {
        results: action.payload.results,
        data: action.payload.data?.docs,
      };
    case FETCH_FEATURED_LISTINGS:
      return {
        results: action.payload.results,
        data: action.payload.data?.docs,
      };
    case FETCH_ONE_LISTING:
      return { data: action.payload.data?.doc };
    case IS_LISTING_LIKED:
      return {
        data: { ...state.data, favorite: action.payload.data.favorite },
      };
    case SET_LISTING_LIKED:
      if (!state.results) {
        //adding favorities property to single listing
        return {
          data: {
            ...state.data,
            favorite: action.payload.data.favorite,
          },
        };
      }
      return { ...state };
    case UNSET_LISTING_LIKED:
      if (!state.results) {
        //adding favorities property to single listing
        return {
          data: {
            ...state.data,
            favorite: action.payload.data.favorite,
          },
        };
      }
      return { ...state };
    default:
      return state;
  }
}
