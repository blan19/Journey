import { useEffect, useRef, useState } from "react";

const NUMBER_OF_ITEMS_PER_PAGE = 6;

const useInfiniteScroll = function (products) {
  const containerRef = useRef(null);
  const observer = useRef(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) return;

      setCount((value) => value + 1);
      observer.unobserve(entries[0].target);
    });
  }, []);

  useEffect(() => setCount(1), []);

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= products.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return;

    observer.current?.observe(
      containerRef.current.children[containerRef.current.children.length - 1]
    );
  }, [count, products.length]);

  return {
    containerRef,
    products: products.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  };
};

export default useInfiniteScroll;
