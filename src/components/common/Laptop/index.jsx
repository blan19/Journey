import React, { useCallback, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import useStore from "../../../store";
import { useFrame } from "@react-three/fiber";

function Laptop({ control, ...props }) {
  const { setRegister, setControlTrue } = useStore((state) => state);
  const group = useRef();
  const screen = useRef();
  const { nodes, materials } = useGLTF("/gltf/mac-draco.glb");
  const { nodes: screenNode } = useGLTF("/gltf/laptop.glb");
  const [rotation, setRotation] = useState(true);

  const onStopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const onUnLock = useCallback(() => {
    control.current.unlock();
    setControlTrue();
    setRegister();
  }, [control, setControlTrue, setRegister]);

  useFrame(({ clock }) => {
    if (rotation) {
      if (screen.current.rotation.x <= 1.54) {
        screen.current.rotation.x += clock.getDelta() + 0.05;
      }
    } else {
      if (screen.current.rotation.x >= -0.425) {
        screen.current.rotation.x -= clock.getDelta() + 0.05;
      }
    }
  }, []);

  return (
    <group
      position={[5.2, 1.8, -10.7]}
      scale={[0.03, 0.03, 0.03]}
      rotation={[0, Math.PI / 0.55, 0]}
      ref={group}
      {...props}
      dispose={null}
      onClick={onStopPropagation}
    >
      <group ref={screen} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <group onClick={() => setRotation((prev) => !prev)}>
            <mesh
              material={materials.aluminium}
              geometry={nodes["Cube008"].geometry}
            />
            <mesh
              material={materials["matte.001"]}
              geometry={nodes["Cube008_1"].geometry}
            />
            <mesh geometry={nodes["Cube008_2"].geometry}></mesh>
          </group>
          <mesh
            onClick={onUnLock}
            geometry={screenNode["Screen"].geometry}
            material={screenNode["Screen"].material}
            scale={[4.3, 3.8, 3]}
            position={[0, -1.8, 0]}
          />
        </group>
      </group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
        onClick={() => setRotation((prev) => !prev)}
      />
      <group
        position={[0, -0.1, 3.39]}
        onClick={() => setRotation((prev) => !prev)}
      >
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
