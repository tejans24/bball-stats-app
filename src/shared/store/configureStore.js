import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';

import reducers from '../reducers'

export function configureClient(initialState) {

  const middleware = process.env.NODE_ENV != 'production'
                      ? [thunk, createLogger()] // dev
                      : [thunk]; // prod

  const finalCreateStore = compose(applyMiddleware(...middleware))(createStore);
  const store = finalCreateStore(reducers, initialState);

  return store;
}