import styled from "styled-components";

const CountContainer = styled.div``;

const TitleContainer = styled.div`
  font-size: 10px;
`;

const SceneFiveEndContainer = styled.div`
  z-index: 96733855;
  width: 100%;
  height: 100vh;
  position: absolute;
  display: ${(props) => (props.visible ? "block" : "none")};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  top: 0;
  left: 0;
  background-color: rgba(1, 1, 1, 0.8);

  .end-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    form {
      width: 500px;
      background-color: #fff;
      border-radius: 5px;
      padding: 1rem;
      .end-title {
        h3 {
          text-align: center;
          color: #000;
          margin: 0;
          margin: 1rem 0;
          font-family: "NanumSquareRound";
        }
      }
      .end-image {
        width: 100%;
        img {
          width: 100%;
          height: 200px;
        }
      }
      .end-button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 50px;
        margin-bottom: 20px;
        .font {
          font-family: "NanumSquareRound";
        }
        button {
          cursor: pointer;
          border: 1px solid #e5e5e5;
          background-color: #fff;
          color: #000;
          padding: 10px 20px;
          border-radius: 5px;
          &:hover {
            border: 1px solid lightgray;
          }
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
`;

export { CountContainer, TitleContainer, SceneFiveEndContainer };
