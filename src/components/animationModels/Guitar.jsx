import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { SpotLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Guitar = ({ light }) => {
  const { scene } = useGLTF("/gltf/ElectricGuitar.glb");
  const [colorCode1, SetColorCode1] = useState(0);
  const [colorCode2, SetColorCode2] = useState(10);
  const lightRef = useRef();

  const [bottom, setBottom] = useState(3);

  const clock = new THREE.Clock();
  useFrame(() => {
    const elapsedTime = clock.getElapsedTime();

    setBottom((prev) => (prev += Math.sin(elapsedTime) * 0.8));
    if (bottom > 2) {
      setBottom((prev) => (prev = Math.sin(elapsedTime) * 0.8));
    }
  });
  // useFrame(() => {
  //   const elapsedTime = clock.getElapsedTime();

  //   SetColorCode1((prev) => (prev += Math.cos(elapsedTime)));
  //   if (colorCode1 > 99) {
  //     SetColorCode1((prev) => (prev = -Math.cos(elapsedTime)));
  //   }
  //   SetColorCode2((prev) => (prev += Math.sin(elapsedTime)));
  //   if (colorCode2 > 99) {
  //     SetColorCode2((prev) => (prev = Math.sin(elapsedTime)));
  //   }

  //   console.log(colorCode1, colorCode2);
  // });
  return (
    <>
      {light ? (
        <group ref={lightRef}>
          <SpotLight
            target={scene}
            ref={lightRef}
            position={[-3.4, 4.6, -38.85]}
            color={"#ffffeaccc"}
            // color={`#00${colorCode1}${colorCode2}`}
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
