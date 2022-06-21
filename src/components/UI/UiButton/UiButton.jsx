import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames'

import '../index.scss'
import styles from './UiButton.module.scss'

const UiButton = ({ 
    text, 
    onClick, 
    disabled,
    theme='dark',
    classes,
}) => {
    return (
        <button
            className={cn(styles.button, styles[theme], classes)}
            disabled={disabled}
            onClick={onClick}
        >
            { text }
        </button>
    )
}

UiButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string,
}

export default UiButton;