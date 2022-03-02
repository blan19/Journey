import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import ScenePage from "./ScenePage";
import zoomFit from "../../lib/zoomFIt";

function Laptop(props) {
  const group = useRef();
  const { camera } = useThree();
  const { nodes, materials } = useGLTF("/gltf/mac-draco.glb");
  useFrame((state) => {
    const a = state.clock.getElapsedTime();
  });
  return (
    <group
      position={[0.07, 0.46, -0.57]}
      scale={[0.03, 0.03, 0.03]}
      ref={group}
      {...props}
      dispose={null}
    >
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh geometry={nodes["Cube008_2"].geometry}>
            <Html
              className="content"
              rotation-x={-Math.PI / 2}
              position={[0, 0.05, -0.09]}
              transform
              // occlude
            >
              <div className="wrapper">
                <ScenePage />
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube002"].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes["Cube002_1"].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}
export default Laptop;
