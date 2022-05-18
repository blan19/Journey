import React from "react";
import { useBox } from "@react-three/cannon";

const SceneThreePhysics = (props) => {
  const [floor_left] = useBox(() => ({
    mass: 0,
    position: [-2.05, 0.8, -28.8],
    args: [1, 0.4, 5.9],
    ...props,
  }));
  const [floor_right] = useBox(() => ({
    mass: 0,
    position: [3.9, 0.8, -28.8],
    args: [1.25, 0.4, 5.9],
    ...props,
  }));
  const [floor_front] = useBox(() => ({
    mass: 0,
    position: [1, 0.8, -25.9],
    args: [5.9, 0.4, 1.25],
    ...props,
  }));
  const [floor_behind] = useBox(() => ({
    mass: 0,
    position: [1, 0.8, -31.7],
    args: [5.9, 0.4, 1.25],
    ...props,
  }));
  const [bridge] = useBox(() => ({
    mass: 0,
    position: [1, 1.2, -27.1],
    args: [1, 0.0001, 1],
    rotation: [0.15, 0, 0],
    ...props,
  }));
  const [island] = useBox(() => ({
    mass: 0,
    position: [1, 1.5, -28.8],
    args: [1.3, 0.1, 1.3],
    ...props,
  }));
  const [desk] = useBox(() => ({
    mass: 0,
    position: [1, 3, -29.5],
    args: [1, 5, 0.001],
    ...props,
  }));
  const [lake] = useBox(() => ({
    mass: 0,
    position: [1, 0.7, -28.8],
    args: [4, 0.1, 4],
    ...props,
  }));

  const [boat] = useBox(() => ({
    mass: 0,
    position: [2.7, 1.2, -28.8],
    args: [0.2, 0.1, 1.3],
    ...props,
  }));
  return (
    <>
      <mesh ref={floor_left} position={[-1.9, 0.8, -28.8]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={floor_right} position={[3.9, 0.8, -28.8]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={floor_front} position={[1, 0.8, -26.2]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={floor_behind} position={[1, 0.8, -31.7]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={bridge} position={[1, 1.2, -27.1]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={island} position={[1, 1.5, -28.8]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={desk} position={[1, 1.8, -29.5]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={lake} position={[1, 0.7, -28.8]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={boat} position={[2.7, 1.2, -28.8]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default SceneThreePhysics;
