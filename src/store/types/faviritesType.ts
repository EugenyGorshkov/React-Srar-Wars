export enum ActionFavoritesType {
    ADD_PERSON_TO_FAVORITE = 'ADD_PERSON_TO_FAVORITE',
    REMOVE_PERSON_FROM_FAVORITE = 'REMOVE_PERSON_FROM_FAVORITE'
}

interface AddPersonToFavorite {
    type: ActionFavoritesType.ADD_PERSON_TO_FAVORITE;
    payload: any; /*??????*/
}

interface RemovePersonFromFavorite {
    type: ActionFavoritesType.REMOVE_PERSON_FROM_FAVORITE;
    payload: string; /*??????*/
}

export type FavoriteActions = AddPersonToFavorite | RemovePersonFromFavorite