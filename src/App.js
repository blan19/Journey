import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls, Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Player } from "./components/common/Player";
import MouseReticle from "./components/common/MouseReticle";
import "./styles.css";
import Map from "./components/common/Map";
import Ground from "./components/common/Ground";

const App = () => {
  const controlsRef = useRef();
  const isLocked = useRef(false);
  return (
    <Canvas
      shadows
      gl={{ alpha: false, antialias: true }}
      camera={{ fov: 45 }}
      raycaster={{
        computeOffsets: (_, { size: { width, height } }) => {
          if (isLocked.current) {
            return {
              offsetX: width / 2,
              offsetY: height / 2,
            };
          } else {
            return null;
          }
        },
      }}
    >
      {/* <MouseReticle /> */}
      <PointerLockControls
        onUpdate={() => {
          if (controlsRef.current) {
            controlsRef.current.addEventListener("lock", () => {
              console.log("lock");
              isLocked.current = true;
            });
            controlsRef.current.addEventListener("unlock", () => {
              console.log("unlock");
              isLocked.current = false;
            });
          }
        }}
        ref={controlsRef}
      />
      <primitive object={new THREE.AxesHelper(100)} />
      <gridHelper args={[100, 100]} />
      {/* <Sky sunPosition={[100, 20, 100]} /> */}
      <Sky sunPosition={[0, 100, 0]} />
      <ambientLight intensity={0.5} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <fog color="#262837" near={1} far={15} />
      <Physics gravity={[0, -30, 0]}>
        <Ground />
        <Map />
        <Player />
      </Physics>
    </Canvas>
  );
};

export default App;
