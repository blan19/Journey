import React from "react";
import { useGLTF } from "@react-three/drei";

const Mic = () => {
  const { scene } = useGLTF("/gltf/mic.glb");

  return (
    <group
      position={[-2.4, 2.55, -38.8]}
      rotation={[0, Math.PI * 0.5, 0]}
      scale={[0.25, 0.25, 0.25]}
    >
      <primitive object={scene}></primitive>
    </group>
  );
};

export default Mic;
