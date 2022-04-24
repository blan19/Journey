import React from "react";
import { useGLTF } from "@react-three/drei";
import { SpotLight } from "@react-three/drei";

const Drum = ({ light }) => {
  const { scene } = useGLTF("/gltf/drum.glb");

  return (
    <>
      {light ? (
        <group>
          <SpotLight
            target={scene}
            // position={[-3.1, 4.45, -38]}
            position={[-3.4, 4.6, -38.85]}
            color={"FEEEAD"}
          />
        </group>
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
