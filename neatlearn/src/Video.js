import React, { useRef, useState } from 'react'
import "./Video.css";
import testVideo from './test.mp4';
import VideoFooter from './VideoFooter';

function Video() {
const [playing, setPlaying] = useState(false);
const videoRef = useRef(null);

const handleVideoPress = () => {
    if(playing){
        videoRef.current.pause();
        setPlaying(false);
    }else{
        videoRef.current.play();
        setPlaying(true);
    }
}

  return <div className="video">
        <video 
        onClick={handleVideoPress}
        className="video_player"
        loop
        ref={videoRef}
        src= {testVideo}></video>

        <VideoFooter/>
        {/* Video Footer*/}
        {/* Video Sidebar */}
  </div> 
}

export default Video