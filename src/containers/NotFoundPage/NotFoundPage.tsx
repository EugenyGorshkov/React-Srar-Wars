import React from 'react';
import { useLocation } from 'react-router';

import img from './img/not-found.png'

import styles from './NotFoundPage.module.scss'

export const NotFoundPage:React.FC = () => {
    let location = useLocation();

    return (
        <>
            <img className={styles.img} src={img} alt="Not Found" />
            <p className={styles.text}>No match for <u>{location.pathname}</u></p>
        </>
    )
}



