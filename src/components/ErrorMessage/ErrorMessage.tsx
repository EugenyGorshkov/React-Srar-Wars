import React from 'react';

import { UiVideo } from 'components/UI';
import video from './video/han-solo.mp4'

import styles from './ErrorMessage.module.scss'

export const ErrorMessage:React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>
                The dark side of the force has won.<br />
                We cannot display data.<br />
                Come back when we fix evrything.
            </p>
            <UiVideo src={video} classes={styles.video} playbackRate={1.0}/>
        </div>
    )
}
