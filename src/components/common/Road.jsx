import React from "react";
import * as THREE from "three";
import { useSphere } from "@react-three/cannon";
import Room from "./Room";

export default function Road() {
  // const []
  return (
    <group>
      <mesh position={[0, -0.98, -5]}>
        <cylinderBufferGeometry attach="geometry" args={[1, 1, 2, 32]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <mesh position={[0, -0.03, -6.5]}>
        <boxBufferGeometry args={[1, 0.1, 2]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <mesh position={[-25, -0.02, -7.5]}>
        <boxBufferGeometry args={[50, 0.1, 1]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <mesh position={[25, -0.02, -7.5]}>
        <boxBufferGeometry args={[50, 0.1, 1]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <mesh position={[0, -0.02, -13]}>
        <boxBufferGeometry args={[1, 0.1, 10]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <mesh position={[-25, -0.02, -18.5]}>
        <boxBufferGeometry args={[50, 0.1, 1]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <mesh position={[25, -0.02, -18.5]}>
        <boxBufferGeometry args={[50, 0.1, 1]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <mesh position={[0, -0.02, -24]}>
        <boxBufferGeometry args={[1, 0.1, 10]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <mesh position={[-25, -0.02, -28.5]}>
        <boxBufferGeometry args={[50, 0.1, 1]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <mesh position={[25, -0.02, -28.5]}>
        <boxBufferGeometry args={[50, 0.1, 1]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <mesh position={[0, -0.02, -34]}>
        <boxBufferGeometry args={[1, 0.1, 10]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <mesh position={[-25, -0.02, -38.5]}>
        <boxBufferGeometry args={[50, 0.1, 1]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <mesh position={[25, -0.02, -38.5]}>
        <boxBufferGeometry args={[50, 0.1, 1]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      {/* <mesh position={[25, -0.02, 0]}>
        <boxBufferGeometry args={[50, 0.1, 1]} />
        <meshStandardMaterial color="skyblue" />
      </mesh> */}
      <Room position={[-46, -3, -15]} rotation={[0, Math.PI * 0.5, 0]} />
    </group>
  );
}

// rotation={[Math.PI * 0.5, 0, 0]}
// position={[-25, -1, -6]}
