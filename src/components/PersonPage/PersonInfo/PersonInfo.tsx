import React from 'react';
import PropTypes from 'prop-types';
import styles from './PersonInfo.module.scss';

interface personInfo {
    title: string,
    data: string
}

interface PersonInfoProps {
    personInfo: Array<personInfo>
}

const PersonInfo:React.FC<PersonInfoProps> = ({ personInfo }) => {
    return (
        <>
            <div className={styles.wrapper}>
                <ul className={styles.list__container}>
                    {personInfo.map(({ title ,data }) => (
                        data && (
                            <li className={styles.list__item} key={title}>
                                <span className={styles.item__title}>{title}</span>: {data}
                            </li>
                        )
                    ))}
                </ul>
            </div>
        </>
    )
}

export default PersonInfo;