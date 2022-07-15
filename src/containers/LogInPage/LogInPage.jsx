import React from 'react';
import UiInput from '@ui/UiInput';
import UiButton from '@ui/UiButton';

import styles from './LogInPage.module.scss'

const LogInPage = () => {
    return (
        <>
            <div className={styles.login_wrapper}>
                <div className={styles.row}>
                    <span className={styles.text}>Login</span>
                    <UiInput
                        crossDisabled={true}
                    />
                </div>
                <div className={styles.row}>
                    <span className={styles.text}>Password</span>
                    <UiInput
                        crossDisabled={true}
                    />
                </div>
                <UiButton
                    text={'Autorize'}
                    classes={styles.btn_submit}
                />
            </div>
        </>
    )
}



export default LogInPage;