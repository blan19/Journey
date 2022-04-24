import React from "react";
import { useGLTF } from "@react-three/drei";
import { SpotLight } from "@react-three/drei";

const Mic = ({ light }) => {
  const { scene } = useGLTF("/gltf/mic.glb");

  return (
    <>
      {light ? (
        <group>
          <SpotLight
            target={scene}
            // position={[-2.4, 4.45, -38.8]}
            position={[-3.4, 4.6, -38.85]}
            color={"FEEEAD"}
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
