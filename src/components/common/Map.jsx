import React from "react";
import { useGLTF } from "@react-three/drei";
import StartPhysics from "./StartPhysics";
import SceneOnePhysics from "./SceneOnePhysics";
import SceneTwoPhysics from "./SceneTwoPhysics";
import SceneThreePhysics from "./SceneThreePhysics";
import SceneFourPhysics from "./SceneFourPhysics";
import SceneFivePhysics from "./SceneFivePhysics";

export default function Map() {
  // const { scene } = useGLTF("/gltf/FinalWork.glb");
  const { scene } = useGLTF("/gltf/mapWithLowPolyTree.glb");
  return (
    <>
      <StartPhysics />
      <SceneOnePhysics />
      <SceneTwoPhysics />
      <SceneThreePhysics />
      <SceneFourPhysics />
      <SceneFivePhysics />

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
