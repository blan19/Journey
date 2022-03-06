import {
  ScrollControls,
  useGLTF,
  useMatcapTexture,
  useScroll,
  Html,
} from "@react-three/drei";
import { useFrame, useThree, applyProps } from "@react-three/fiber";
import React, { useLayoutEffect, useRef } from "react";
import ScenePage from "../../components/SceneOne/ScenePage";

const Model = (props) => {
  const group = useRef();
  const monitor = useRef();
  const camera = useThree((state) => state.camera);
  const { nodes, materials } = useGLTF("/gltf/mac-draco.glb");
  const { scene } = useGLTF("/gltf/newFirstScene.glb");
  const Scroll = useScroll();
  // camera
  // initialize
  useLayoutEffect(() => {
    camera.position.set(0, 0.9, 0);
    scene.traverse((o) => {
      if (o.isGroup && o.name === "Scene") {
        o.children.forEach(function (child, i) {
          console.log(child);
          if (child.isGroup) {
            child.children.forEach((mesh) => {
              // mesh.receiveShadow = true;
              mesh.material.roughness = 0.4;
              mesh.material.metalness = 0.2;
            });
          }
        });
      }
      if (o.isMesh) {
        applyProps(o, {
          castShadow: true,
          // receiveShadow: true,
          // "material-envMapIntensity": 0.3,
        });
      }
    });
  }, []);
  //animate
  useFrame(() => {
    monitor.current.rotation.set(-0.425 + Scroll.offset * 2, 0, 0);
  });
  return (
    <>
      <group
        receiveShadow
        castShadow
        ref={group}
        {...props}
        // position={[0.3, -0.1, 0.5]}
        // rotation={[0, 0.75, 0]}
        rotation={[0, 0, 0]}
        position={[-0.05, -0.15, 1.05]}
      >
        <group
          position={[0.07, 0.46, -0.57]}
          scale={[0.03, 0.03, 0.03]}
          ref={group}
          {...props}
          dispose={null}
        >
          <group ref={monitor} position={[0, -0.04, 0.41]}>
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
                  occlude
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
        <primitive object={scene} dispose={null} {...props}></primitive>
      </group>
    </>
  );
};

const SceneOne = () => {
  return (
    <ScrollControls pages={3}>
      <Model />
    </ScrollControls>
  );
};

export default SceneOne;
