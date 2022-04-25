import React, { useRef, useMemo } from "react";
import { useBox } from "@react-three/cannon";
import * as THREE from "three";
import { useHelper } from "@react-three/drei";

const SceneStrat = (props) => {
  const [ref1] = useBox(() => ({
    mass: 0,
    position: [0.1, 0.35, 0],
    args: [4, 0.35, 4],
    ...props,
  }));
  const [ref2] = useBox(() => ({
    mass: 0,
    position: [-1.65, 1.2, -0.1],
    args: [0.4, 2, 4],
    ...props,
  }));
  const [ref3] = useBox(() => ({
    mass: 0,
    position: [1.85, 1.2, -0.15],
    args: [0.4, 2, 4],
    ...props,
  }));
  const [ref4] = useBox(() => ({
    mass: 0,
    position: [0, 0.3, -3.7],
    args: [1, 0.3, 2.8],
    ...props,
  }));

  // 라이트
  const entry_2 = useMemo(
    () => new THREE.SpotLight("white", 0.25, 8, Math.PI / 5),
    []
  );
  const entry_1 = useRef();

  return (
    <>
      <mesh ref={ref1} position={[0, 0.35, 0]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={ref2} position={[-1.65, 1.2, -0.1]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={ref3} position={[1.85, 1.2, -0.1]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={ref4} position={[0, 0.3, -3.7]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default SceneStrat;
