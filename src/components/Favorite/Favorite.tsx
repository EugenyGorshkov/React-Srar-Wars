import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import icon from './img/bookmark.svg';

import styles from './Favorite.module.scss';

interface RootState {
    favoriteReducer: boolean
}

type ICount = string | number | null

export const Favorite:React.FC = () => {
    const [count, setCount] = useState<ICount>(null)

    const storeData = useSelector((state:RootState) => state.favoriteReducer);

    useEffect(() => {
        const length = Object.keys(storeData).length;

        length.toString().length > 2 ? setCount('...') : setCount(length);
    }, [])

    return (
        <div className={styles.container}>
            <Link to='favorites'>
                <span className={styles.counter}>{count}</span>
                <img className={styles.icon} src={icon} alt="Favorite" />
            </Link>
        </div>
    )
}
