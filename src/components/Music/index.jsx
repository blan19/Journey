import React from "react";

const Music = () => {
  return (
    <audio autoPlay loop>
      <source src="/music/newMapSong.mp3" />
    </audio>
  );
};

export default Music;
