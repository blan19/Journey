import React from "react";
import styled from "styled-components";

const PostsItem = () => {
  return (
    <PostItemContainer className="item-container">
      <div className="item-header">
        <h1>첫번째 방명록..</h1>
      </div>
      <div className="item-desc">
        <p>
          안녕하세요 방명록 남겨봅니다..! 제가 좋아하는 노래는 greenday - last
          night on earth입니다!
        </p>
      </div>
      <div className="item-info">
        <span>2022.01.29</span>
      </div>
      <div className="item-divider"></div>
      <div className="item-created">
        <p>
          by <span>blan19</span>
        </p>
      </div>
    </PostItemContainer>
  );
};

export default PostsItem;

const PostItemContainer = styled.div`
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: 200px;
  .item-header {
    h1 {
      margin: 0;
      font-size: 15px;
      text-align: center;
      margin-top: 5px;
    }
  }
  .item-desc {
    padding: 0 10px;
    p {
      color: #b5b5b3;
      font-size: 12.5px;
    }
  }
  .item-info {
    padding: 0 10px;
    margin-top: 30px;
    margin-bottom: 30px;
    span {
      color: #b5b5b3;
      font-size: 12.5px;
    }
  }
  .item-divider {
    width: 100%;
    height: 1px;
    background: #b5b5b3;
  }
  .item-created {
    padding: 0 10px;
    font-size: 12.5px;
    p {
      color: #b5b5b3;
      span {
        color: black;
      }
    }
  }
`;
