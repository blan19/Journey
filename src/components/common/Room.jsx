import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function Room({ position, rotation }) {
  const { scene, nodes } = useGLTF("/gltf/Chapter_1.glb");
  const group = useRef();
  useEffect(() => {
    console.log(nodes);
  }, []);

  return (
    <group ref={group} position={[-23.8, 0.7, -10.85]}>
      {/* room */}
      <primitive
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        scale={[0.05, 0.05, 0.05]}
        object={nodes["models"]}
      />
      {/* laptop */}
      <group>
        <primitive position={[5, 0, 0]} object={nodes["laptopBottom"]} />
        <mesh
          position={[5, 0, 5]}
          geometry={nodes["laptopScreen"].geometry}
          material={nodes["laptopScreen"].material}
        />
      </group>
    </group>
  );
}
// position={[-23.8, -15, -10.85]}
