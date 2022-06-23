import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { makeConcurrentRequest, changeHTTP } from '@utils/network'

import styles from './PersonFilms.module.scss'

const PersonFilms = ({ personFilms }) => {
    const [filmsName, setFilmsName] = useState([]);

    useEffect(() => {
        (async () => {
            const filmsHTTPS = personFilms.map(url => changeHTTP(url));
            const responce = await makeConcurrentRequest(filmsHTTPS);

            setFilmsName(responce);
        })();
    },[])

    return (
        <>
            <div className={styles.wrapper}>
                <ul className={styles.list__container}>
                    {filmsName
                    .sort((a, z) => a.episode_id - z.episode_id)
                    .map(({ title, episode_id }) => (
                        <li key={episode_id} className={styles.list__item}>
                            <span className={styles.item__episode}>Episode {episode_id}</span>
                            <span className={styles.item__colon}> : </span>
                            <span className={styles.item__title}>{title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

PersonFilms.propTypes = {
    personFilms: PropTypes.array
}

export default PersonFilms;