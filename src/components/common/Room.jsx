import { useGLTF } from "@react-three/drei";

export default function Room({ position, rotation }) {
  const { scene } = useGLTF("/gltf/Chapter_1.glb");

  return (
    <primitive
      position={position}
      rotation={rotation}
      scale={[0.3, 0.3, 0.3]}
      object={scene}
    />
  );
}
