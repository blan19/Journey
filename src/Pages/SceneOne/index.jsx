import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import Laptop from "../../components/SceneOne/Laptop";

const Model = ({ ...props }) => {
  const group = useRef();
  const camera = useThree((state) => state.camera);
  const { nodes } = useGLTF("/gltf/newFirstScene.glb");
  useEffect(() => {
    camera.position.set(0, 0.7, 1);
  }, []);
  useFrame(() => {});
  return (
    <>
      {/* <PerspectiveCamera position={[0, 20, -5]} /> */}
      <group
        receiveShadow
        ref={group}
        {...props}
        // position={[0, -0.5, 3]}
        rotation={[0, 0.75, 0]}
      >
        <primitive object={nodes.background} />
        <primitive object={nodes.models} />
        <Laptop />
      </group>
    </>
  );
};

const SceneOne = () => {
  return <Model />;
};

export default SceneOne;
