import React from 'react';
import { Link } from 'react-router-dom';

import { UiButton } from 'components/UI';

import styles from './PeopleNavigation.module.scss';

interface PeopleNavigationProps {
    getResource: Function,
    prevPage: string | null,
    nextPage: string | null,
    counterPage: number
}

const PeopleNavigation:React.FC<PeopleNavigationProps> = ({
    getResource,
    prevPage,
    nextPage,
    counterPage
}) => {
    const handleChangePrev = () => getResource(prevPage)
    const handleChangeNext = () => getResource(nextPage)
    return (
        <>
            <div className={styles.container}>
                <Link
                    to={`/people/?page=${counterPage - 1}`}
                    className={styles.buttons}
                >
                    <UiButton 
                        text='Previous'
                        onClick={handleChangePrev}
                        disabled={!prevPage}
                    />
                </Link>
                <Link
                    to={`/people/?page=${counterPage + 1}`}
                    className={styles.buttons}
                >
                    <UiButton 
                        text='Next'
                        onClick={handleChangeNext}
                        disabled={!nextPage}
                    />
                </Link>
            </div>
        </>
    )
}

export default PeopleNavigation;