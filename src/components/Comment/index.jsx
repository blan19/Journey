import React from "react";
import styled from "styled-components";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const testData = [
  {
    name: "somin",
    id: 20182717,
    content: "hello, i'm somin.",
  },
  {
    name: "minseok",
    id: 20172717,
    content: "hello, i'm minseok.",
  },
  {
    name: "junseo",
    id: 20192717,
    content: "hello, i'm junseo.",
  },
  {
    name: "somin",
    id: 20182717,
    content: "hello, i'm somin.",
  },
  {
    name: "somin",
    id: 20182717,
    content: "hello, i'm somin.",
  },
  {
    name: "somin",
    id: 20182717,
    content: "hello, i'm somin.",
  },
  {
    name: "somin",
    id: 20182717,
    content: "hello, i'm somin.",
  },
  {
    name: "somin",
    id: 20182717,
    content: "hello, i'm somin.",
  },
  {
    name: "somin",
    id: 20182717,
    content: "hello, i'm somin.",
  },
  {
    name: "somin",
    id: 20182717,
    content: "hello, i'm somin.",
  },
  {
    name: "somin",
    id: 20182717,
    content: "hello, i'm somin.",
  },
  {
    name: "somin",
    id: 20182717,
    content: "hello, i'm somin.",
  },
];
const onClickRight = () => {
  console.log("click");
};
const Comment = ({ posts }) => {
  return posts ? (
    <CommentContainer>
      <MdOutlineKeyboardArrowLeft className="left" />
      <div className="box-container">
        {posts.map((post) => (
          <div key={post.content} className="post-item">
            <div className="top">
              <div>{post.name}</div>
            </div>
            <hr />
            <div>{post.content}</div>
          </div>
        ))}
      </div>
      <div onClick={onClickRight}>
        <MdOutlineKeyboardArrowRight className="right" />
      </div>
    </CommentContainer>
  ) : (
    <div>loading..</div>
  );
};

export default Comment;

const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem;
  width: 145%;
  height: 120%;
  overflow: hidden;

  .left,
  .right {
    font-size: 2rem;
  }
  .box-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .post-item {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    width: 16.5rem;
    height: 9rem;
    padding: 1rem;
    background-color: #fbf8f1;
    margin: 1rem;

    .top {
      display: flex;
      justify-content: space-between;
    }
  }
  /* background-color: black; */
`;
