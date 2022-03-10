import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

const Model = (props) => {
  const group = useRef();
  const { scene } = useGLTF("/gltf/fixedRoom.glb");
  console.log(scene);
  return <primitive scale={[0.1, 0.1, 0.1]} object={scene} />;
};

const SceneThree = () => {
  return <Model />;
};

export default SceneThree;
