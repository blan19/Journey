import React from "react";
import { CursorContainer } from "./styled";
import { CgEditBlackPoint } from "react-icons/cg";

const Cursor = () => {
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
