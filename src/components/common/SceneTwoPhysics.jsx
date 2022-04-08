import React from "react";
import { useBox } from "@react-three/cannon";

const SceneTwoPhysics = (props) => {
  const [stairs] = useBox(() => ({
    mass: 0,
    position: [0.1, 1.2, -13],
    rotation: [Math.PI * 1.075, 0, 0],
    args: [0.75, 0.05, 5],
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
    position: [0, 3, -22],
    args: [3.5, 1.5, 0.02],
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
        <meshStandardMaterial />
      </mesh>
      <mesh ref={floor_1} position={[-0.6, 1.4, -18]}>
        <boxGeometry args={[3, 0.4, 5]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* room */}
      <mesh ref={floor_2} position={[0.65, 2, -19.75]}>
        <boxGeometry args={[6, 0.4, 3.25]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* wall */}
      <mesh ref={wall_1} position={[-2.13, 3, -19.75]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[0, 3, -21.25]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  );
};

export default SceneTwoPhysics;
