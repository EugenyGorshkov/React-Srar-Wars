import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './UiVideo.module.scss';

interface UiVideoProps {
    src: string,
    classes: string,
    playbackRate: number
}

const UiVideo:React.FC<UiVideoProps> = ({
    src,
    classes,
    playbackRate = 1.0
}) => {

    const videoRef = useRef(null);

    const changePlayBackRate = (playbackRate: number, ref:any) => {
        ref.current.playbackRate = playbackRate;
    }

    useEffect(() => {
        if (videoRef.current !== null) {
            changePlayBackRate(playbackRate, videoRef)
        }
        // videoRef.current.playbackRate = playbackRate;
    }, [])

    return (
        <video 
            className={cn(styles.video, classes)}
            loop
            autoPlay
            muted
            ref={videoRef}
        >
            <source src={src}/>
        </video>
    )
}

export default UiVideo;