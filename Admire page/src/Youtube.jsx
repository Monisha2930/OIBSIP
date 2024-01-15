
import React from 'react';
import YouTube from 'react-youtube';

const ExampleVideo = () => {
 
  const videoId = '7bTvwJ1g0nw';

  
  const opts = {
    height: '500',
    width: '1300',
    playerVars: {
      
      autoplay: 3,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default ExampleVideo;
