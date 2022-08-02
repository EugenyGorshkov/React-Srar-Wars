import React, { MouseEventHandler } from 'react';
import cn from 'classnames';

import '../index.scss';
import styles from './UiButton.module.scss';

interface UiButtonProps {
    text: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
    disabled: boolean,
    theme?: string,
    classes?: string,
}

const UiButton:React.FC<UiButtonProps> = ({ 
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

export default UiButton;