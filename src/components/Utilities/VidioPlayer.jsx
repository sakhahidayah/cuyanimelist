"use client";

import React from "react";
import YouTube from "react-youtube";
const VidioPlayer = ({ youtubeId, width, height }) => {
  const option = {
    width: width,
    height: height,
  };
  return (
    <>
      <div>
        <YouTube
          //   className="w-full "
          videoId={youtubeId}
          onReady={(event) => {
            event.target.pauseVideo();
          }}
          opts={option}
        />
      </div>
    </>
  );
};

export default VidioPlayer;
