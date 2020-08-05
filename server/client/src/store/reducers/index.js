import searchReducer from './search';
import agentsReducer from './agentsReducer';
import listingsReducer from './listingsReducer';
import authReducer from './authReducer.js';

export default {
  search: searchReducer,
  agents: agentsReducer,
  listings: listingsReducer,
  auth: authReducer,
};
