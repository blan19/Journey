import React, { useRef } from "react";
import Drum from "../animationModels/Drum";
import Guitar from "../animationModels/Guitar";
import Mic from "../animationModels/Mic";
import Piano from "../animationModels/Piano";
import { useGLTF, useHelper } from "@react-three/drei";
import * as THREE from "three";

function Lights() {
  const light = useRef();
  useHelper(light, THREE.SpotLightHelper, "cyan");
  return (
    // <spotLight
    //   ref={light}
    //   intensity={0.2}
    //   position={[10, 10, 5]}
    //   shadow-mapSize-width={64}
    //   shadow-mapSize-height={64}
    //   castShadow
    //   shadow-bias={-0.001}
    // />
    <pointLight ref={light} intensity={0.3} color={"red"} />
  );
}
const Scene4Models = () => {
  const { scene } = useGLTF("/gltf/light.glb");
  //   const clock = new THREE.Clock();

  const onStageClick = () => {};

  return (
    <>
      <mesh onClick={onStageClick} position={[-3.3, 4.55, -38.8]}>
        <boxGeometry />
        <meshStandardMaterial args={[3, 3, 3]} color={"red"} />
      </mesh>
      <Drum />
      <Piano />
      <Mic />
      <Guitar />

      {/* light */}
      {/* <group
        scale={[0.007, 0.007, 0.007]}
        position={[-3.3, 4.55, -38.8]}
        rotation={[0, 0, Math.PI]}
      >
        <primitive object={scene}></primitive>
      </group> */}
    </>
  );
};

export default Scene4Models;
