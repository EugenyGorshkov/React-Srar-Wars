import React, { useState } from 'react';
import cn from 'classnames';

import loaderBlack from './img/loader-black.svg'
import loaderWhite from './img/loader-white.svg'
import loaderBlue from './img/loader-blue.svg'

import '../index.scss';
import styles from './UiLoading.module.scss';

interface UiLoadingProps {
    theme: string,
    isShadow: boolean,
    classes?: string
}

const UiLoading:React.FC<UiLoadingProps> = ({ 
    theme = 'white',
    isShadow = true,
    classes
}) => {
    const [loaderIcon, setLoaderIcon] = useState('');

    useState(() => {
        switch (theme) {
            case 'black' : setLoaderIcon(loaderBlack); break;
            case 'white' : setLoaderIcon(loaderWhite); break;
            case 'blue' : setLoaderIcon(loaderBlue); break;
            default: setLoaderIcon(loaderWhite);
        }
    })

    return (
        
        <>
            <img 
                className={cn(styles.loader, isShadow && styles.shadow, classes)}
                src={loaderIcon} 
                alt="loading" 
            />
        </>
    )
}

export default UiLoading;