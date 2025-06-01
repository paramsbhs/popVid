import React, { useEffect, useState } from 'react'; // Added useState import
import './App.css';
import Video from './Video';
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('/v2/posts');
        setVideos(response.data);
        return response;
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }
    fetchPosts();
  }, []);

  console.log(videos);

  return (
    <div className="app">
      <h1>popVid</h1>
      <div className="app_videos">
        {videos.map((video) => (
          <Video
            key={video._id} // Added key prop
            url={video.url}
            channel={video.channel}
            description={video.description}
            likes={video.likes}
            messages={video.messages}
            shares={video.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;