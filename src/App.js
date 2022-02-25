import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import SceneOne from "./components/SceneOne";
import "./styles.css";

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, -10], fov: 15 }}>
      <OrbitControls />
      {/* <ambientLight castShadow /> */}
      <pointLight castShadow />
      <spotLight castShadow position={[0, 20, 1]} />
      <Suspense fallback={null}>
        <SceneOne />
        <ContactShadows />
      </Suspense>
    </Canvas>
  );
};

export default App;
