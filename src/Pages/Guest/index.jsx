import { ScrollControls, useGLTF, useScroll, Html } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Comment from "../../components/Comment";

function Board() {
  const { scene, nodes } = useGLTF("/gltf/boardChanged.glb");
  const gltf = useGLTF("/gltf/boardChanged.glb");

  return (
    <group
      scale={[0.1, 0.1, 0.1]}
      position={[2, 1, 1]}
      rotation={[0, Math.PI * 0.82, 0]}
    >
      <primitive object={scene}></primitive>
      <mesh
        geometry={nodes["Plane"].geometry}
        material={nodes["Plane"].material}
      >
        <Html
          transform
          rotation={[0, Math.PI * 0.5, 0]}
          position={[1.5, 3.6, 6.5]}
        >
          <div className="wrapper">
            <Comment />
          </div>
        </Html>
      </mesh>
    </group>
  );
}

function Table() {
  const { scene, nodes } = useGLTF("/gltf/pencilTable.glb");
  const gltf = useGLTF("/gltf/pencilTable.glb");

  useEffect(() => {
    console.log(nodes);
  }, []);

  return (
    <group
      position={[2, 0.5, 0]}
      scale={[0.3, 0.3, 0.3]}
      rotation={[0, Math.PI * 0.5, 0]}
    >
      <primitive object={scene}></primitive>
    </group>
  );
}

const Guest = () => {
  return (
    <>
      <Board />
      <Table />
    </>
  );
};

export default Guest;
