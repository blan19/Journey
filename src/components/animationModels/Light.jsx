import { useGLTF } from "@react-three/drei";
import React from "react";

const Light = () => {
  const { scene } = useGLTF("/gltf/light.glb");
  return (
    <>
      <primitive
        object={scene}
        position={[-3.33, 4.48, -40]}
        rotation={[0, Math.PI * 0.5, 0]}
        scale={[0.03, 0.03, 0.03]}
      ></primitive>
    </>
  );
};

export default Light;
