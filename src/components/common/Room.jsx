import { useGLTF } from "@react-three/drei";

export default function Room() {
  const { scene } = useGLTF("/gltf/Chapter_1.glb");

  return (
    <primitive position={[0, -1.2, 0]} scale={[0.1, 0.1, 0.1]} object={scene} />
  );
}
