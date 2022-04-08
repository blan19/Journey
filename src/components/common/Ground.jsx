import React from "react";
import { useBox } from "@react-three/cannon";

const Ground = (props) => {
  const [floor] = useBox(() => ({
    mass: 0,
    position: [0, -0.5, 0],
    args: [100, 1, 100],
    ...props,
  }));
  return (
    <>
      <mesh ref={floor}>
        <boxGeometry position={[0, -1, 0]} args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default Ground;
