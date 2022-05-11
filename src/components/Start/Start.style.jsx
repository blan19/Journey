import styled from "styled-components";

const StartContainer1 = styled.div`
  background-color: #efefef;
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 2rem;
      margin-bottom: 0.8rem;
    }
    .sub-title {
      font-size: 1.2rem;
      margin-bottom: 0.3rem;
    }
    .border {
      .team-name {
        font-size: 0.8rem;
        margin-left: 5rem;
      }
    }
  }

  .photo-border {
    display: flex;
    justify-content: center;

    .photo {
      margin: 0;
      padding: 0;
      width: 30rem;
      height: 20rem;
      background-color: white;
      overflow: hidden;
      display: flex;

      .slide-item {
        animation: slide 10s infinite;
        animation-timing-function: ease-in-out;
        img {
          width: 30rem;
          height: 20rem;
        }
      }
    }
  }

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    13% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(-30rem);
    }
    33% {
      transform: translateX(-30rem);
    }
    40% {
      transform: translateX(-60rem);
    }
    53% {
      transform: translateX(-60rem);
    }
    60% {
      transform: translateX(-90rem);
    }
    73% {
      transform: translateX(-90rem);
    }
    80% {
      transform: translateX(-120rem);
    }
    100% {
      transform: translateX(-120rem);
    }
    /* 102% {
      transform: translateX(0rem);
    } */
  }
  .start-border {
    display: flex;
    justify-content: center;
    .start-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: black;
      color: white;
      border-radius: 7rem;
      width: 7rem;
      height: 3rem;
      padding: 0.5rem 0.8rem;
    }
  }
`;
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
export { StartContainer, StartContainer1 };
