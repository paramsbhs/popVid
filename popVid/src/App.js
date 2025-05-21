import React from 'react';
import './App.css';
import Video from './Video';
import testVideo from './test.mp4';

function App() {
  return (
    <div className="app">
     <h1>neatLearn</h1>
     <div className="app_videos">
      <Video url = {testVideo} channel="params" description="descriptionn" likes={111} shares={22} messages={33}/>
      <Video url = {testVideo}/>
     </div>
    {/* app container */}
      {/*videos*/}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
    </div>
  );
}

export default App;
