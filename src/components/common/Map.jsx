import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Map() {
  const { scene } = useGLTF("/gltf/mapReadyForWork.glb");
  return (
    <group
      scale={[0.1, 0.1, 0.1]}
      position={[2.5, 0, -37]}
      rotation={[0, Math.PI * 1.5, 0]}
    >
      <primitive object={scene} />
    </group>
  );
}
