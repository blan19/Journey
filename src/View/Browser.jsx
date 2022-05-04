import React, { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import {
  Player,
  Map,
  Clouds,
  Cursor,
  SceneFiveEnd,
  SceneOneRegister,
  Loading,
} from "../components";
import "../styles.css";
import useStore from "../store";
import { PerspectiveCamera } from "@react-three/drei";
import { useScreenshot } from "use-react-screenshot";
import Start from "../components/Start";
import { If } from "../lib/Condition";

const Browser = () => {
  const container = useRef(null);
  const canvas = useRef();
  const camera = useRef();
  const controlsRef = useRef();
  const { isLocked, setIsLockedTrue, setIsLockedFalse, control, start } =
    useStore((state) => state);
  const [image, takeImage] = useScreenshot();
  const getImage = () => takeImage(container.current);

  return (
    <div id="container" ref={container} style={{ zIndex: "96733899" }}>
      <Start />
      <If condition={start}>
        <Suspense fallback={<Loading />}>
          <Cursor />
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
              preserveDrawingBuffer: true,
            }}
            camera={{ fov: 45 }}
            raycaster={{
              computeOffsets: (_, { size: { width, height } }) => {
                if (isLocked) {
                  return {
                    offsetX: width / 2,
                    offsetY: height / 2,
                  };
                } else {
                  return null;
                }
              },
            }}
            ref={canvas}
          >
            {control === false && (
              <PointerLockControls
                onUpdate={() => {
                  if (controlsRef.current) {
                    controlsRef.current.addEventListener("lock", () => {
                      console.log("lock");
                      setIsLockedTrue();
                    });
                    controlsRef.current.addEventListener("unlock", () => {
                      console.log("unlock");
                      setIsLockedFalse();
                    });
                  }
                }}
                ref={controlsRef}
              />
            )}
            <ambientLight intensity={0.2} />
            <directionalLight args={["gray", 1]} />
            <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
            <fog color="#262837" near={1} far={15} />
            <PerspectiveCamera ref={camera} />
            <Physics gravity={[0, -30, 0]}>
              <Clouds />
              {/* <Ground /> */}
              <Map control={controlsRef} getImage={getImage} image={image} />
              <Player />
            </Physics>
          </Canvas>
          <SceneOneRegister />
          <SceneFiveEnd image={image} />
        </Suspense>
      </If>
    </div>
  );
};

export default Browser;
