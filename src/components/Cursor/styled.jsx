import styled from "styled-components";

const CursorContainer = styled.div`
  z-index: 999;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1000;
  width: 22px;
  height: 22px;
  transform: translate(-50%, -50%);

  .pointer {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 23px;
      color: #868e96;
    }
    .pointer-circle {
      z-index: 1000;
      background-color: #51cf66;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export { CursorContainer };
