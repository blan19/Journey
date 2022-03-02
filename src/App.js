import React, { Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTransition } from "@react-spring/core";
import { useLocation } from "wouter";
import * as THREE from "three";
import "./styles.css";
import Layouts from "./Layouts";

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() =>
    camera.position.lerp(
      vec.set(-mouse.x * 0.5, -mouse.y * 0.5, camera.position.z),
      0.02
    )
  );
}

const App = () => {
  const [location] = useLocation();
  const transition = useTransition(location, {
    from: {
      position: [0, 0, -20],
      rotation: [0, Math.PI, 0],
      scale: [0, 0, 0],
      opacity: 0,
    },
    enter: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      opacity: 1,
    },
    leave: {
      position: [0, 0, -10],
      rotation: [0, -Math.PI, 0],
      scale: [0, 0, 0],
      opacity: 0,
    },
    config: () => (n) => n === "opacity" && { friction: 60 },
  });
  return (
    <Canvas concurrent shadows>
      <Suspense fallback={null}>
        <color attach="background" args={["#DFD3C3"]} />
        <Layouts transition={transition} />
      </Suspense>
    </Canvas>
  );
};

export default App;
