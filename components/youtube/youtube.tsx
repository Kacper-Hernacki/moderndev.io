"use client"
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface YouTubePlayerProps {
  videoId: string;
}

export const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {

  const onReady: YouTubeProps['onReady'] = (event) => {
    const player = event.target;
  };

  const onError: YouTubeProps['onError'] = (error) => {
    console.error('YouTube Player Error:', error);
  };

  const opts: YouTubeProps['opts'] = {
    playerVars: {
      autoplay: 0,
      controls: 0,
      modestbranding: 0,
      rel: 0,
      showinfo: 0,
    },
  };
  return (
    <YouTube
      videoId={videoId}
      onReady={onReady}
      onError={onError}
      opts={opts}
    />
  );
};
