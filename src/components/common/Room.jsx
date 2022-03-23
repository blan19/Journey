import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function Room({ position, rotation }) {
  const { scene, nodes } = useGLTF("/gltf/Chapter_1.glb");
  const group = useRef();
  useEffect(() => {
    console.log(nodes);
  }, []);

  return (
    <group ref={group}>
      <primitive
        position={position}
        rotation={rotation}
        scale={[0.3, 0.3, 0.3]}
        object={scene}
      />
      <primitive object={nodes["models"]} />
    </group>
  );
}
