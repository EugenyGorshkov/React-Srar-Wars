import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Favorite from '@components/Favorite';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL} from '@context/ThemeProvider';

import imgDroid from './img/droid.svg'
import imgLightsiber from './img/lightsaber.svg'
import imgSpaceStaition from './img/space-station.svg'

import styles from './Header.module.scss';

const Header = () => {
    const [icon, setIcon] = useState(imgDroid)
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon(imgLightsiber); break;
            case THEME_DARK: setIcon(imgSpaceStaition); break;
            case THEME_NEITRAL: setIcon(imgDroid); break;
            default: setIcon(imgDroid)
        }
    }, [isTheme])

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt="Star Wars" />
            <ul className={styles.list__container}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/people/?page=1'>People</NavLink></li>
                <li><NavLink to='/search'>Search</NavLink></li>
                <li><NavLink to='/not-found'>Not found</NavLink></li>
            </ul>

            <Favorite />
        </div>
    )
}

export default Header;