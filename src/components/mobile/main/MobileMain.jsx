import React from "react";
import { Link } from "wouter";
import { AiOutlinePicture } from "react-icons/ai";
import { MdOutlineNoteAlt } from "react-icons/md";
import { MobileMainContainer } from "../Mobile.styles";

const MobileMain = () => {
  return (
    <MobileMainContainer>
      <div className="mobile-main-title">
        <div className="intro">
          <div className="title">The Time We Passed</div>
          <div className="sub-title">'우리가 보내왔던 순간들'</div>
          <div className="border">
            <div className="team-name">by Team Gazigazi</div>
          </div>
        </div>

        <div className="photo-border">
          <div className="photo">
            <div className="slide-item">
              <img src="/image/1.png" alt="scene1" />
            </div>

            <div className="slide-item">
              <img src="/image/5.png" alt="scene2" />
            </div>
            <div className="slide-item">
              <img src="/image/4.png" alt="scene3" />
            </div>
            <div className="slide-item">
              <img src="/image/2.png" alt="scene4" />
            </div>
            <div className="slide-item">
              <img src="/image/3.png" alt="scene5" />
            </div>
          </div>
        </div>
      </div>
      <nav className="mobile-main-nav">
        <Link to="/intro">
          <MdOutlineNoteAlt className="icon" />
          <span>작품소개</span>
        </Link>
        <Link to="/posts">
          <AiOutlinePicture className="icon" />
          <span>사진보기</span>
        </Link>
      </nav>
    </MobileMainContainer>
  );
};

export default MobileMain;
