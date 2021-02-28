import searchReducer from './search';
import agentsReducer from './agentsReducer';
import listingsReducer from './listingsReducer';
import authReducer from './authReducer.js';

const combinedReducer = {
  search: searchReducer,
  agents: agentsReducer,
  listings: listingsReducer,
  auth: authReducer,
};

export default combinedReducer;
