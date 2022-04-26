import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { SpotLight } from "@react-three/drei";

const Guitar = ({ light }) => {
  const { scene } = useGLTF("/gltf/Eguitar.glb");

  const lightRef = useRef();
  return (
    <>
      {light ? (
        <group ref={lightRef}>
          <SpotLight
            target={scene}
            ref={lightRef}
            position={[-3.4, 4.6, -38.85]}
            color={"#ffecc4"}
            anglePower={7}
            radiusTop={0.02}
          />
        </group>
      ) : (
        <></>
      )}
      <group
        position={[-2.4, 2.55, -39.7]}
        rotation={[0, Math.PI * 1.3, 0]}
        scale={[0.2, 0.2, 0.2]}
      >
        <primitive object={scene}></primitive>
      </group>
    </>
  );
};

export default Guitar;
