import React from "react";
import { Link } from "wouter";
import { AiOutlinePicture } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";
import { MobileMainContainer } from "../Mobile.styles";

const MobileMain = () => {
  return (
    <MobileMainContainer>
      <div className="mobile-main-title">
        <h1>The Time We Passed</h1>
        <p>팀 가지가지</p>
      </div>
      <nav className="mobile-main-nav">
        <Link to="/intro">
          <AiOutlinePicture className="icon" />
          <span>작품소개</span>
        </Link>
        <Link to="/posts">
          <MdPermContactCalendar className="icon" />
          <span>방명록</span>
        </Link>
      </nav>
    </MobileMainContainer>
  );
};

export default MobileMain;
