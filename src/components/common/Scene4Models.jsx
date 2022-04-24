import React, { useEffect, useRef, useState } from "react";
import Drum from "../animationModels/Drum";
import Guitar from "../animationModels/Guitar";
import Mic from "../animationModels/Mic";
import { SpotLight, useGLTF, useHelper } from "@react-three/drei";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import "./styles.css";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const Scene4Models = () => {
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

export default Scene4Models;
