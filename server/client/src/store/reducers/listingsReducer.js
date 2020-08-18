import {
  FETCH_LISTINGS,
  FETCH_ONE_LISTING,
  FETCH_FEATURED_LISTINGS,
} from '../actions/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_LISTINGS:
      return {
        results: action.payload.results,
        data: action.payload.data.docs,
      };
    case FETCH_FEATURED_LISTINGS:
      return {
        results: action.payload.results,
        data: action.payload.data?.docs,
      };
    case FETCH_ONE_LISTING:
      return action.payload.data.doc;

    default:
      return state;
  }
}
