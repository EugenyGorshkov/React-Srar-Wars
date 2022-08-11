import React, { useEffect } from 'react';
import cn from 'classnames'

import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from 'context';
import { getLocalStorage } from 'utils';

import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgFalcon from './img/falcon.jpg';

import styles from './ChooseSide.module.scss';

interface ChooseSideItemProps {
    classes:string,
    theme:string, 
    text:string, 
    img:string 
}

const ChooseSideItem: React.FC<ChooseSideItemProps> = ({ 
    classes,
    theme, 
    text, 
    img 
}) => {
    const isTheme = useTheme();

    const setLocalTheme = () => {
        return getLocalStorage('theme')
    }

    const handleClick = () => {
        if (isTheme != null) {
            isTheme.change(theme)
        }
    }

    useEffect(() => {
        if (isTheme != null) {
            isTheme.change(setLocalTheme())
        } 
    })

    return (
        <div
            className={cn(styles.item, classes)}
            onClick={handleClick}
        >
            <div className={styles.item__header}>{text}</div>
            <img className={styles.item__img} src={img} alt={text} />
        </div>
    )
}

const ChooseSide: React.FC = () => {
    const elements = [
        {
            theme: THEME_LIGHT,
            text: 'Light side',
            img: imgLightSide,
            classes: styles.item__light
        },
        {
            theme: THEME_DARK,
            text: 'Dark side',
            img: imgDarkSide,
            classes: styles.item__dark
        },
        {
            theme: THEME_NEITRAL,
            text: 'I`m Han Solo',
            img: imgFalcon,
            classes: styles.item__neitral
        }
    ]

    return (
        <div className={styles.container}>
            {elements.map(({theme, text, img, classes}, index) => (  
                <ChooseSideItem
                    key={index}
                    theme={theme}
                    text={text}
                    img={img}
                    classes={classes}
                />
            ))}
        </div>
    )
}

export default ChooseSide;