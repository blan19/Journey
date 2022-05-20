import { Sky, Cloud, Stars } from "@react-three/drei";
import React from "react";

const Clouds = (props) => {
  return (
    <group>
      {/* 하늘 */}
      <Sky
        // azimuth={0.25}
        // turbidity={8}
        // mieCoefficient={0.005}
        // mieDirectionalG={0.8}
        // rayleigh={2}
        // inclination={0.49}
        // 1
        // azimuth={0.25}
        // turbidity={1.5}
        // mieCoefficient={0.005}
        // mieDirectionalG={0.3}
        // rayleigh={2}
        // inclination={0.495}
        // 2
        // azimuth={0.25}
        // turbidity={1.5}
        // mieCoefficient={0.005}
        // mieDirectionalG={0.3}
        // rayleigh={1.5}
        // inclination={0.495}
        // 3
        azimuth={0.25}
        turbidity={0}
        rayleigh={0.25}
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
        // speed={0.2}
        opacity={0.2}
        depth={1}
        segments={50}
        {...props}
      />
    </group>
  );
};

export default Clouds;
