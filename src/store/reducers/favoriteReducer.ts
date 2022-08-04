import { omit } from 'lodash'
import { 
    ADD_PERSON_TO_FAVORITE,
    REMOVE_PERSON_FROM_FAVORITE
} from 'store';
import { getLocalStorage } from 'utils';

interface IPerson {
    name: string;
    img: string
}

interface IAction {
    type: string
    payload: IPerson
}

const initialState = getLocalStorage('store');

// Как выглядит стор

// const store = {
//     2: {
//         name: 'C-3PO',
//         img: ''
//     },
//     8: {
//         name: 'R5-D4',
//         img: ''
//     }
// }

// Как выглядит action

// action = {type: '', payload: {
//     2: {
//         name: 'C-3PO',
//         img: ''
//     },
// }}

const favoriteReducer = (state = initialState, action:IAction) => {

    switch(action.type) {
        case ADD_PERSON_TO_FAVORITE:
            return{
                ...state,
                ...action.payload
            }
            
        case REMOVE_PERSON_FROM_FAVORITE:
            // return omit(state, [action.payload])
        default:
            return state;
    }
}

export default favoriteReducer;