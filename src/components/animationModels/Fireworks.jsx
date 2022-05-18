import { useGLTF, useAnimations } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

const Fireworks = () => {
  const { scene, nodes } = useGLTF("/gltf/fireworks.glb");
  //   const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(nodes["sparks"]);
  }, []);
  return (
    <>
      <group position={[-2, 2.6, -39.5]} scale={[0.03, 0.06, 0.03]}>
        <mesh
          material={nodes["main"].material}
          geometry={nodes["main"].geometry}
        ></mesh>
        <mesh
          material={nodes["topside"].material}
          geometry={nodes["topside"].geometry}
        ></mesh>
      </group>
      <group position={[-2, 3, -39.5]} scale={[0.03, 0.06, 0.03]}>
        <mesh
          material={nodes["sparks"].material}
          geometry={nodes["sparks"].geometry}
        ></mesh>
      </group>
    </>
  );
};

export default Fireworks;
