import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree, applyProps } from "@react-three/fiber";
import React, { useLayoutEffect, useRef } from "react";
import Laptop from "../../components/SceneOne/Laptop";

const Model = (props) => {
  const group = useRef();
  const camera = useThree((state) => state.camera);
  const { scene, nodes } = useGLTF("/gltf/newFirstScene.glb");
  useLayoutEffect(() => {
    camera.position.set(0, 0.7, 1);
    console.log(nodes);
    scene.traverse((o) => {
      if (o.isMesh) {
        applyProps(o, {
          castShadow: true,
          // receiveShadow: true,
          // "material-envMapIntensity": 0.3,
        });
      }
    });
  }, []);
  useFrame(() => {});
  return (
    <>
      <group
        receiveShadow
        castShadow
        ref={group}
        {...props}
        rotation={[0, 0.75, 0]}
      >
        <primitive object={scene} dispose={null} {...props}></primitive>
        <Laptop />
      </group>
    </>
  );
};

const SceneOne = () => {
  return <Model />;
};

export default SceneOne;
