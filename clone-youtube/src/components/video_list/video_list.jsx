import React from 'react';
import VideoItem from '../video_item/video_item';

const videoList = (props) => {
    const videos = props.videos;

    return (
        <div>
            <h2>목록</h2>
            <ul>
                {
                    videos.map((video) => (
                        <VideoItem key={video.id} video={video} />
                    ))
                }
            </ul>
        </div>
    );
};

export default videoList;