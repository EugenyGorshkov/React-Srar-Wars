import React from 'react';
import { useSelector } from 'react-redux';

import styles from './FavoritesPage.module.scss'

const FavoritesPage = () => {
    const storeData = useSelector(state => state.favoriteReducer);
    console.log(storeData);

    return (
        <>
            <h1>Favorites Page</h1>
        </>
    )
}



export default FavoritesPage;