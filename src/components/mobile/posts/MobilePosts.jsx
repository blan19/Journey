import React, { useCallback, useLayoutEffect, useMemo, useState } from "react";
import useStore from "../../../store";
import {
  MobilePostsContainer,
  MobilePostsItemContainer,
} from "../Mobile.styles";
import { BiArrowBack } from "react-icons/bi";
import { useLocation } from "wouter";
import ContentLoader from "react-content-loader";
import Modal from "../Modal";

const Loading = ({ ...props }) => {
  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 400 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="8" y="15" rx="3" ry="3" width="100%" height="40rem" />
    </ContentLoader>
  );
};

const MobilePostsItem = ({ post }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <MobilePostsItemContainer>
        <div className="post-image">
          <img
            onClick={() => setShow((prev) => !prev)}
            src={post.url}
            alt="thumbnail"
          />
        </div>
        <div className="post-divider"></div>
      </MobilePostsItemContainer>
      <Modal img={post.url} show={show} setShow={setShow} />
    </>
  );
};

const MobilePosts = () => {
  const { posts, first, last, getPosts, getNext, getPrev } = useStore(
    (state) => state
  );
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [, setLocation] = useLocation();

  const memorizedPosts = useMemo(
    () => posts?.map((post, idx) => <MobilePostsItem key={idx} post={post} />),
    [posts]
  );

  const onPushBack = useCallback(() => {
    setLocation("/");
  }, [setLocation]);

  const onNext = useCallback(() => {
    setLoading(true);
    getNext(last).then(() => setLoading(false));
    setPage((prev) => prev + 1);
  }, [getNext, last]);

  const onPrev = useCallback(() => {
    setLoading(true);
    getPrev(first).then(() => setLoading(false));
    setPage((prev) => prev - 1);
  }, [first, getPrev]);

  useLayoutEffect(() => {
    setLoading(true);
    getPosts().then(() => setLoading(false));
  }, []);

  return (
    <MobilePostsContainer>
      <div className="posts-header">
        <BiArrowBack onClick={onPushBack} />
        <h1>방명록</h1>
      </div>
      <ul>
        {loading ? (
          <>
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
          </>
        ) : (
          memorizedPosts
        )}
      </ul>
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
