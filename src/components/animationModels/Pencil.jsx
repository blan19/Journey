import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

const Pencil = ({ actions }) => {
  const onPencilClick = () => {
    actions.pencilAction.play();
  };

  return (
    <>
      <mesh
        scale={[0.009, 0.13, 0.007]}
        onClick={onPencilClick}
        position={[-0.96, 2.9, -20.8]}
        rotation={[Math.PI / 2, 0, 2.795]}
      >
        <boxGeometry />
        <meshStandardMaterial
          args={[1, 1, 1]}
          color={"red"}
          opacity={0.0}
          transparent
        />
      </mesh>
    </>
  );
};

export default Pencil;
