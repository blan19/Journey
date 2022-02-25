import React from "react";

const Model = () => {
  return (
    <group>
      <mesh>
        <boxBufferGeometry args={[1, 1, 1]} />
      </mesh>
    </group>
  );
};

const SceneTwo = () => {
  return <Model />;
};

export default SceneTwo;
