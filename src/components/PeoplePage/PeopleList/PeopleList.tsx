import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PeopleList.module.scss';

interface people {
    id: number,
    name: string,
    img: string
}

interface PeopleListProps {
    people: Array<people>
}

const PeopleList:React.FC<PeopleListProps> = ({ people }) => {
    return (
        <ul className={styles.list__container}>
            {people.map(({ id, name, img }) => 
                <li className={styles.list__item} key={id}>
                    <Link to={`/people/${id}`}>
                        <img className={styles.person__img} src={ img } alt={name} />
                        <p className={styles.person__text}>{ name }</p>
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default PeopleList;