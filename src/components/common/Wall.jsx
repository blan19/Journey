import { usePlane } from "@react-three/cannon";
import React from "react";

export default function Wall(props) {
  return (
    <group>
      {/* top */}
      <mesh
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 15, -17.5]}
        receiveShadow
      >
        <planeGeometry args={[50, 40]} />
        <meshStandardMaterial fog color="gray" />
      </mesh>
      {/* left - 1 */}
      <mesh position={[-5, 12.5, -2.25]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[9.5, 25]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[-9.75, 12.5, -7]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[9.5, 25]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      {/* left - 2 */}
      <mesh position={[-5, 12.5, -13.75]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[9.5, 25]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[-9.75, 12.5, -18.5]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[9.5, 25]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[-9.75, 12.5, -9]}>
        <planeGeometry args={[9.5, 25]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      {/* right - 1 */}
      <mesh position={[5, 12.5, -2.25]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[9.5, 25]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[9.75, 12.5, -7]} rotation={[0, -Math.PI, 0]}>
        <planeGeometry args={[9.5, 25]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      {/* right - 2 */}
      <mesh position={[5, 12.5, -13.75]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[9.5, 25]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[9.75, 12.5, -18.5]} rotation={[0, -Math.PI, 0]}>
        <planeGeometry args={[9.5, 25]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[9.75, 12.5, -9]}>
        <planeGeometry args={[9.5, 25]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </group>
  );
}
