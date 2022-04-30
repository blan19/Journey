import React from "react";
import { StartContainer } from "./Start.style";

const Loading = () => {
  return (
    <StartContainer>
      <div className="start-title">
        <h1>The Time We Passed</h1>
      </div>
      <div className="start-button">
        <button>Loading...</button>
      </div>
    </StartContainer>
  );
};

export default Loading;
