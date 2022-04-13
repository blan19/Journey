import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Player } from "./components/common/Player";
import MouseReticle from "./components/common/MouseReticle";
import "./styles.css";
import Map from "./components/common/Map";
import Ground from "./components/common/Ground";
import Clouds from "./components/Clouds";

const App = () => {
  const controlsRef = useRef();
  const isLocked = useRef(false);
  return (
    <Canvas
      frameloop="demand"
      shadows
      performance={{ min: 0.5, max: 1 }}
      gl={{
        alpha: false,
        antialias: true,
        toneMappingExposure: 1,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding,
      }}
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
      <MouseReticle />
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

      <ambientLight intensity={0.2} />

      <directionalLight args={["gray", 1]} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <fog color="#262837" near={1} far={15} />
      <Physics gravity={[0, -30, 0]}>
        <Clouds />
        <Ground />
        <Map />
        <Player />
      </Physics>
    </Canvas>
  );
};

export default App;
