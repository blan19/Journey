import React from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import {
  SceneStrat,
  SceneOnePhysics,
  SceneTwoPhysics,
  SceneThreePhysics,
  SceneFourPhysics,
  SceneFourModel,
  SceneFivePhysics,
} from "../Scene";
import { Pencil, Keyboard } from "../animationModels";
import { Laptop } from "../common";

export default function Map({ control, getImage, image }) {
  // const { scene, animations, nodes } = useGLTF("/gltf/MapWithoutModels.glb");
  const { scene, animations, nodes } = useGLTF("/gltf/MapWithoutModels.glb");
  const { actions } = useAnimations(animations, scene);

  return (
    <>
      <SceneStrat />
      <SceneOnePhysics />
      <SceneTwoPhysics />
      <SceneThreePhysics />
      <SceneFourPhysics />
      <SceneFivePhysics
        controlsRef={control}
        getImage={getImage}
        image={image}
      />

      <group
        scale={[0.1, 0.1, 0.1]}
        position={[2.5, 0, -37]}
        rotation={[0, Math.PI * 1.5, 0]}
      >
        <primitive object={scene} />
      </group>

      <Laptop control={control} />
      <Pencil actions={actions} />
      <Keyboard actions={actions} />
      <SceneFourModel />
    </>
  );
}
