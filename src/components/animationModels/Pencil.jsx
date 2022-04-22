import { useFrame } from "@react-three/fiber";

const Pencil = ({ actions }) => {
  const onPencilClick = () => {
    actions.pencilAction.repetitions = 1;
    actions.S2NewspaperAni1.repetitions = 1;
    actions.S2NewspaperAni2.repetitions = 1;
    actions.S2NewspaperAni3.repetitions = 1;
    actions.S2NewspaperAni4.repetitions = 1;

    actions.pencilAction.clampWhenFinished = true;
    actions.S2NewspaperAni1.clampWhenFinished = true;
    actions.S2NewspaperAni2.clampWhenFinished = true;
    actions.S2NewspaperAni3.clampWhenFinished = true;
    actions.S2NewspaperAni4.clampWhenFinished = true;

    actions.pencilAction.play();
    setTimeout(() => {
      actions.S2NewspaperAni1.play();
    }, 145);

    setTimeout(() => {
      actions.S2NewspaperAni2.play();
    }, 195);

    setTimeout(() => {
      actions.S2NewspaperAni3.play();
    }, 230);
    setTimeout(() => {
      actions.S2NewspaperAni4.play();
    }, 275);

    setTimeout(() => {
      console.log(actions.pencilAction);
      actions.pencilAction.stop();
      actions.S2NewspaperAni1.stop();
      actions.S2NewspaperAni2.stop();
      actions.S2NewspaperAni3.stop();
      actions.S2NewspaperAni4.stop();
    }, 8000);
  };

  useFrame(() => {
    if (actions.pencilAction.paused) {
      actions.pencilAction.reset();
      actions.S2NewspaperAni1.reset();
      actions.S2NewspaperAni2.reset();
      actions.S2NewspaperAni3.reset();
      actions.S2NewspaperAni4.reset();
    }
  });
  return (
    <>
      <mesh
        scale={[0.02, 0.13, 0.007]}
        onClick={onPencilClick}
        position={[-0.96, 2.9, -20.8]}
        rotation={[Math.PI / 2, 0, 2.795]}
      >
        <boxGeometry />
        <meshStandardMaterial
          args={[1, 1, 1]}
          color={"red"}
          opacity={0.0}
          transparent
        />
      </mesh>
    </>
  );
};

export default Pencil;
