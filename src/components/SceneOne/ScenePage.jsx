import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "wouter";

const ScenePage = () => {
  const [page, setPage] = useState(false);
  const [location, setLocation] = useLocation();
  const onClick = () => {
    setPage((state) => !state);
  };
  // useEffect(() => {
  //   if (page) {
  //     setTimeout(() => {
  //       setLocation("/1");
  //     }, 2000);
  //   }
  // }, [page]);
  return (
    <ScenePageContainer>
      {page ? (
        <div className="two">
          <div className="header">
            <h1>최종 합격자 발표</h1>
          </div>
          <div className="contents">
            <div className="title">
              <p>지원자 정보</p>
            </div>
            <div className="desc">
              <table>
                <tbody>
                  <tr>
                    <td>모집 구분</td>
                    <td>수시</td>
                    <td>전형</td>
                    <td>논술 우수자</td>
                  </tr>
                  <tr>
                    <td>학과/학부</td>
                    <td>글로벌미디어학부</td>
                    <td>수험번호</td>
                    <td>20223403</td>
                  </tr>
                  <tr>
                    <td>주민번호</td>
                    <td>123456-7890112</td>
                    <td>지원자명</td>
                    <td>슝슝이</td>
                  </tr>
                  <tr>
                    <td>가상계좌번호</td>
                    <td>123124-51-123124</td>
                    <td>등록예치금</td>
                    <td>300,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="result">
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
              합격통지서와 예치금고지서는 재발급하지 않으므로 필요시 출력하여
              보관하셔야 하며, 확인(출력)은 반드시 pc를 이용하셔야 합니다.
            </p>
          </div>
        </div>
      ) : (
        <div className="one">
          <div className="header">
            <h1>최종 합격자 발표</h1>
          </div>
          <div className="contents">
            <div className="title">
              <p>지원자 정보</p>
            </div>
            <div className="desc">
              <table>
                <tbody>
                  <td>수험번호</td>
                  <td>20223430</td>
                  <td>지원자명</td>
                  <td>슝슝이</td>
                </tbody>
              </table>
            </div>
          </div>
          <div className="button">
            <button onClick={onClick}>합격 조회</button>
          </div>
        </div>
      )}
    </ScenePageContainer>
  );
};

export default ScenePage;

const ScenePageContainer = styled.div`
  width: 100%;
  height: 100%;
  .one {
    display: flex;
    align-items: center;
    flex-direction: column;
    .header {
      width: 100%;
      background: #049bcb;
      text-align: center;
      h1 {
        color: #fff;
      }
    }
    .contents {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 75px 30px;
      .title {
        font-size: 20px;
      }
      table {
        width: 100%;
        text-align: center;
        td {
          border: 1px solid black;
          padding: 5px 0;
          font-size: 20px;
        }
      }
    }
    .button {
      button {
        cursor: pointer;
        outline: none;
        border: none;
        background: #049bcb;
        color: #fff;
        padding: 10px 20px;
        border-radius: 7px;
      }
    }
  }
  .two {
    display: flex;
    align-items: center;
    flex-direction: column;
    .header {
      width: 100%;
      background: #049bcb;
      text-align: center;
      h1 {
        color: #fff;
      }
    }
    .contents {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding-top: 75px;
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 10px;
      .title {
        font-size: 20px;
      }
      table {
        width: 100%;
        text-align: center;
        td {
          border: 1px solid black;
          padding: 5px 0;
          font-size: 20px;
        }
      }
    }
    .result {
      width: 100%;
      padding-left: 30px;
      padding-right: 30px;
      span {
        color: red;
      }
      .section-1 {
        color: #9c36b5;
        font-weight: bold;
        font-size: 28px;
      }
      .section-2 {
        color: #000;
        font-size: 20px;
      }
      .section-3 {
        color: #9c36b5;
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
`;
