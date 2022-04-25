import React, { useEffect, useRef, useState } from "react";
import { Drum, Guitar, Mic } from "../../animationModels";
import { Html } from "@react-three/drei";
import { SpotLight, useGLTF, useHelper } from "@react-three/drei";
import * as THREE from "three";
import "./styles.css";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const SceneFourModel = () => {
  const light = useRef();
  // useHelper(light, THREE.SpotLightHelper, "cyan");

  const [IsLightOn, setIsLightOn] = useState(false);

  const onStageClick = () => {
    setIsLightOn(!IsLightOn);
  };

  useEffect(() => {
    console.log(IsLightOn);
  }, [IsLightOn]);

  return (
    <>
      <group>
        <mesh
          onClick={onStageClick}
          position={[-3, 3, -40]}
          rotation={[0, Math.PI * 0.5, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial
            args={[0.5, 0.5, 0.5]}
            color={"red"}
            opacity={0}
            transparent
          />
          <Html transform>
            <div onClick={onStageClick} className="text">
              click
            </div>
          </Html>
        </mesh>
      </group>
      <Drum light={IsLightOn} />
      <Mic light={IsLightOn} />
      <Guitar light={IsLightOn} />
    </>
  );
};

export default SceneFourModel;
