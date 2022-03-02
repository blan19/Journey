import * as THREE from "three";
import {
  ScrollControls,
  useGLTF,
  useMatcapTexture,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree, applyProps } from "@react-three/fiber";
import React, { useLayoutEffect, useRef } from "react";
import Laptop from "../../components/SceneOne/Laptop";

const Model = (props) => {
  const group = useRef();
  const laptop = useRef();
  const camera = useThree((state) => state.camera);
  const scroll = useScroll();
  const { scene, nodes } = useGLTF("/gltf/newFirstScene.glb");
  const [matcap] = useMatcapTexture("584F3A_BEC3BD_C5A57D_A39073");
  console.log(scroll);
  // camera
  // initialize
  useLayoutEffect(() => {
    camera.position.set(0, 0.9, 0);
    scene.traverse((o) => {
      if (o.isGroup && o.name === "Scene") {
        o.children.forEach(function (child, i) {
          console.log(child);
          if (child.isGroup) {
            child.children.forEach((mesh) => {
              // mesh.receiveShadow = true;
              mesh.material.roughness = 0.4;
              mesh.material.metalness = 0.2;
            });
          }
        });
      }
      if (o.isMesh) {
        applyProps(o, {
          castShadow: true,
          // receiveShadow: true,
          // "material-envMapIntensity": 0.3,
        });
      }
    });
  }, []);
  useFrame(() => {
    const offset = 1 - scroll.offset;
  });
  return (
    <>
      <group
        receiveShadow
        castShadow
        ref={group}
        {...props}
        // position={[0.3, -0.1, 0.5]}
        // rotation={[0, 0.75, 0]}
        rotation={[0, 0, 0]}
        position={[-0.05, -0.15, 1.05]}
      >
        <primitive object={scene} dispose={null} {...props}></primitive>
        <Laptop ref={laptop} />
      </group>
    </>
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
