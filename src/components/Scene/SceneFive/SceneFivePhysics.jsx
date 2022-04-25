import React from "react";
import { useBox, usePlane } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import Webcam from "react-webcam";

const SceneFivePhysics = (props) => {
  const [stairs] = useBox(() => ({
    mass: 0,
    position: [-2.1, 2.3, -43.5],
    rotation: [Math.PI * 1.075, 0, 0],
    args: [0.75, 0.05, 5],
    ...props,
  }));
  const [floor] = useBox(() => ({
    mass: 0,
    position: [-1.9, 2.75, -49],
    args: [6, 0.25, 6],
    ...props,
  }));

  // 백마상
  const [horse] = useBox(() => ({
    mass: 0,
    position: [-3, 3.5, -52.2],
    args: [2, 1, 0.01],
    ...props,
  }));

  // 졸업모
  const [cap] = useBox(() => ({
    mass: 0,
    position: [-3.1, 3.5, -49],
    args: [0.5, 0.5, 0.5],
    ...props,
  }));

  // 벤치

  // * Webcam
  return (
    <group>
      <mesh
        ref={stairs}
        position={[-2.1, 2.5, -45]}
        rotation={[Math.PI * 1.075, 0, 0]}
      >
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={floor} position={[-1.9, 2.75, -50]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* 백마상 */}
      <mesh ref={horse} position={[-3, 3.5, -51.4]}>
        <boxGeometry args={[2, 1, 0.1]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* 졸업모 */}
      <mesh ref={cap} position={[-3.1, 3.5, -49]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* Webcam */}
      <group>
        <mesh position={[-4.5, 4.5, -49]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[2, 1.5, 0.1]} />
          <Html
            occlude
            transform
            position={[0, 0, 0.1]}
            rotation={[0, Math.PI, 0]}
          >
            <Webcam audio={false} width={150} height={50} />
          </Html>
          {/* <meshStandardMaterial color="red" /> */}
        </mesh>
      </group>
    </group>
  );
};

export default SceneFivePhysics;
