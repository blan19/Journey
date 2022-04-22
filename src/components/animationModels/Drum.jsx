import React from "react";
import { useGLTF } from "@react-three/drei";

const Drum = () => {
  const { scene } = useGLTF("/gltf/drum.glb");

  //   const { scene } = useGLTF("/gltf/Eguitar.glb");

  return (
    <group
      scale={[0.06, 0.06, 0.06]}
      position={[-3.1, 2.55, -38]}
      rotation={[0, Math.PI * 0.8, 0]}
    >
      <primitive object={scene}></primitive>
    </group>
  );
};

export default Drum;
