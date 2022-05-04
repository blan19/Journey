import React, { useCallback, useEffect, useLayoutEffect, useMemo } from "react";
import useStore from "../../../store";
import {
  MobilePostsContainer,
  MobilePostsItemContainer,
} from "../Mobile.styles";
import { BiArrowBack } from "react-icons/bi";
import { useLocation } from "wouter";

const MobilePostsItem = ({ post }) => {
  return (
    <MobilePostsItemContainer>
      <div className="post-title">
        <p>{post.title}</p>
      </div>
      <div className="post-image">
        <img src={post.url} alt="thumbnail" />
      </div>
      <div className="post-divider"></div>
    </MobilePostsItemContainer>
  );
};

const MobilePosts = () => {
  const { posts, getPosts } = useStore((state) => state);
  const [, setLocation] = useLocation();
  const memorizedPosts = useMemo(
    () => posts?.map((post, idx) => <MobilePostsItem key={idx} post={post} />),
    [posts]
  );
  const onPushBack = useCallback(() => {
    setLocation("/");
  }, [setLocation]);
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <MobilePostsContainer>
      <div className="posts-header">
        <BiArrowBack onClick={onPushBack} />
        <h1>방명록</h1>
      </div>
      <ul>{memorizedPosts}</ul>
    </MobilePostsContainer>
  );
};

export default MobilePosts;
