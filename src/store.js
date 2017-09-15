import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist';
import { createFilter, createBlacklistFilter } from 'redux-persist-transform-filter';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middlewares = [
  createLogger(),
  thunk
];

// export default createStore(
//   rootReducer,
//   undefined,
//   compose(
//     applyMiddleware(...middlewares),
//     autoRehydrate(),
//     window.devToolsExtension ? window.devToolsExtension() : f => f 
//   )
// )

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(...middlewares),
    autoRehydrate(),
    window.devToolsExtension ? window.devToolsExtension() : f => f 
  )
)

// persistStore(store)

export default store;
