import React, { useEffect, useRef, useState } from "react";
import { Drum, Guitar, Mic } from "../../animationModels";
import { Html } from "@react-three/drei";
import { SpotLight, useGLTF, useHelper } from "@react-three/drei";
import * as THREE from "three";
import "./styles.css";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import Light from "../../animationModels/Light";
import Virtualizer from "../../common/Virtualizer";
import ClickBlack from "../../Click/ClickBlack";
import ClickWhite from "../../Click";
import Fireworks from "../../animationModels/Fireworks";

const SceneFourModel = () => {
  const light = useRef();
  // useHelper(light, THREE.SpotLightHelper, "cyan");

  const [IsLightOn, setIsLightOn] = useState(false);

  const onStageClick = () => {
    setIsLightOn(!IsLightOn);
  };

  return (
    <>
      <group>
        <ClickWhite
          position={[-3, 3, -40]}
          rotation={[Math.PI * 0.5, 0, Math.PI * 1.5]}
          scale={[0.25, 0.25, 0.25]}
          onClick={onStageClick}
        />

        <mesh
          position={[-3, 3.07, -40.2]}
          rotation={[0, Math.PI * 0.5, 0]}
          scale={[0.3, 0.13, 0.55]}
          onClick={onStageClick}
        >
          <boxGeometry />
          <meshBasicMaterial color="blue" transparent opacity={0} />
        </mesh>
      </group>
      <Drum light={IsLightOn} />
      <Mic light={IsLightOn} />
      <Guitar light={IsLightOn} />
      {/* <Light /> */}
      {/* <Virtualizer show={IsLightOn} /> */}
    </>
  );
};

export default SceneFourModel;
