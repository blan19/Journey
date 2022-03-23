import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls, Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import "./styles.css";
import { Player } from "./components/common/Player";
import Ground from "./components/common/Ground";
import Guest from "./Pages/Guest";
import Road from "./components/common/Road";

const App = () => {
  return (
    <Canvas shadows gl={{ alpha: false, antialias: true }} camera={{ fov: 45 }}>
      <primitive object={new THREE.AxesHelper(100)} />
      <gridHelper args={[100, 100]} />
      {/* <Sky sunPosition={[100, 20, 100]} /> */}
      <Sky sunPosition={[0, 100, -100]} />
      <ambientLight intensity={0.5} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <fog color="#262837" near={1} far={15} />
      <Physics gravity={[0, -30, 0]}>
        <Player />
        <Road />
        <Ground />
        <Guest />
      </Physics>
    </Canvas>
  );
};

export default App;
