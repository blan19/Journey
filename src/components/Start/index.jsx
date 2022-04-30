import React, { useCallback, useEffect } from "react";
import useStore from "../../store";
import { StartContainer } from "./Start.style";

const Start = ({ control }) => {
  const { start, setStart, setControlTrue, setControlFalse } = useStore(
    (state) => state
  );

  const onStart = useCallback(() => {
    setControlFalse();
    setStart();
  }, [setControlFalse, setStart]);

  useEffect(() => {
    control.current.unlock();
    setControlTrue();
  }, []);

  if (start) {
    return null;
  }
  return (
    <StartContainer>
      <div className="start-title">
        <h1>The Time We Passed</h1>
      </div>
      <div className="start-button">
        <button onClick={onStart}>시작하기...</button>
      </div>
    </StartContainer>
  );
};

export default Start;
