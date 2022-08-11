import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { PeopleList } from 'components/PeoplePage'

import styles from './FavoritesPage.module.scss'
import { useTypedSelector } from 'hooks/useTypedSelector';



export const FavoritesPage:React.FC = () => {
    const [people, setPeople] = useState<any[]>([]);

    // const storeData = useSelector(state => state.favoriteReducer); до TS
    const storeData = useTypedSelector(store => store.favoriteReducer)

    useEffect(() => {
        const arr = Object.entries(storeData);

        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    ...item[1] as []
                }
            })

            setPeople(res)
        }

    }, [])

    return (
        <>
            <h1 className='header__text'>Favorites</h1>
            {people.length
                ? <PeopleList people={people} />
                : <h2 className={styles.comment}>No data</h2>}

        </>
    )
}
