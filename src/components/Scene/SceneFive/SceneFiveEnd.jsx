import React, { useCallback } from "react";
import useStore from "../../../store";
import { SceneFiveEndContainer } from "./styles";

const SceneFiveEnd = () => {
  const { image, end, setEnd, setControlFalse } = useStore((state) => state);
  const onClick = useCallback(() => {
    console.log("asd");
    setControlFalse();
    setEnd();
  }, [setControlFalse, setEnd]);
  const onStopPropagation = (e) => e.stopPropagation();
  return (
    <SceneFiveEndContainer visible={end}>
      <div className="end-wrapper" onClick={onStopPropagation}>
        <form>
          <div className="end-title">
            <h1>The End</h1>
          </div>
          <div className="end-image">
            <img src={image} alt="thumbnail" />
          </div>
          <div className="end-button">
            <button type="button" onClick={onClick}>
              Cancle
            </button>
          </div>
        </form>
      </div>
    </SceneFiveEndContainer>
  );
};

export default SceneFiveEnd;
