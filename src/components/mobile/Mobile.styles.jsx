import styled from "styled-components";
import { flexCenter, flexColCenter } from "../../lib/styles/common";

// * Mobile Main
const MobileMainContainer = styled.main`
  width: 100%;
  height: 100vh;
  ${flexColCenter}
  background-color: #efefef;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .mobile-main-title {
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 5rem;
      margin-bottom: 2rem;
    }
    .sub-title {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .border {
      .team-name {
        font-size: 1rem;
        margin-left: 10rem;
      }
    }
  }

  .photo-border {
    display: flex;
    justify-content: center;

    .photo {
      margin: 0;
      padding: 0;
      width: 40rem;
      height: 30rem;
      background-color: white;
      overflow: hidden;
      display: flex;

      .slide-item {
        animation: slide 10s infinite;
        animation-timing-function: ease-in-out;
        img {
          width: 40rem;
          height: 30rem;
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
      transform: translateX(-40rem);
    }
    33% {
      transform: translateX(-40rem);
    }
    40% {
      transform: translateX(-80rem);
    }
    53% {
      transform: translateX(-80rem);
    }
    60% {
      transform: translateX(-120rem);
    }
    73% {
      transform: translateX(-120rem);
    }
    80% {
      transform: translateX(-160rem);
    }
    100% {
      transform: translateX(-16ㅇ0rem);
    }
    /* 102% {
      transform: translateX(0rem);
    } */
  }
  nav {
    margin-top: 7rem;
    a {
      color: #000;
      margin-top: 3rem;
      ${flexCenter}
      border: 1px solid var(--color-subColor);
      border-radius: 7rem;
      padding: 1rem 2rem;
      background-color: black;
      color: white;
    }
    span {
      padding-left: 1rem;
      font-size: var(--font-sub-1);
    }
    svg {
      font-size: 4rem;
    }
  }
`;

// * Mobile Intro
const MobileIntroContainer = styled.div`
  width: 100%;
  margin-top: 15rem;
`;

const MobileIntroSection = styled.section`
  width: 100%;
  /* section-1-1 */
  .section-1-1 {
    ${flexCenter}
    overflow: hidden;
    p {
      line-height: 1.5;
      font-size: var(--font-title-2);
    }
  }
  /* section-1-2 */
  .section-1-2 {
    ${flexColCenter}
    margin-top: 10rem;
    p {
      line-height: 1.5;
      font-size: var(--font-main-2);
    }
    h1 {
      font-size: var(--font-title-1);
    }
  }
  /* section-2 */
  .section-2-line {
    width: 0.2rem;
    height: 7rem;
    background-color: #000;
    margin-right: 3rem;
    margin-top: 3rem;
  }
  .section-2-text {
    width: 100%;
    font-size: var(--font-main-2);
    & > div {
      margin-top: 3rem;
      overflow: hidden;
    }
  }
  /* section-3 */
  .section-3-title {
    font-size: var(--font-main-1);
  }
  .section-3-contents {
    display: flex;
    align-items: center;
    margin-top: 5.5rem;
    .section-3-contents-title {
      font-size: var(--font-main-1);
      position: relative;
      margin-right: 5.5rem;
    }
    .section-3-contents-circle {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background-color: var(--color-subColor);
      z-index: -1;
      top: 1rem;
      right: -1rem;
      position: absolute;
    }
    .section-3-contents-text {
      font-size: var(--font-sub-1);
    }
  }
  .section-5 {
    margin-bottom: 17.5rem;
    font-size: var(--font-title-2);
  }
`;

const MobileIntroWrapper = styled.div`
  padding-left: 15rem;
  padding-right: 15rem;
  display: flex;
  flex-direction: ${(props) => props.column && "column"};
  align-items: ${(props) => props.center && "center"};
  width: 100%;
  margin-top: 25rem;
  overflow: hidden;
`;

const MobileEpisodeContainer = styled.section`
  width: 100%;
  ${flexColCenter}
  h1 {
    font-size: var(--font-title-1);
  }
  .mobile-episode {
    width: 100%;
    margin-top: 17.5rem;
  }
  .mobile-episode-title {
    position: relative;
    display: flex;
    justify-content: ${(props) => (props.left ? "flex-start" : "flex-end")};
    font-size: var(--font-title-2);
  }
  .mobile-episode-circle {
    position: absolute;
    width: 3.25rem;
    height: 3.25rem;
    background-color: var(--color-subColor);
    border-radius: 50%;
    z-index: -1;
    top: 1.5rem;
    left: ${(props) => props.left && "6rem"};
    right: ${(props) => (props.left ? null : "-1rem")};
  }
  .mobile-episode-content {
    width: 100%;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.left ? "flex-start" : "flex-end")};
    font-size: var(--font-sub-1);
    p {
      margin-top: 1rem;
    }
    .mobile-episode-divider {
      margin-top: 3rem;
      width: 6rem;
      height: 0.3rem;
      background-color: var(--color-subColor);
    }
  }
`;

// * Mobile Posts
const MobilePostsContainer = styled.div`
  padding: 2rem 5rem;
  .posts-header {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    svg {
      position: absolute;
      font-size: var(--font-title-2);
      left: 0;
      cursor: pointer;
    }
    h1 {
      text-align: center;
      font-size: var(--font-title-2);
    }
  }
`;

const MobilePostsItemContainer = styled.li`
  margin-top: 5rem;
  h1 {
  }
  p {
    font-size: var(--font-main-1);
    font-weight: 400;
    text-align: center;
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    border-radius: 0.5rem;
  }
`;

export {
  MobileMainContainer,
  MobileIntroContainer,
  MobilePostsContainer,
  MobileIntroSection,
  MobileIntroWrapper,
  MobileEpisodeContainer,
  MobilePostsItemContainer,
};
