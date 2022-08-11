import { ActionFavoritesType } from "store/types/faviritesType"

export const setPersonToFavorite = (person: {}) => ({
    type: ActionFavoritesType.ADD_PERSON_TO_FAVORITE,
    payload: person,
})

export const removePersonFromFavorive = (personId: any) => ({
    type: ActionFavoritesType.REMOVE_PERSON_FROM_FAVORITE,
    payload: personId,
})