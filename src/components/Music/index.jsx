import React from "react";

const Music = () => {
  return (
    <audio autoPlay loop>
      <source src="/music/bgm.mp3" />
    </audio>
  );
};

export default Music;
