import React from "react";
import { useBox } from "@react-three/cannon";

const SceneFourPhysics = (props) => {
  const [stair] = useBox(() => ({
    mass: 0,
    position: [-0.7, 1.6, -34],
    rotation: [Math.PI * 1.575, 0, 0],
    args: [0.7, 3, 0.001],
    ...props,
  }));

  const [floor_1] = useBox(() => ({
    mass: 0,
    position: [-2, 1.75, -39],
    args: [5, 0.25, 6],
    ...props,
  }));

  const [concert] = useBox(() => ({
    mass: 0,
    position: [-2.9, 2.3, -38.9],
    args: [1.5, 0.25, 2.65],
    ...props,
  }));

  const [stone_stair] = useBox(() => ({
    mass: 0,
    position: [0.75, 2.75, -38.75],
    rotation: [0, 0, Math.PI * 0.6],
    args: [0.05, 1.4, 4],
    ...props,
  }));
  const [concert_back] = useBox(() => ({
    mass: 0,
    position: [-4, 4, -38.8],
    args: [0.1, 1.15, 2.55],
    ...props,
  }));

  return (
    <group>
      <mesh
        ref={stair}
        position={[-0.7, 1.6, -34]}
        rotation={[Math.PI * 1.575, 0, 0]}
      >
        <boxGeometry args={[0.7, 3, 0.001]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={floor_1} position={[-1, 1.75, -39]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[0.75, 2.75, -38.75]} rotation={[0, 0, Math.PI * 0.6]}>
        <boxGeometry args={[0.05, 1.4, 4]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* 콘서트홀 */}
      <mesh position={[-2.9, 2.3, -38.9]}>
        <boxGeometry args={[1.5, 0.25, 2.65]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={concert_back} position={[-4, 4, -38.8]}>
        <boxGeometry args={[0.1, 1.15, 2.55]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* 무대 앞 팬스, 스피커  */}
      {/* <mesh position={[-1.5, 3, -38.8]}>
        <boxGeometry args={[0.1, 1.15, 2.55]} />
        <meshStandardMaterial color="red" />
      </mesh> */}
    </group>
  );
};

export default SceneFourPhysics;
