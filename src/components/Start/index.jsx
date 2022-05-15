import React, { useCallback } from "react";
import useStore from "../../store";
import { StartContainer, StartContainer1 } from "./Start.style";

const Start = () => {
  const { start, setStart } = useStore((state) => state);

  const onStart = useCallback(() => {
    setStart();
  }, [setStart]);

  if (start) {
    return null;
  }
  return (
    // <StartContainer>
    //   <div className="start-title">
    //     <h1>The Time We Passed</h1>
    //   </div>
    //   <div className="start-button">
    //     <button onClick={onStart}>시작하기...</button>
    //   </div>
    // </StartContainer>
    <StartContainer1>
      <div className="intro">
        <div className="title">The Time We Passed</div>
        <div className="sub-title">'우리가 보내왔던 순간들'</div>
        <div className="border">
          <div className="team-name">by Team Gazigazi</div>
        </div>
      </div>

      <div className="photo-border">
        <div className="photo">
          <div className="slide-item">
            <img src="/image/1.png" alt="scene1" />
          </div>
          <div className="slide-item">
            <img src="/image/5.png" alt="scene2" />
          </div>
          <div className="slide-item">
            <img src="/image/4.png" alt="scene3" />
          </div>
          <div className="slide-item">
            <img src="/image/2.png" alt="scene4" />
          </div>
          <div className="slide-item">
            <img src="/image/3.png" alt="scene5" />
          </div>
          <div className="slide-item">
            <img src="/image/1.png" alt="scene5" />
          </div>
        </div>
      </div>

      <div className="start-border">
        <div className="start-button" onClick={onStart}>
          시작하기
        </div>
      </div>
    </StartContainer1>
  );
};

export default Start;
