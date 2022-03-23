import { useGLTF, Html } from "@react-three/drei";
// import { useFrame, useLoader, useThree } from "@react-three/fiber";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Comment from "../../components/Comment";
import { firebaseDb } from "../../lib/clientApp";
import * as dat from "dat.gui";

function Board({ posts }) {
  const board = useRef();
  const { scene, nodes } = useGLTF("/gltf/boardChanged.glb");
  const gltf = useGLTF("/gltf/boardChanged.glb");

  useEffect(() => {
    // const gui = new dat.GUI();
    // gui
    //   .add(board.current.position, "z")
    //   .min(10)
    //   .max(10)
    //   .step(0.01)
    //   .name("board posion z");
    // gui
    //   .add(board.current.position, "x")
    //   .min(10)
    //   .max(10)
    //   .step(0.01)
    //   .name("board posion x");
  }, []);

  return (
    <group
      ref={board}
      scale={[0.1, 0.1, 0.1]}
      position={[0, 0.7, -5]}
      rotation={[0, -Math.PI / 2, 0]}
    >
      <primitive object={scene}></primitive>
      <Html
        transform
        // occlude
        rotation={[0, Math.PI / 2, Math.PI * 2]}
        position={[0.65, 3.6, 6.5]}
      >
        <div className="wrapper">
          <Comment posts={posts} />
        </div>
      </Html>
    </group>
  );
}

function Table() {
  const group = useRef();
  useEffect(() => {}, []);

  return (
    <group ref={group} position={[-1, 0, -4]}>
      {/* table */}
      <mesh position={[0, 0.5, 0]} scale={[1, 1, 1]}>
        <meshStandardMaterial color="orange" />
        <cylinderGeometry args={[0.25, 0.25, 0.025, 100]} />
      </mesh>
      {/* column */}
      <mesh position={[0, 0.25, 0]} scale={[1, 1, 1]}>
        <meshStandardMaterial color="gray" />
        <cylinderGeometry args={[0.035, 0.035, 0.5, 100]} />
      </mesh>
      {/* bottom */}
      <mesh
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshStandardMaterial color="gray" />
        <boxGeometry args={[0.025, 0.25, 0.25]} />
      </mesh>
    </group>
  );
}

// function Pencil() {
//   const { scene, nodes } = useGLTF("/gltf/pencil.glb");

//   const onPencilClick = () => {
//     console.log("click");
//   };
//   useEffect(() => {
//     console.log(nodes);
//   }, []);
//   return (
//     <group
//       onClick={onPencilClick}
//       scale={[0.01, 0.01, 0.01]}
//       position={[1.3, 0.7, 0]}
//       rotation={[0, 0, Math.PI]}
//     >
//       {/* <primitive object={scene} scale={[0.01, 0.01, 0.01]}></primitive> */}
//       <mesh
//         scale={[0.5, 3, 0.5]}
//         material={nodes["Cylinder003"].material}
//         geometry={nodes["Cylinder003"].geometry}
//       ></mesh>
//       <mesh
//         scale={[0.5, 3, 0.5]}
//         material={nodes["Cylinder003_1"].material}
//         geometry={nodes["Cylinder003_1"].geometry}
//       ></mesh>
//       <mesh
//         scale={[0.5, 3, 0.5]}
//         material={nodes["Cylinder003_2"].material}
//         geometry={nodes["Cylinder003_2"].geometry}
//       ></mesh>
//     </group>
//   );
// }

const Guest = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState(null);
  const getPosts = useCallback(async () => {
    setLoading(true);
    try {
      const snapsoht = await firebaseDb.collection("posts").get();
      const posts = snapsoht.docs.map((doc) => doc.data());
      setPosts(posts);
      setLoading(true);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    getPosts();
    console.log(posts);
  }, []);
  return (
    <>
      <Board posts={posts} />
      <Table />
    </>
  );
};

export default Guest;
