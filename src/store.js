import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middlewares = [
  createLogger({
    collapsed: true,
  }),
  thunk
];

export default createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(...middlewares),
    autoRehydrate(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)