import React, { useCallback, useEffect, useState } from "react";
import useStore from "../../store";
import { StartContainer } from "./Start.style";

const Start = () => {
  const { start, setStart, setControlTrue, setControlFalse } = useStore(
    (state) => state
  );
  const [loading, setLoading] = useState(true);

  const onStart = useCallback(() => {
    setControlFalse();
    setStart();
  }, [setControlFalse, setStart]);

  useEffect(() => {
    setControlTrue();
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <StartContainer visible={start}>
      <div className="start-wrapper">
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
          <div className="start-button" onClick={loading ? null : onStart}>
            {loading ? "로딩중.." : "시작하기"}
          </div>
        </div>
      </div>
    </StartContainer>
  );
};

export default Start;
