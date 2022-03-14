import { useGLTF, Html } from "@react-three/drei";
// import { useFrame, useLoader, useThree } from "@react-three/fiber";
import React, { useCallback, useEffect, useState } from "react";
import Comment from "../../components/Comment";
import { firebaseDb } from "../../lib/clientApp";

function Board({ posts }) {
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
          occlude
          rotation={[0, Math.PI * 0.5, 0]}
          position={[0.6, 3.6, 6.5]}
        >
          <div className="wrapper">
            <Comment posts={posts} />
          </div>
        </Html>
      </mesh>
    </group>
  );
}

function Table() {
  const { scene, nodes } = useGLTF("/gltf/table1.glb");
  // const gltf = useGLTF("/gltf/papertable.glb");
  useEffect(() => {
    console.log(nodes);
  }, []);

  return (
    <group scale={[0.01, 0.01, 0.01]} position={[0, 1, 0]}>
      <mesh
        material={nodes["table001"].material}
        geometry={nodes["table001"].geometry}
      ></mesh>
      <mesh
        material={nodes["table001_1"].material}
        geometry={nodes["table001_1"].geometry}
      ></mesh>
      <mesh
        material={nodes["table001_2"].material}
        geometry={nodes["table001_2"].geometry}
      ></mesh>
      <mesh
        material={nodes["table001_3"].material}
        geometry={nodes["table001_3"].geometry}
      ></mesh>
      <mesh
        material={nodes["table001_4"].material}
        geometry={nodes["table001_4"].geometry}
      ></mesh>
      <mesh
        material={nodes["table001_5"].material}
        geometry={nodes["table001_5"].geometry}
      ></mesh>
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
