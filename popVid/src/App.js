import React, { useEffect } from 'react';
import './App.css';
import Video from './Video';
import testVideo from './test.mp4';
import axios from "./axios";

function App() {

  const[videos, setVideos] = useState([]);
  useEffect(() =>{
    async function fetchPosts(){
      const response = await axios.get('/v2/posts');
      setVideos(response.data);

      return response;
    }
    fetchPosts();
  }, []);

  console.log(videos);

  return (
    <div className="app">
     <h1>neatLearn</h1>
     <div className="app_videos">
      {videos.map(({url, channel, description, likes, messages, shares})=>(
        <Video>
          url = {url}
          channel = {channel}
          description = {description}
          likes = {likes}
          messages = {messages}
          shares = {shares}
        </Video>
      ))}
     </div>

    </div>
  );
}

export default App;
