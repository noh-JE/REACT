import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ( { video: {snippet} }) => {

    return (
        <li className={styles.video}>
            <a href="">
                <img src={snippet.thumbnails.default.url} alt=""/>
                <div className="info">
                    <strong>{snippet.title}</strong>
                    <p>{snippet.channelTitle}</p>
                </div>
            </a>
        </li>
    );
};

export default VideoItem;