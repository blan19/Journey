import { ScrollControls, useGLTF, useScroll, Html } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Comment from "../../components/Comment";

function Board() {
  const { scene, nodes } = useGLTF("/gltf/board.glb");
  const gltf = useGLTF("/gltf/board.glb");

  useEffect(() => {}, []);
  return (
    <group scale={[0.1, 0.1, 0.1]} position={[1.3, 1, 1]}>
      <primitive object={scene} rotation={[0, Math.PI * 0.82, 0]}></primitive>
      <mesh
        geometry={nodes["Plane"].geometry}
        material={nodes["Plane"].material}
      >
        <Html position={[0, 3.5, 0]}>
          <div className="wrapper">
            <Comment />
          </div>
        </Html>
      </mesh>
    </group>
  );
}

const Guest = () => {
  return <Board />;
};

export default Guest;
