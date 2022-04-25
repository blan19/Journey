import React from "react";
import useStore from "../../../store";
import { RegisterContainer, RegisterHeader, RegisterMain } from "./styled";

const Register = () => {
  const { register, setRegister } = useStore((state) => state);
  return (
    <RegisterContainer register={register} onClick={setRegister}>
      <RegisterHeader>
        <h1>최종 합격자 발표</h1>
      </RegisterHeader>
      <RegisterMain></RegisterMain>
    </RegisterContainer>
  );
};

export default Register;
