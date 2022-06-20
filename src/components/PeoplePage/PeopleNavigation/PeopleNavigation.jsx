import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
            <div>
                <Link
                    to={`/people/?page=${counterPage - 1}`}
                    className={styles.link}
                >
                    <button
                        className={styles.button}
                        disabled={!prevPage}
                        onClick={handleChangePrev}
                    >
                        Previous
                    </button>
                </Link>
                <Link
                    to={`/people/?page=${counterPage + 1}`}
                    className={styles.link}
                >
                    <button
                        className={styles.button}
                        disabled={!nextPage}
                        onClick={handleChangeNext}
                    >
                        Next
                    </button>
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