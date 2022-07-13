import React from 'react';

import styles from './LogInPage.module.scss'

const LogInPage = () => {
    return (
        <>
            <div className={styles.login_wrapper}>
                <div className={styles.row}>
                    <span className={styles.text}>Login:</span>
                    <input type="text" placeholder='email@email.com' />
                </div>
                <div className={styles.row}>
                    <span className={styles.text}>Password:</span>
                    <input type="text" placeholder='password...' />
                </div>
            </div>
        </>
    )
}



export default LogInPage;