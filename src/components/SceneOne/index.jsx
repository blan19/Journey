import { Html, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import ScenePage from "./ScenePage";

const Model = (props) => {
  const { nodes, materials } = useGLTF("/gltf/firstScene.glb");
  const group = useRef(null);
  console.log(nodes);
  return (
    <group
      position={[0, -6, 0]}
      ref={group}
      receiveShadow
      {...props}
      dispose={null}
    >
      <group receiveShadow>
        <primitive object={nodes["Keyboard"]} />
        <mesh
          position={[-2.7, 4.78, 5.875]}
          rotation={[Math.PI / 2, Math.PI * 0.5, 0]}
          scale={[0.525, 0.5, 0.8]}
          geometry={nodes["ComputerScreen"].geometry}
          material={nodes["ComputerScreen"].material}
        >
          <Html
            scale={[0.22, 0.32, 0.8]}
            className="content"
            rotation-x={Math.PI / 2}
            rotation-z={-Math.PI / 2}
            position={[0.05, 0.45, 0]}
            transform
            occlude
          >
            <div className="wrapper">
              <ScenePage />
            </div>
          </Html>
        </mesh>
      </group>
      <primitive receiveShadow object={nodes["models"]} />
    </group>
  );
};

const SceneOne = () => {
  return <Model />;
};

export default SceneOne;
