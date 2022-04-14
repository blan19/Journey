import React, { useEffect } from "react";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";
import StartPhysics from "./StartPhysics";
import SceneOnePhysics from "./SceneOnePhysics";
import SceneTwoPhysics from "./SceneTwoPhysics";
import SceneThreePhysics from "./SceneThreePhysics";
import SceneFourPhysics from "./SceneFourPhysics";
import SceneFivePhysics from "./SceneFivePhysics";
import Pencil from "../animationModels/Pencil";

export default function Map() {
  // const { scene, animations, nodes } = useGLTF("/gltf/MapWithoutModels.glb");
  const { scene, animations, nodes } = useGLTF("/gltf/MapWithoutModels.glb");
  const { actions } = useAnimations(animations, scene);

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

      <Pencil actions={actions} />
    </>
  );
}
