import { useGLTF } from "@react-three/drei";
import React, { useCallback } from "react";

const Game = ({ position, scale }) => {
  const { scene } = useGLTF("/gltf/PcMonitor.glb");
  const { scene: scene2 } = useGLTF("/gltf/pc.glb");
  const onClick = useCallback(() => {
    window.open(
      "/game/index.html",
      "네이버팝업",
      "width=700px,height=800px,scrollbars=yes"
    );
  }, []);

  return (
    <group>
      <mesh />
      <primitive
        position={position}
        scale={scale}
        object={scene}
        rotation={[0, -Math.PI / 2, 0]}
        onClick={onClick}
      />
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
