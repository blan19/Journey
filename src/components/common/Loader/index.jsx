import { Html, useProgress } from "@react-three/drei";
import React, { useEffect } from "react";

const Loader = () => {
  const { progress } = useProgress();
  useEffect(() => {
    console.log(progress);
  }, [progress]);
  console.log("check");
  return (
    <Html center>
      <h1 style={{ color: "white", fontSize: "35px" }}>{progress} & loaded</h1>
    </Html>
  );
};

export default Loader;
