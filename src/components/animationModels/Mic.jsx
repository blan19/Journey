import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { SpotLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Mic = ({ light }) => {
  const { scene } = useGLTF("/gltf/mic.glb");
  const [bottom, setBottom] = useState(3);

  const clock = new THREE.Clock();
  useFrame(() => {
    const elapsedTime = clock.getElapsedTime();

    setBottom((prev) => (prev += Math.sin(elapsedTime) * 0.8));
    if (bottom > 2) {
      setBottom((prev) => (prev = Math.sin(elapsedTime) * 0.8));
    }
  });
  return (
    <>
      {light ? (
        <group>
          <SpotLight
            target={scene}
            position={[-3.4, 4.6, -38.85]}
            color={"#ffecc4"}
            anglePower={4}
            radiusTop={0.02}
            radiusBottom={bottom}
          />
        </group>
      ) : (
        <></>
      )}
      <group
        position={[-2.4, 2.55, -38.8]}
        rotation={[0, Math.PI * 0.5, 0]}
        scale={[0.25, 0.25, 0.25]}
      >
        <primitive object={scene}></primitive>
      </group>
    </>
  );
};

export default Mic;
