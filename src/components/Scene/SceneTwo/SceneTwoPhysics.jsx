import React, { useEffect } from "react";
import { useBox } from "@react-three/cannon";

const SceneTwoPhysics = (props) => {
  const [stairs] = useBox(() => ({
    mass: 0,
    position: [0.1, 1.2, -13],
    rotation: [Math.PI * 1.075, 0, 0],
    args: [1.25, 0.05, 5],
    ...props,
  }));

  const [floor_1] = useBox(() => ({
    mass: 0,
    position: [-0.6, 1.4, -18],
    args: [3, 0.4, 5],
    ...props,
  }));

  const [floor_2] = useBox(() => ({
    mass: 0,
    position: [0.65, 2, -19.75],
    args: [6, 0.4, 3.25],
    ...props,
  }));

  const [wall_1] = useBox(() => ({
    mass: 0,
    position: [-3, 3, -19.75],
    args: [0.000001, 1.5, 3.25],
    ...props,
  }));

  const [wall_2] = useBox(() => ({
    mass: 0,
    position: [-1, 3, -22],
    args: [3.5, 1.5, 0.02],
    ...props,
  }));

  const [stair] = useBox(() => ({
    mass: 0,
    position: [2.45, 1.5, -24],
    rotation: [Math.PI * -1.575, 0, 0],
    args: [1.25, 4.5, 0.001],
    ...props,
  }));

  return (
    <group>
      <mesh
        ref={stairs}
        position={[0.1, 1.2, -13]}
        rotation={[Math.PI * 1.075, 0, 0]}
      >
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={floor_1} position={[-0.6, 1.4, -18]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* room */}
      <mesh ref={floor_2} position={[0.65, 2, -19.75]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* wall */}
      <mesh ref={wall_1} position={[-2.13, 3, -19.75]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[-1, 3, -21.25]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* stair */}
      <mesh position={[2.45, 1.5, -24]} rotation={[Math.PI * -1.575, 0, 0]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
};

export default SceneTwoPhysics;
