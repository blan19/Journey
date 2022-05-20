import { useGLTF } from "@react-three/drei";
import React from "react";

const Fireworks = () => {
  const { nodes } = useGLTF("/gltf/fireworks.glb");
  return (
    <>
      <group position={[-2, 2.6, -39.5]} scale={[0.03, 0.06, 0.03]}>
        <mesh
          material={nodes["main"].material}
          geometry={nodes["main"].geometry}
        ></mesh>
        <mesh
          material={nodes["topside"].material}
          geometry={nodes["topside"].geometry}
        ></mesh>
      </group>
      <group position={[-2, 3, -39.5]} scale={[0.03, 0.06, 0.03]}>
        <mesh
          material={nodes["sparks"].material}
          geometry={nodes["sparks"].geometry}
        ></mesh>
      </group>
    </>
  );
};

export default Fireworks;

useGLTF.preload("/gltf/fireworks.glb");
