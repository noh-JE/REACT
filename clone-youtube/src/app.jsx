import { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import './public/css/app.css';

const App = () => {
    const [videos, setVideos] = useState();
    useEffect( () => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyCLvAdOl2peSqHoa67XeAMLLNbSeH4KN8Y&part=snippet&chart=mostPopular&maxResults=25", requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    }, []);

    return (
        <>
            <h1>Youtube Clone</h1>
            <VideoList videos={videos}  />
        </>
    );
};

export default App;
