import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UiButton from '@ui/UiButton';

import styles from './PeopleNavigation.module.scss';

const PeopleNavigation = ({
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

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number,
}

export default PeopleNavigation;