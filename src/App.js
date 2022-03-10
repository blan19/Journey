import React from "react";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls, Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import "./styles.css";
import { Player } from "./components/common/Player";
import Ground from "./components/common/Ground";

const App = () => {
  return (
    <Canvas shadows gl={{ alpha: false }} camera={{ fov: 45 }}>
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={0.5} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <fog color="#262837" near={1} far={15} />
      <Physics gravity={[0, -30, 0]}>
        <Player />
        <Ground />
      </Physics>
      <PointerLockControls />
    </Canvas>
  );
};

export default App;
