import { FETCH_AGENTS, FETCH_ONE_AGENT } from '../actions/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_AGENTS:
      return {
        results: action.payload.results,
        data: action.payload.data.docs,
      };
    case FETCH_ONE_AGENT:
      return { data: action.payload.data.doc };
    default:
      return state;
  }
}
