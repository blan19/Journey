import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const ClickBlack = ({ position, rotation, onClick }) => {
  const { nodes } = useGLTF("/gltf/clickBlack.glb");

  useEffect(() => {
    console.log(nodes);
  }, []);

  return (
    <group>
      <mesh
        onClick={onClick}
        position={position}
        rotation={rotation}
        scale={[0.05, 0.07, 0.07]}
        geometry={nodes["clickBlack"].geometry}
        material={nodes["clickBlack"].material}
      ></mesh>
    </group>
  );
};

export default ClickBlack;
