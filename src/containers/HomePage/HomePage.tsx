import React from 'react';

import { ChooseSide } from 'components/HomePage';

import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
    return (
        <>
            <h1 className='header__text'>Home Page</h1>

            <ChooseSide />
        </>
    )
}

export default HomePage;