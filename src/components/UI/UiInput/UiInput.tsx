import React from 'react';
import cn from 'classnames';

import icon from './img/cancel.svg';

import '../index.scss';
import styles from './UiInput.module.scss';

interface UiInputProps {
    value?: string,
    handleInputChange: Function,
    placeholder?: string,
    crossDisabled: string | boolean,
    classes?: string
}

const UiInput: React.FC<UiInputProps> = ({
    value,
    handleInputChange,
    placeholder,
    crossDisabled,
    classes
}) => (
    <div className={cn(styles.wrapper__input, classes)}>
        <input 
            type="text" 
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={placeholder}
            className={styles.input}
        />
        <img 
            onClick={() => value && handleInputChange('')}
            className={
                cn(styles.clear,
                !value && styles.clear__disabled, crossDisabled && styles.crossDisabled)
            }
            src={icon} 
            alt="cancel" 
        />
    </div>
)

export default UiInput;