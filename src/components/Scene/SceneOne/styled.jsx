import styled from "styled-components";

const RegisterContainer = styled.div`
  z-index: 9999;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: absolute;
  display: ${(props) => (props.register ? "block" : "none")};
  top: 0;
  left: 0;
`;

const RegisterHeader = styled.header`
  background-color: #009cca;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: #fff;
    margin: 0;
    font-size: 28px;
    padding: 1rem;
  }
`;

const RegisterMain = styled.main``;

export { RegisterContainer, RegisterHeader, RegisterMain };
