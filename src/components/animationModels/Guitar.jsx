import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { SpotLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Guitar = ({ light }) => {
  const { scene } = useGLTF("/gltf/ElectricGuitar.glb");
  const lightRef = useRef();

  const [bottom, setBottom] = useState(0);
  const [check, setCheck] = useState(false);

  const clock = new THREE.Clock();
  useFrame(() => {
    const elapsedTime = clock.getElapsedTime();

    if (bottom > 2) {
      setCheck(true);
    } else if (bottom < 0.5) {
      setCheck(false);
    }
    check
      ? setBottom((prev) => (prev -= Math.sin(elapsedTime) * 0.8))
      : setBottom((prev) => (prev += Math.sin(elapsedTime) * 0.8));
  });
  return (
    <>
      {light ? (
        <group ref={lightRef}>
          <SpotLight
            target={scene}
            ref={lightRef}
            position={[-3.4, 4.6, -38.85]}
            color={"#ffffeaccc"}
            anglePower={5}
            radiusTop={0.02}
            radiusBottom={bottom}
          />
        </group>
      ) : (
        <></>
      )}
      <group
        position={[-2.7, 2.55, -39.7]}
        rotation={[0, Math.PI * 1.3, 0]}
        scale={[0.2, 0.2, 0.2]}
      >
        <primitive object={scene}></primitive>
      </group>
    </>
  );
};

export default Guitar;
