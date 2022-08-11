import { combineReducers } from 'redux';

import favoriteReducer from './favoriteReducer';

export const rootReducer = combineReducers({
    favoriteReducer
});

export type RootState = ReturnType<typeof rootReducer>

