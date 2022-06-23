import React from 'react';
import { useNavigate } from 'react-router';

import img from './img/left-arrow.svg'

import styles from './PersonLinkBack.module.scss'

const PersonLinkBack = () => {

    const navigate = useNavigate();
    const handleGoBack = (event) => {
        event.preventDefault();

        navigate(-1);
    }

    return (
        <>
            <a href="#" onClick={handleGoBack} className={styles.link}>
                <img src={img} alt="back" className={styles.link__img}/>
                <span className={styles.link__text}>Go back</span>
            </a>
        </>
    )
}

export default PersonLinkBack;