import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

const Model = (props) => {
  const group = useRef();
  const { nodes } = useGLTF("/gltf/level-react-draco.glb");
  return (
    <group ref={group} {...props}>
      <mesh geometry={nodes.Level.geometry} material={nodes.Level.material} />
    </group>
  );
};

const SceneThree = () => {
  return <Model />;
};

export default SceneThree;
