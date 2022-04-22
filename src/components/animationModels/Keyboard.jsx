import React, { useEffect } from "react";

const Keyboard = ({ actions }) => {
  const onKeyboardClick = () => {
    actions.S3CodingAni1.repetitions = 1;
    actions.S3CodingAni2.repetitions = 1;
    actions.S3CodingAni3.repetitions = 1;
    actions.S3CodingAni4.repetitions = 1;
    actions.S3CodingAni5.repetitions = 1;
    actions.S3CodingAni6.repetitions = 1;
    actions.S3CodingAni7.repetitions = 1;
    actions.S3CodingAni8.repetitions = 1;
    actions.S3CodingAni9.repetitions = 1;
    actions.S3CodingAni10.repetitions = 1;
    actions.S3CodingAni11.repetitions = 1;
    actions.S3CodingAni12.repetitions = 1;

    actions.S3CodingAni1.clampWhenFinished = true;
    actions.S3CodingAni2.clampWhenFinished = true;
    actions.S3CodingAni3.clampWhenFinished = true;
    actions.S3CodingAni4.clampWhenFinished = true;
    actions.S3CodingAni5.clampWhenFinished = true;
    actions.S3CodingAni6.clampWhenFinished = true;
    actions.S3CodingAni7.clampWhenFinished = true;
    actions.S3CodingAni8.clampWhenFinished = true;
    actions.S3CodingAni9.clampWhenFinished = true;
    actions.S3CodingAni10.clampWhenFinished = true;
    actions.S3CodingAni11.clampWhenFinished = true;
    actions.S3CodingAni12.clampWhenFinished = true;

    actions.S3CodingAni1.play();

    setTimeout(() => {
      actions.S3CodingAni2.play();
    }, 1);
    setTimeout(() => {
      actions.S3CodingAni3.play();
    }, 2);
    setTimeout(() => {
      actions.S3CodingAni4.play();
    }, 3);
    setTimeout(() => {
      actions.S3CodingAni5.play();
    }, 4);
    setTimeout(() => {
      actions.S3CodingAni6.play();
    }, 4);
    setTimeout(() => {
      actions.S3CodingAni7.play();
    }, 5);
    setTimeout(() => {
      actions.S3CodingAni8.play();
    }, 6);
    setTimeout(() => {
      actions.S3CodingAni9.play();
    }, 7);
    setTimeout(() => {
      actions.S3CodingAni10.play();
    }, 8);
    setTimeout(() => {
      actions.S3CodingAni11.play();
    }, 9);
    setTimeout(() => {
      actions.S3CodingAni12.play();
    }, 10);

    setTimeout(() => {
      actions.S3CodingAni1.stop();
      actions.S3CodingAni2.stop();
      actions.S3CodingAni3.stop();
      actions.S3CodingAni4.stop();
      actions.S3CodingAni5.stop();
      actions.S3CodingAni6.stop();
      actions.S3CodingAni7.stop();
      actions.S3CodingAni8.stop();
      actions.S3CodingAni9.stop();
      actions.S3CodingAni10.stop();
      actions.S3CodingAni11.stop();
      actions.S3CodingAni12.stop();
    }, 19200);
    //   setTimeout(() => {
    //     actions.S3CodingAni12.paused = true;
    //   }, 19120);
  };

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
