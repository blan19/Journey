import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { usePlane } from "@react-three/cannon";

export default function Ground(props) {
  const [floor] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));
  const [front] = usePlane(() => ({
    position: [0, 12.5, -35],
    ...props,
  }));
  const [left] = usePlane(() => ({
    position: [-25, 12.5, 0],
    rotation: [0, Math.PI / 2, 0],
    ...props,
  }));
  const [right] = usePlane(() => ({
    position: [25, 12.5, 0],
    rotation: [0, -Math.PI / 2, 0],
    ...props,
  }));
  const texture = useLoader(THREE.TextureLoader, "/background/grass.jpg");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return (
    <group>
      <mesh ref={front} receiveShadow>
        <planeGeometry args={[50, 25]} />
        <meshStandardMaterial fog color="#d1e4e7" />
      </mesh>
      {/* back */}
      <mesh receiveShadow rotation={[0, Math.PI, 0]} position={[0, 12.5, 35]}>
        <planeGeometry args={[50, 25]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh ref={floor} receiveShadow>
        <planeGeometry args={[50, 70]} />
        <meshStandardMaterial fog color="#f3f1e3" />
      </mesh>
      <mesh ref={left} receiveShadow>
        <planeGeometry args={[70, 25]} />
        <meshStandardMaterial fog color="gray" />
      </mesh>
      <mesh ref={right} receiveShadow>
        <planeGeometry args={[70, 25]} />
        <meshStandardMaterial fog color="gray" />
      </mesh>
    </group>
  );
}
