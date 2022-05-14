import React from "react";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useSphere } from "@react-three/cannon";
import { useThree, useFrame } from "@react-three/fiber";

const SPEED = 10;
const keys = {
  KeyW: "forward",
  KeyS: "backward",
  KeyA: "left",
  KeyD: "right",
  Space: "jump",
};
const moveFieldByKey = (key) => keys[key];
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const rotation = new THREE.Vector3();
const speed = new THREE.Vector3();

const usePlayerControls = () => {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
  });

  useEffect(() => {
    const handleKeyDown = (e) =>
      setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }));
    const handleKeyUp = (e) =>
      setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }));
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return movement;
};

export const Player = (props) => {
  // const [ref, api] = useSphere(() => ({
  //   mass: 1,
  //   type: "Dynamic",
  //   args: [1.5],
  //   position: [0, 1, 0],
  //   ...props,
  // }));
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    args: [1.25],
    position: [0, 1, 0],
    ...props,
  }));
  const { forward, backward, left, right, jump } = usePlayerControls();
  const { camera } = useThree();
  const velocity = useRef([0, 0, 0]);
  useEffect(() => api.velocity.subscribe((v) => (velocity.current = v)), []);

  useFrame((state) => {
    // move
    ref.current.getWorldPosition(camera.position);
    // y-position

    // const prePosition = camera.position;
    // ref.current.position.set(prePosition.x, 1, prePosition.z);
    // camera.position.set(prePosition.x, 1, prePosition.z);

    // if (camera.position.y <= -30) {
    //   // camera.position.set(0, 2, 0);
    //   // ref.current.copy(camera.position);
    //   camera.position.set(prePosition);
    //   ref.current.position.set(prePosition);
    // }

    // move
    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);
    speed.fromArray(velocity.current);

    // jump
    api.velocity.set(direction.x, velocity.current[1], direction.z);
    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05)
      api.velocity.set(velocity.current[0], 10, velocity.current[2]);
  });

  return (
    <>
      <mesh ref={ref} />
    </>
  );
};
