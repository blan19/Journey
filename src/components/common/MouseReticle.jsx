import React, { useRef } from "react";
import { Vector3 } from "three";
import { useThree, useFrame } from "@react-three/fiber";

export default function MouseReticle() {
  const { camera, mouse } = useThree();
  const mouseReticle = useRef();

  useFrame(() => {
    if (mouseReticle.current) {
      const vector = new Vector3(mouse.x, mouse.y, -0.8).unproject(camera);
      mouseReticle.current.position.set(...vector.toArray());
    }
  });

  return (
    <mesh ref={mouseReticle}>
      <sphereBufferGeometry args={[0.0005, 100, 100]} />
      <meshBasicMaterial color={"black"} />
    </mesh>
  );
}
