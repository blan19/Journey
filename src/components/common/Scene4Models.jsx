import React, { useEffect, useRef, useState } from "react";
import Drum from "../animationModels/Drum";
import Guitar from "../animationModels/Guitar";
import Mic from "../animationModels/Mic";
import Piano from "../animationModels/Piano";
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
      {IsLightOn ? (
        <group>
          <SpotLight
            ref={light}
            distance={2}
            position={[-2, 4.45, -39]}
            intensity={0.3}
            color={"blue"}
            angle={0.1}
          />
        </group>
      ) : (
        <></>
      )}
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
              Click
            </div>
          </Html>
        </mesh>
      </group>
      <Drum />
      <Piano />
      <Mic />
      <Guitar />
    </>
  );
};

export default Scene4Models;
