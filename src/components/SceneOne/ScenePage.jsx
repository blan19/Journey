import React, { useState } from "react";
import styled from "styled-components";

const ScenePage = () => {
  const [page, setPage] = useState(false);
  return (
    <ScenePageContainer>
      {!page ? <h1>합격자 조회</h1> : <h1>합격하셨습니다</h1>}
      <button onClick={() => setPage((state) => !state)}>조회</button>
    </ScenePageContainer>
  );
};

export default ScenePage;

const ScenePageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    cursor: pointer;
  }
`;
