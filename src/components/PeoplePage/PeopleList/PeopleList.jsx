import React from 'react';
import PropTypes from 'prop-types';

import styles from './PeopleList.module.scss'

const PeopleList = ({ people }) => {
    return (
        <ul className={styles.list__container}>
            {people.map(({ id, name, img }) => 
                <li className={styles.list__item} key={id}>
                    <a href="#">
                        <img className={styles.person__img} src={ img } alt={name} />
                        <p className={styles.person__text}>{ name }</p>
                    </a>
                </li>
            )}
        </ul>
    )
}

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList;