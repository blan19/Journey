import React from "react";
import * as THREE from "three";
import { useSphere } from "@react-three/cannon";

export default function Road() {
  // const []
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
}
