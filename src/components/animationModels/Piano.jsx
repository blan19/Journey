import React, { useRef } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import * as THREE from "three";
import { SpotLight } from "@react-three/drei";

const Piano = () => {
  const { scene } = useGLTF("/gltf/EPiano.glb");

  return (
    <>
      <group
        scale={[0.13, 0.12, 0.13]}
        //   rotation={[0, Math.PI * 1.4, 0]}
        rotation={[0, Math.PI * 1.5, 0]}
        position={[-3.1, 2.55, -39.3]}
      >
        <primitive object={scene}></primitive>
      </group>
    </>
  );
};

export default Piano;
