import React from 'react';
import { UiInput } from 'components/UI';
import { UiButton } from 'components/UI';

import styles from './LogInPage.module.scss'

export const LogInPage:React.FC = () => {
    return (
        <>
            <div className={styles.login_wrapper}>
                <div className={styles.row}>
                    <span className={styles.text}>Login</span>
                    <UiInput
                        crossDisabled={true}
                        handleInputChange={() => {}}
                    />
                </div>
                <div className={styles.row}>
                    <span className={styles.text}>Password</span>
                    <UiInput
                        crossDisabled={true}
                        handleInputChange={() => {}}
                    />
                </div>
                <UiButton
                    text={'Autorize'}
                    classes={styles.btn_submit}
                    onClick={() => {}}
                    disabled={false}
                />
            </div>
        </>
    )
}
