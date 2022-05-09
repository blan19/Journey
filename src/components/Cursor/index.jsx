import React from "react";
import { CursorContainer } from "./styled";
import { CgEditBlackPoint } from "react-icons/cg";
import useStore from "../../store";

const Cursor = () => {
  const imgMesh = useStore((state) => state.imgMesh);

  if (imgMesh) {
    return null;
  }
  return (
    <CursorContainer>
      <div className="pointer">
        <CgEditBlackPoint />
        <div className="pointer-circle" />
      </div>
    </CursorContainer>
  );
};

export default Cursor;
