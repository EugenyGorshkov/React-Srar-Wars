import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import cn from 'classnames';

import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL, useTheme } from 'context';
import imgDroid from './img/droid.svg';
import imgLightsiber from './img/lightsaber.svg';
import imgSpaceStaition from './img/space-station.svg';

import styles from './HeaderBurger.module.scss';


const HeaderBurger: React.FC = () => {
    const [activeBurger, setActiveBurger] = useState(false);
    const [icon, setIcon] = useState(imgDroid);
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
        
    }, [isTheme]);

    const activeHandler = () => {
        activeBurger ? setActiveBurger(false) : setActiveBurger(true)
    }

    return (
        <div className={styles.burger_wrapper}>
            <div 
                className={cn(styles.burger__icon, activeBurger ? styles._active : '')}
                onClick={activeHandler}
            >
                <span></span>
            </div>

            <Link to='/' className={styles.link_logo}>
                <img className={styles.logo} src={icon} alt="Star Wars" />
            </Link>

            
            <ul className={cn(styles.burger_body, activeBurger ? styles._active : '')} onClick={activeHandler}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/people/?page=1'>People</NavLink></li>
                <li><NavLink to='/search'>Search</NavLink></li>
                <li><NavLink to='/not-found'>Not found</NavLink></li>
                <li><NavLink to='/fail'>Fail</NavLink></li>
                <li><NavLink to='/login'>Log In</NavLink></li>
                <li><NavLink to='/favorites'>Favorites</NavLink></li>
            </ul>
            
        </div>

    )
}



export default HeaderBurger;