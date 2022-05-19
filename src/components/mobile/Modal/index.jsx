import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../../lib/styles/common";
import { MdClear } from "react-icons/md";

const Modal = ({ img, show, setShow }) => {
  const onStopPropagation = (e) => e.stopPropagation();

  if (!show) return null;

  return (
    <ModalCotnainer>
      <MdClear onClick={() => setShow((prev) => !prev)} />
      <div onClick={onStopPropagation}>
        <img src={img} alt="profile" />
      </div>
    </ModalCotnainer>
  );
};

export default Modal;

const ModalCotnainer = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  ${flexCenter}
  background-color: rgba(0, 0, 0, 0.75);
  div {
    width: 90%;
    position: relative;
  }
  img {
    width: 100%;
    border-radius: 0.5rem;
    transform: scale(1.25, 1.25);
  }
  svg {
    z-index: 1001;
    position: absolute;
    cursor: pointer;
    color: #fff;
    top: 0.5rem;
    right: 0.5rem;
    font-size: 4.5rem;
  }
`;
