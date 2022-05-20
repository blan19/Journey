import React, { useCallback, useRef, useState } from "react";
import { useBox } from "@react-three/cannon";
import { Html, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import Webcam from "react-webcam";
import { CountContainer } from "./styles";
import { If } from "../../../lib/Condition";
import useStore from "../../../store";

const SceneFivePhysics = ({ controlsRef, getImage, image, ...props }) => {
  const { scene } = useGLTF("/gltf/GradHat.glb");
  // * pysic
  const [stairs] = useBox(() => ({
    mass: 0,
    position: [-2.1, 2.3, -43.5],
    rotation: [Math.PI * 1.075, 0, 0],
    args: [1.5, 0.05, 5],
    ...props,
  }));
  const [floor] = useBox(() => ({
    mass: 0,
    position: [-1.9, 2.75, -49],
    args: [6, 0.25, 6],
    ...props,
  }));

  // 백마상
  const [horse] = useBox(() => ({
    mass: 0,
    position: [-3, 3.5, -52.2],
    args: [2, 1, 0.01],
    ...props,
  }));

  // * Webcam
  const webcamRef = useRef(null);
  const { setImgMesh, setControlTrue, setEnd, imgMesh } = useStore(
    (state) => state
  );
  const [count, setCount] = useState({ count: 3, show: false });

  const init = useCallback(
    (image) => {
      const img = new Image();
      img.src = image;
      const texture = new THREE.Texture();
      img.onload = function () {
        texture.needsUpdate = true;
        texture.dispose();
      };
      texture.image = img;
      texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      const material = new THREE.MeshLambertMaterial({ map: texture });
      const geometry = new THREE.BoxBufferGeometry(1.7, 1.3, 0.1);
      const box = new THREE.Mesh(geometry, material);
      box.position.set(-1.5, 4.25, -50.9);
      setImgMesh(box);
    },
    [setImgMesh]
  );

  const onCapture = useCallback(() => {
    setTimeout(() => {
      setCount((prev) => ({ ...prev, count: 3, show: true }));
      setTimeout(() => {
        setCount((prev) => ({ ...prev, count: 2 }));
        setTimeout(() => {
          setCount((prev) => ({ ...prev, count: 1 }));
          setTimeout(() => {
            setCount((prev) => ({ ...prev, show: false }));
            setTimeout(() => {
              controlsRef.current.unlock();
              const img = webcamRef.current.getScreenshot();
              init(img);
              setTimeout(() => {
                setControlTrue();
                getImage();
                setEnd();
              }, 500);
            }, 500);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, [controlsRef, getImage, setControlTrue, setEnd, init]);

  return (
    <group>
      <mesh
        ref={stairs}
        position={[-2.1, 2.5, -45]}
        rotation={[Math.PI * 1.075, 0, 0]}
      >
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={floor} position={[-1.9, 2.75, -50]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* 백마상 */}
      <mesh ref={horse} position={[-3, 3.5, -51.4]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* 졸업모 */}
      <primitive
        position={[8.87, 0, -54.51]}
        scale={[0.1, 0.1, 0.1]}
        object={scene}
      />
      {/* Webcam */}
      <group>
        {/* <Sparks /> */}
        <mesh
          position={[-1.5, 4.25, -51]}
          rotation={[0, 0, 0]}
          onClick={onCapture}
        >
          <boxGeometry args={[2, 1.5, 0.1]} />

          <Html
            occlude
            transform
            position={[0, -0.05, 0.1]}
            rotation={[0, 0, 0]}
          >
            <Webcam
              mirrored
              audio={false}
              width={150}
              height={50}
              minScreenshotWidth={1920}
              minScreenshotHeight={1280}
              ref={webcamRef}
            />
          </Html>
        </mesh>
        {imgMesh && <mesh {...imgMesh} />}
        <If condition={count.show}>
          <mesh position={[-1.5, 5.25, -51]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0, 0, 0]} />
            <Html
              occlude
              transform
              position={[0, -0.05, 0.1]}
              rotation={[0, 0, 0]}
            >
              <CountContainer>
                <span>{count.count}</span>
              </CountContainer>
            </Html>
          </mesh>
        </If>
      </group>
    </group>
  );
};

export default SceneFivePhysics;

useGLTF.preload("/gltf/GradHat.glb");
