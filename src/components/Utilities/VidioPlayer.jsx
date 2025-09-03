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
    <div className="relative w-full h-0 pb-[56.25%]">
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
    </div>
  );
};

export default VidioPlayer;
