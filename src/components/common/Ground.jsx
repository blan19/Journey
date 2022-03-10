import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { usePlane } from "@react-three/cannon";

export default function Ground(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  const texture = useLoader(THREE.TextureLoader, "/background/grass.jpg");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial
        fog
        map={texture}
        map-repeat={[500, 500]}
        color="green"
      />
    </mesh>
  );
}
