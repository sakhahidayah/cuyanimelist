"use client";

import React from "react";
import YouTube from "react-youtube";
const VidioPlayer = ({ youtubeId }) => {
  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <YouTube
      videoId={youtubeId}
      opts={{
        ...opts,
        width: "100%",
        height: "100%",
      }}
      className="absolute top-0 left-0 w-full h-full"
      onReady={(event) => event.target.pauseVideo()}
    />
  );
};

export default VidioPlayer;
