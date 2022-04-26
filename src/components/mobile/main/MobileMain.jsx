import React from "react";
import "./styles.css";
import { AiOutlinePicture } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";
const MobileMain = () => {
  return (
    <div className="container">
      <div className="title">The Time We Passed</div>
      <div className="teamName">Gazigazi</div>
      <div className="route-button">
        <button className="intro-button">
          <AiOutlinePicture className="icon" />
          <div>작품소개</div>
          <AiOutlinePicture className="none" />
        </button>
        <button className="post-button">
          <MdPermContactCalendar className="icon" />
          <div>방명록</div>
          <MdPermContactCalendar className="none" />
        </button>
      </div>
    </div>
  );
};

export default MobileMain;
