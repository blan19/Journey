import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
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
      <div className="post-image">
        <img src={post.url} alt="thumbnail" />
      </div>
      <div className="post-divider"></div>
    </MobilePostsItemContainer>
  );
};

const MobilePosts = () => {
  const { posts, first, last, getPosts, getNext, getPrev } = useStore(
    (state) => state
  );
  const [page, setPage] = useState(1);

  const [, setLocation] = useLocation();

  const memorizedPosts = useMemo(
    () => posts?.map((post, idx) => <MobilePostsItem key={idx} post={post} />),
    [posts]
  );

  const onPushBack = useCallback(() => {
    setLocation("/");
  }, [setLocation]);

  const onNext = useCallback(() => {
    getNext(last);
    setPage((prev) => prev + 1);
  }, [getNext, last]);

  const onPrev = useCallback(() => {
    getPrev(first);
    setPage((prev) => prev - 1);
  }, [first, getPrev]);

  useLayoutEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    console.log(first, last);
  }, [first, last]);
  return (
    <MobilePostsContainer>
      <div className="posts-header">
        <BiArrowBack onClick={onPushBack} />
        <h1>방명록</h1>
      </div>
      <ul>{memorizedPosts}</ul>
      <div className="posts-button">
        <button disabled={page === 1 ? true : false} onClick={onPrev}>
          이전
        </button>
        <button disabled={posts?.length === 6 ? false : true} onClick={onNext}>
          다음
        </button>
      </div>
    </MobilePostsContainer>
  );
};

export default MobilePosts;
