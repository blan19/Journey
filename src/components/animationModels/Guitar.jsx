import React from "react";
import { useGLTF } from "@react-three/drei";

const Guitar = () => {
  const { scene } = useGLTF("/gltf/Eguitar.glb");

  return (
    <group
      position={[-2.4, 2.55, -39.7]}
      rotation={[0, Math.PI * 1.3, 0]}
      scale={[0.2, 0.2, 0.2]}
    >
      <primitive object={scene}></primitive>
    </group>
  );
};

export default Guitar;
