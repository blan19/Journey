import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";

const Pencil = ({ actions }) => {
  const onPencilClick = () => {
    actions.pencilAction.play();
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
    setTimeout(() => {
      actions.S2NewspaperAni1.paused = true;
    }, 2650);
    setTimeout(() => {
      actions.S2NewspaperAni2.paused = true;
    }, 4400);
    setTimeout(() => {
      actions.S2NewspaperAni3.paused = true;
    }, 6100);
    setTimeout(() => {
      actions.S2NewspaperAni4.paused = true;
    }, 7850);
    setTimeout(() => {
      actions.pencilAction.paused = true;
      console.log(actions.pencilAction);
    }, 8000);
    // setTimeout(() => {}, 8000);
  };

  useEffect(() => {
    // actions.pencilAction.repetitions = 1;
    // actions.S2NewspaperAni1.repetitions = 1;
    // actions.S2NewspaperAni2.repetitions = 1;
    // actions.S2NewspaperAni3.repetitions = 1;
    // actions.S2NewspaperAni4.repetitions = 1;

    console.log(actions.pencilAction);
    // actions.S2NewspaperAni1.clampWhenFinished = true;
    // actions.S2NewspaperAni2.clampWhenFinished = true;
    // actions.S2NewspaperAni3.clampWhenFinished = true;
    // actions.S2NewspaperAni4.clampWhenFinished = true;
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
