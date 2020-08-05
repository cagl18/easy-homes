import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers =
  (process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose; //try to find redux_devtool or simply default to redux compose without devtools functionality

const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
