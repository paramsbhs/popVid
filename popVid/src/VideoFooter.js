import React from 'react'
import "./VideoFooter.css"
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

function VideoFooter({channel, description}) {
  return <div className="videoFooter">
        <div className="videoFooter__text">
            <h3>@{channel}</h3>
            <p>{description}</p>
        </div>

  </div>;
}

export default VideoFooter
