import React, { useRef } from "react";
import * as THREE from "three";
import {
  OrthographicCamera,
  PerspectiveCamera,
  useCamera,
  useHelper,
  useTexture,
} from "@react-three/drei";
import { CameraHelper } from "three";
import * as dat from "dat.gui";
import { useLoader } from "@react-three/fiber";

export default function OrtGround() {
  const camera = useRef();
  const floor = useRef();
  const plane = useRef();
  useHelper(camera, CameraHelper, 1, "hotpink");
  const soil = useLoader(THREE.TextureLoader, "/background/soil.jpg");
  const grass = useLoader(THREE.TextureLoader, "/background/grass.jpg");
  soil.wrapS = soil.wrapT = THREE.RepeatWrapping;
  grass.wrapS = grass.wrapT = THREE.RepeatWrapping;
  return (
    <>
      <OrthographicCamera ref={camera} />
      <group>
        {/* floor */}
        <mesh ref={floor} position={[0, 1, 0]}>
          <boxGeometry args={[40, 2, 40]} />
          <meshToonMaterial color="#ffe066" map={soil} map-repeat={[10, 3]} />
        </mesh>
        {/* grass */}
        <mesh
          ref={plane}
          position={[0, 2.1, 0]}
          rotation={[Math.PI / 2, Math.PI, 0]}
        >
          <planeGeometry args={[40, 40]} />
          <meshToonMaterial color="#37b24d" map={grass} map-repeat={[7, 7]} />
        </mesh>
        {/* apartment */}
        <mesh ref={floor} position={[-5, 4.5, 0]}>
          <boxGeometry args={[4, 5, 4]} />
          <meshToonMaterial color="black" />
        </mesh>
      </group>
    </>
  );
}
