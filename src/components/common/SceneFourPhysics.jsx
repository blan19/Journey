import React from "react";
import { useBox } from "@react-three/cannon";

const SceneFourPhysics = (props) => {
  const [stairs_1] = useBox(() => ({
    mass: 0,
    position: [-0.7, 1.2, -34],
    rotation: [Math.PI * 1.075, 0, 0],
    args: [0.75, 0.05, 5],
    ...props,
  }));

  const [stairs_2] = useBox(() => ({
    mass: 0,
    position: [-2.1, 2.3, -43.5],
    rotation: [Math.PI * 1.075, 0, 0],
    args: [0.75, 0.05, 5],
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

  return (
    <group>
      <mesh
        ref={stairs_1}
        position={[0.1, 1.2, -33]}
        rotation={[Math.PI * 1.075, 0, 0]}
      >
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh
        ref={stairs_2}
        position={[-2.1, 2.5, -45]}
        rotation={[Math.PI * 1.075, 0, 0]}
      >
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[-1, 1.75, -39]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* 콘서트홀 */}
      <mesh position={[-2.9, 2.3, -38.9]}>
        <boxGeometry args={[1.5, 0.25, 2.65]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
};

export default SceneFourPhysics;
