import styled from "styled-components";
import { keyframes } from "styled-components";

const rotation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const RegisterContainer = styled.div`
  z-index: 1001;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: absolute;
  display: ${(props) => (props.register ? "block" : "none")};
  opacity: ${(props) => (props.register ? 1 : 0)};
  top: 0;
  left: 0;
`;

const RegisterHeader = styled.header`
  background-color: #009cca;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  svg {
    position: absolute;
    left: 10px;
    font-size: 28px;
    color: #fff;
    cursor: pointer;
  }
  h1 {
    color: #fff;
    margin: 0;
    font-size: 28px;
    padding: 1rem;
  }
`;

const RegisterMain = styled.main`
  padding-top: 10rem;
  padding-left: 5rem;
  padding-right: 5rem;
  p {
    margin: 0;
  }
  .register-info {
    p {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .register-table {
    margin-top: 35px;
    table {
      width: 100%;
    }
    td {
      border: 1px solid black;
      text-align: center;
      padding: 5px 0;
    }
    th {
      border: 1px solid black;
      text-align: center;
      padding: 5px 0;
    }
  }
  .register-contents {
    margin-top: 50px;
    span {
      color: red;
    }
    font-size: 20px;
    .section-1 {
      color: #9c36b5;
      font-weight: bold;
    }
    .section-2 {
      color: #000;
    }
    .section-3 {
      color: #9c36b5;
      font-weight: bold;
    }
  }
  .register-button {
    margin-top: 200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      background-color: #009cca;
      border: none;
      border-radius: 3px;
      padding: 7.5px 15px;
      font-size: 15px;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

const RegisterLoading = styled.div`
  z-index: 9999;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    animation: ${rotation} 2s infinite linear;
    font-size: 28px;
  }
`;

export { RegisterContainer, RegisterHeader, RegisterMain, RegisterLoading };
