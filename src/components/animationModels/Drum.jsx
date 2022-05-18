import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { SpotLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Object3D } from "three";
import * as THREE from "three";

const Drum = ({ light, box }) => {
  const { scene } = useGLTF("/gltf/drum.glb");

  const lightRef = useRef();
  // useFrame(() => {
  //   lightRef.current.target
  // });

  const [bottom, setBottom] = useState(2);

  const clock = new THREE.Clock();
  useFrame(() => {
    const elapsedTime = clock.getElapsedTime();

    setBottom((prev) => (prev += Math.sin(elapsedTime) * 0.8));
    if (bottom > 2) {
      setBottom((prev) => (prev = Math.sin(elapsedTime) * 0.8));
    }
  });
  useEffect(() => {
    if (light) {
      console.log(lightRef.current);
    }
  }, []);
  return (
    <>
      {light ? (
        <>
          <group>
            <SpotLight
              target={scene}
              position={[-3.4, 4.6, -38.85]}
              color={"#fff9ed"}
              anglePower={7}
              radiusTop={0.02}
              radiusBottom={bottom}
            >
              {/* <Object3D ref={obj} position={[-3.4, 3, -38.85]} color={"red"} /> */}
            </SpotLight>
          </group>
        </>
      ) : (
        <></>
      )}

      <group
        scale={[0.06, 0.06, 0.06]}
        position={[-3.1, 2.55, -38]}
        rotation={[0, Math.PI * 0.8, 0]}
      >
        <primitive object={scene}></primitive>
      </group>
    </>
  );
};

export default Drum;
