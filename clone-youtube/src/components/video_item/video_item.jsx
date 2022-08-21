import React from 'react';

const VideoItem = (props) => {
    const video = props.video;

    return (
        <li>
            <h2>{video.snippet.title}</h2>
        </li>
    );
};

export default VideoItem;