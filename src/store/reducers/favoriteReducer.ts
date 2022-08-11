import { omit } from 'lodash'
import { ActionFavoritesType, FavoriteActions } from 'store/types/faviritesType';
import { getLocalStorage } from 'utils';

const initialState = getLocalStorage('store');

// action types ?????
const favoriteReducer = (state = initialState, action: FavoriteActions) => {

    switch(action.type) {
        case ActionFavoritesType.ADD_PERSON_TO_FAVORITE:
            return {
                ...state,
                ...action.payload
            }
            
        case ActionFavoritesType.REMOVE_PERSON_FROM_FAVORITE:
            return omit(state, [action.payload])
        default:
            return state;
    }
}

export default favoriteReducer;

// Как выглядит стор

// const store = {
//     "2": {
//         name: 'C-3PO',
//         img: ''
//     },
//     "8": {
//         name: 'R5-D4',
//         img: ''
//     }
// }

// Как выглядит action

// action = {type: '', payload: {
//     "2": {
//         name: 'C-3PO',
//         img: ''
//     },
// }}