import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const Model = ({ ...props }) => {
  const { camera } = useThree();
  const { scene } = useGLTF("/gltf/secondScene.glb");
  const group = useRef(null);
  useEffect(() => {
    camera.position.set([0, 0, 0]);
    group.current.position.set(0, -6, -3);
    group.current.rotation.set(0, 10.5, 0);
  }, []);
  useFrame(({ camera }) => {});
  return <primitive ref={group} dispose={null} object={scene} {...props} />;
};

const SceneTwo = () => {
  return <Model />;
};

export default SceneTwo;
