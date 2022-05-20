import { useGLTF } from "@react-three/drei";
import React from "react";

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
