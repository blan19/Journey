import React from "react";
import { useGLTF } from "@react-three/drei";
import StartPhysics from "./StartPhysics";
import SceneOnePhysics from "./SceneOnePhysics";
import SceneTwoPhysics from "./SceneTwoPhysics";

export default function Map() {
  const { scene } = useGLTF("/gltf/FinalWork.glb");
  return (
    <>
      <StartPhysics />
      <SceneOnePhysics />
      <SceneTwoPhysics />

      <group
        scale={[0.1, 0.1, 0.1]}
        position={[2.5, 0, -37]}
        rotation={[0, Math.PI * 1.5, 0]}
      >
        <primitive object={scene} />
      </group>
    </>
  );
}
