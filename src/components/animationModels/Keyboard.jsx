import React, { useEffect } from "react";

const Keyboard = ({ actions }) => {
  const onKeyboardClick = () => {
    actions.S3CodingAni1.play();
    setTimeout(() => {
      actions.S3CodingAni1.paused = true;
    }, 1250);
    setTimeout(() => {
      actions.S3CodingAni2.play();
    }, 1);
    setTimeout(() => {
      actions.S3CodingAni2.paused = true;
    }, 2950);
    setTimeout(() => {
      actions.S3CodingAni3.play();
    }, 2);
    setTimeout(() => {
      actions.S3CodingAni3.paused = true;
    }, 4590);
    setTimeout(() => {
      actions.S3CodingAni4.play();
    }, 3);
    setTimeout(() => {
      actions.S3CodingAni4.paused = true;
    }, 6250);
    setTimeout(() => {
      actions.S3CodingAni5.play();
    }, 4);
    setTimeout(() => {
      actions.S3CodingAni5.paused = true;
    }, 8050);
    setTimeout(() => {
      actions.S3CodingAni6.play();
    }, 4);
    setTimeout(() => {
      actions.S3CodingAni6.paused = true;
    }, 9590);
    setTimeout(() => {
      actions.S3CodingAni7.play();
    }, 5);
    setTimeout(() => {
      actions.S3CodingAni7.paused = true;
    }, 11260);
    setTimeout(() => {
      actions.S3CodingAni8.play();
    }, 6);
    setTimeout(() => {
      actions.S3CodingAni8.paused = true;
    }, 13000);
    setTimeout(() => {
      actions.S3CodingAni9.play();
    }, 7);
    setTimeout(() => {
      actions.S3CodingAni9.paused = true;
    }, 14800);
    setTimeout(() => {
      actions.S3CodingAni10.play();
    }, 8);
    setTimeout(() => {
      actions.S3CodingAni10.paused = true;
    }, 16250);
    setTimeout(() => {
      actions.S3CodingAni11.play();
    }, 9);
    setTimeout(() => {
      actions.S3CodingAni11.paused = true;
    }, 17700);
    setTimeout(() => {
      actions.S3CodingAni12.play();
    }, 10);
    setTimeout(() => {
      actions.S3CodingAni12.paused = true;
    }, 19120);
  };

  useEffect(() => {
    // actions.S3CodingAni1.repetition = 1;
    // actions.S3CodingAni1.clampWhenFinished = true;
    // actions.S3CodingAni2.clampWhenFinished = true;
    // actions.S3CodingAni3.clampWhenFinished = true;
    // actions.S3CodingAni4.clampWhenFinished = true;
    // actions.S3CodingAni5.clampWhenFinished = true;
    // actions.S3CodingAni6.clampWhenFinished = true;
    // actions.S3CodingAni7.clampWhenFinished = true;
    // actions.S3CodingAni8.clampWhenFinished = true;
    // actions.S3CodingAni9.clampWhenFinished = true;
    // actions.S3CodingAni10.clampWhenFinished = true;
    // actions.S3CodingAni11.clampWhenFinished = true;
    // actions.S3CodingAni12.clampWhenFinished = true;
  }, []);
  return (
    <>
      <mesh
        onClick={onKeyboardClick}
        position={[0.99, 2.25, -29]}
        scale={[0.275, 0.01, 0.2]}
      >
        <boxGeometry />
        <meshStandardMaterial color={"red"} opacity={0.0} transparent />
      </mesh>
    </>
  );
};

export default Keyboard;
