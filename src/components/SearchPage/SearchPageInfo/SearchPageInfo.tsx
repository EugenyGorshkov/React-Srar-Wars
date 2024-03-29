import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './SearchPageInfo.module.scss';

interface people {
    id: string,
    name: string,
    img: string
}

interface SearchPageInfoProps {
    people: Array<people>
}

export const SearchPageInfo:React.FC<SearchPageInfoProps> = ({ people }) => (
    <>
        {people.length
            ? (
                <ul className={styles.list__contaner}>
                    {people.map(({id, name, img}) => (
                        <li className={styles.list__item} key={id}>
                            <Link to={`/people/${id}`}>
                                <img className={styles.person__photo}src={img} alt={name} />
                                <p className={styles.person__name}>{name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )
            : <h2 className={styles.person__comment}>No results</h2>
        }
    </>
)

// export default SearchPageInfo;