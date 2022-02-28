import {
  ScrollControls,
  useGLTF,
  useHelper,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import Laptop from "./Laptop";
import { BoxHelper } from "three";

const Model = ({ ...props }) => {
  const { mouse, camera } = useThree();
  const vec = new THREE.Vector3();
  const scroll = useScroll();
  const { nodes, materials } = useGLTF("/gltf/firstScene.glb");
  const group = useRef(null);
  useHelper(group, BoxHelper, "cyan");
  // useFrame(({ camera }) => {
  //   const offset = 1 - scroll.offset;
  //   camera.position.x = -1 * scroll.offset + 1;
  //   camera.position.z = 5 * offset + -3;
  //   camera.position.y = 1.5 * offset - 1;
  //   if (scroll.offset > 0.2) {
  //     group.current.rotation.y = 10.2 - scroll.offset;
  //   }
  //   group.current.position.x = -scroll.offset * 3;
  //   camera.position.lerp(
  //     vec.set(mouse.x * 2, mouse.y * 1, camera.position.z),
  //     0.02
  //   );
  // });
  return (
    <group
      position={[0, -6, 0]}
      rotation={[0, 10, 0]}
      ref={group}
      receiveShadow
      {...props}
      dispose={null}
    >
      <Laptop />
      <primitive receiveShadow object={nodes["models"]} />
    </group>
  );
};

const SceneOne = () => {
  return (
    <ScrollControls pages={3}>
      <Model />
    </ScrollControls>
  );
};

export default SceneOne;
