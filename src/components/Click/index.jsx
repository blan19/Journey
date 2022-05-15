import { useGLTF, Plane, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
const ClickWhite = ({ position, rotation, scale, onClick }) => {
  const { nodes } = useGLTF("/gltf/clickWhite.glb");

  return (
    <group>
      <mesh
        onClick={onClick}
        position={position}
        rotation={rotation}
        scale={scale}
        geometry={nodes["whiteClick"].geometry}
        material={nodes["whiteClick"].material}
      ></mesh>
    </group>
  );
};

export default ClickWhite;
