import { Sky, Cloud, Stars } from "@react-three/drei";
import React from "react";

const Clouds = (props) => {
  return (
    <group>
      {/* 하늘 */}
      <Sky
        // sunPosition={[0, 100, 0]}
        azimuth={0.25}
        turbidity={8}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
        // rayleigh={6}
        rayleigh={2}
        inclination={0.49}
      />
      {/* 별 */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      {/* 구름 */}
      <Cloud
        position={[50, 50, 0]}
        speed={0.2}
        opacity={0.2}
        depth={1}
        segments={50}
        {...props}
      />
    </group>
  );
};

export default Clouds;
