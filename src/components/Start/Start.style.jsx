import styled from "styled-components";

const StartContainer = styled.div`
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
  }
  .start-border {
    display: flex;
    justify-content: center;
    .start-button {
      cursor: pointer;
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
export { StartContainer };
