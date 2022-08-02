import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { Favorite } from '@components';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL} from '@context';

import imgDroid from './img/droid.svg'
import imgLightsiber from './img/lightsaber.svg'
import imgSpaceStaition from './img/space-station.svg'

import styles from './Header.module.scss';

export const Header:React.FC = () => {
    const [icon, setIcon] = useState(imgDroid)
    const isTheme = useTheme();

    useEffect(() => {
        if (isTheme != null) {
            switch (isTheme.theme) {
                case THEME_LIGHT: setIcon(imgLightsiber); break;
                case THEME_DARK: setIcon(imgSpaceStaition); break;
                case THEME_NEITRAL: setIcon(imgDroid); break;
                default: setIcon(imgDroid)
            }
        }
        
    }, [isTheme])

    return (
        <div className={styles.container}>
            
            <Link to='/'>
                <img className={styles.logo} src={icon} alt="Star Wars" />
            </Link>
            
            <ul className={styles.list__container}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/people/?page=1'>People</NavLink></li>
                <li><NavLink to='/search'>Search</NavLink></li>
                <li><NavLink to='/not-found'>Not found</NavLink></li>
                <li><NavLink to='/fail'>Fail</NavLink></li>
                <li className={styles.loginEl}><NavLink to='/login'>Log In</NavLink></li>
            </ul>

            <Favorite />
        </div>
    )
}

