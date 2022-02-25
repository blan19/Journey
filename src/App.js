import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { useTransition } from "@react-spring/core";
import { useLocation } from "wouter";
import "./styles.css";
import Layouts from "./Layouts";

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
    <Canvas camera={{ position: [0, 0, -10], fov: 15 }}>
      <OrbitControls />
      <Suspense fallback={null}>
        <Layouts transition={transition} />
      </Suspense>
    </Canvas>
  );
};

export default App;
