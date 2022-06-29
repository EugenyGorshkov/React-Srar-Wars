import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import loaderBlack from './img/loader-black.svg'
import loaderWhite from './img/loader-white.svg'
import loaderBlue from './img/loader-blue.svg'

import '../index.scss';
import styles from './UiLoading.module.scss'

const UiLoading = ({ 
    theme = 'white',
    isShadow = true,
    classes
}) => {
    const [loaderIcon, setLoaderIcon] = useState(null);

    useState(() => {
        switch (theme) {
            case 'black' : setLoaderIcon(loaderBlack); break;
            case 'white' : setLoaderIcon(loaderWhite); break;
            case 'blue' : setLoaderIcon(loaderBlue); break;
            default: setLoaderIcon(loaderWhite);
        }
    }, [])

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

UiLoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string,
}

export default UiLoading;