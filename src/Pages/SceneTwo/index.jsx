import React, { useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const Model = ({ ...props }) => {
  const { camera } = useThree();
  const { scene } = useGLTF("/gltf/secondScene.glb");
  const group = useRef(null);
  useLayoutEffect(() => {
    camera.position.set(0, 0, 0);
  }, []);
  useFrame(({}) => {});
  return <primitive ref={group} dispose={null} object={scene} {...props} />;
};

const SceneTwo = () => {
  return <Model />;
};

export default SceneTwo;
