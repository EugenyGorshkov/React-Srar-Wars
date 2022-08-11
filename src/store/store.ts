import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { setLocalStorage } from 'utils';
import { rootReducer } from './reducers';

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
);

store.subscribe(() => {
    setLocalStorage('store', store.getState().favoriteReducer)
})

export default store;