import React from "react";
import useStore from "../../../store";
import { RegisterContainer, RegisterHeader, RegisterMain } from "./styled";

const Register = () => {
  const register = useStore((state) => state.register);
  return (
    <RegisterContainer register={register}>
      <RegisterHeader>
        <h1>최종 합격자 발표</h1>
      </RegisterHeader>
      <RegisterMain></RegisterMain>
    </RegisterContainer>
  );
};

export default Register;
