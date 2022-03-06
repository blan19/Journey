import { Html } from "@react-three/drei";
import React from "react";
import styled from "styled-components";
import PostsItem from "../../components/Posts/PostsItem";

const Posts = () => {
  return (
    <Html fullscreen>
      <PostsContainer>
        <div className="post-header">
          <h1>The Journey</h1>
        </div>
        <PostsWrapper>
          <PostsItem />
          <PostsItem />
        </PostsWrapper>
      </PostsContainer>
    </Html>
  );
};

export default Posts;

const PostsContainer = styled.main`
  display: flex;
  flex-direction: column;
  .post-header {
    text-align: center;
    margin-top: 30px;
    font-size: 22.5px;
  }
`;

const PostsWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 100px;
  display: grid;
  padding: 0 50px;
  gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 1920px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 765px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr 1fr;
    padding-bottom: 20rem;
  }
`;
