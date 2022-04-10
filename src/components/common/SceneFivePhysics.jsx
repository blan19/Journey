import React from "react";
import { useBox } from "@react-three/cannon";

const SceneFivePhysics = (props) => {
  const [floor] = useBox(() => ({
    mass: 0,
    position: [-1.9, 2.75, -49],
    args: [6, 0.25, 6],
    ...props,
  }));
  return (
    <group>
      <mesh ref={floor} position={[-1.9, 2.75, -50]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
};

export default SceneFivePhysics;
