import React, { useCallback, useEffect, useState } from "react";
import useStore from "../../../store";
import {
  RegisterContainer,
  RegisterHeader,
  RegisterLoading,
  RegisterMain,
} from "./styled";
import { FiLoader } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
import { Choose, If, OtherWise, When } from "../../../lib/Condition";

const Register = () => {
  const { register, setRegister, setControlFalse } = useStore((state) => state);
  const [show, setShow] = useState({ loading: false, show: false });

  const onLoading = useCallback(() => {
    setShow((prev) => ({ ...prev, loading: true }));
    setTimeout(() => {
      setShow((prev) => ({ ...prev, loading: false }));
      setTimeout(() => {
        setShow((prev) => ({ ...prev, show: true }));
      }, 0);
    }, 3000);
  }, []);

  const onBack = useCallback(() => {
    setControlFalse();
    setRegister();
    setShow((prev) => ({ ...prev, loading: false, show: false }));
  }, [setControlFalse, setRegister]);

  useEffect(() => {
    return () => setShow((prev) => ({ ...prev, loading: false, show: false }));
  }, []);
  return (
    <>
      <If condition={show.loading}>
        <RegisterLoading>
          <FiLoader />
        </RegisterLoading>
      </If>
      <RegisterContainer register={register}>
        <RegisterHeader>
          <BiArrowBack onClick={onBack} />
          <h1>최종 합격자 발표</h1>
        </RegisterHeader>
        <RegisterMain>
          <div className="register-info">
            <p>지원자 정보</p>
          </div>
          {show.show ? (
            <>
              <div className="register-table">
                <table>
                  <tbody>
                    <tr>
                      <th>모집 구분</th>
                      <th>수시</th>
                      <th>전형</th>
                      <th>논술 우수자</th>
                    </tr>
                    <tr>
                      <td>학과/학부</td>
                      <td>글로벌미디어학부</td>
                      <td>수험번호</td>
                      <td>20223434</td>
                    </tr>
                    <tr>
                      <td>주민번호</td>
                      <td>123456-7890112</td>
                      <td>지원자명</td>
                      <td>슝슝이</td>
                    </tr>
                    <tr>
                      <td>가상계좌번호</td>
                      <td>123456-78-9011123</td>
                      <td>등록예치금</td>
                      <td>300,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="register-contents">
                <p className="section-1">
                  슝슝이님은 본교 논술우수자전형 글로벌미디어학부에{" "}
                  <span>합격</span>하였습니다
                </p>
                <p className="section-2">
                  합격을 진심으로 축하드리며, 합격자는 반드시{" "}
                  <span>하단의 안내사항을 필독</span>하시기 바랍니다. 안내사항을
                  확인하지 않을 시 발생하는 불이익에 대한 책임은 수험생 본인에게
                  있습니다.
                </p>
                <p className="section-3">
                  합격통지서와 예치금고지서는 재발급하지 않으므로 필요시
                  출력하여 보관하셔야 하며, 확인(출력)은 반드시 pc를 이용하셔야
                  합니다.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="register-table">
                <table>
                  <tbody>
                    <tr>
                      <td>수험번호</td>
                      <td>20223434</td>
                      <td>지원자명</td>
                      <td>슝슝이</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="register-button">
                <button onClick={onLoading}>합격 조회</button>
              </div>
            </>
          )}
        </RegisterMain>
      </RegisterContainer>
    </>
  );
};

export default Register;
