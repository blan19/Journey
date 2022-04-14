import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";

const Pencil = ({ actions }) => {
  const [active, setActive] = useState(false);
  const onPencilClick = () => {
    actions.pencilAction.play();
    console.log(active);
    setTimeout(() => {
      actions.S2NewspaperAni1.play();
    }, 145);

    setTimeout(() => {
      actions.S2NewspaperAni2.play();
    }, 195);

    setTimeout(() => {
      actions.S2NewspaperAni3.play();
    }, 230);
    setTimeout(() => {
      actions.S2NewspaperAni4.play();
    }, 275);
  };

  useEffect(() => {
    actions.pencilAction.repetitions = 1;
    actions.S2NewspaperAni1.repetitions = 1;
    actions.S2NewspaperAni2.repetitions = 1;
    actions.S2NewspaperAni3.repetitions = 1;
    actions.S2NewspaperAni4.repetitions = 1;
    console.log(actions.S2NewspaperAni4);
  }, []);
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
