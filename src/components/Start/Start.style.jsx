import styled from "styled-components";

const StartContainer = styled.div`
  z-index: 96733855;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(1, 1, 1, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .start-title {
    h1 {
      font-size: 65px;
      color: #fff;
    }
  }
  .start-button {
    margin-top: 150px;
    button {
      outline: none;
      border: none;
      background: none;
      cursor: pointer;
      color: #fff;
      font-size: 27.5px;
    }
  }
`;
export { StartContainer };
