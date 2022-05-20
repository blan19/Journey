import { Text, useGLTF } from "@react-three/drei";
import React, { useCallback } from "react";

const Game = ({ position, scale, control }) => {
  const { scene } = useGLTF("/gltf/PcMonitor.glb");
  const { scene: scene2 } = useGLTF("/gltf/pc.glb");
  const onClick = useCallback(() => {
    window.open(
      "/game/index.html",
      "팝업",
      "width=700px,height=800px,scrollbars=yes"
    );
  }, []);

  return (
    <group>
      <group position={[0.45, 0, 0]}>
        <group position={[0, -0.05, 0]}>
          <Text
            position={[4.65, 2.1, -10.75]}
            scale={[0.5, 0.5, 0.5]}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            The Dungeon
          </Text>
          <Text
            position={[4.65, 2, -10.75]}
            scale={[0.25, 0.25, 0.25]}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Game Start
          </Text>
        </group>
        <primitive
          position={position}
          scale={scale}
          object={scene}
          rotation={[0, -Math.PI / 2, 0]}
          onClick={onClick}
        />
      </group>
      <primitive
        position={[4.2, 1.78, -10.7]}
        scale={[0.08, 0.08, 0.08]}
        object={scene2}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </group>
  );
};

export default Game;

useGLTF.preload("/gltf/PcMonitor.glb");
useGLTF.preload("/gltf/pc.glb");
