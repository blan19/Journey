import React from "react";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";
import useScrollReveal from "../../../hooks/useScrollReveal";
import {
  MobileEpisodeContainer,
  MobileIntroContainer,
  MobileIntroSection,
  MobileIntroWrapper,
} from "../Mobile.styles";

const mobile3Obj = [
  { title: "설렘", text: "'합격자 발표 확인'의 순간'" },
  { title: "당황", text: "신문지 태우기 (기초조형 및 실습 과제)" },
  { title: "열정", text: "프로그래밍" },
  { title: "젊음", text: "돌계단에서의 '축제'" },
  { title: "마침", text: "사회를 향한 준비" },
];

const mobileEpisode = [
  {
    src: "/image/webView_5.png",
    title: "설렘",
    text: (
      <>
        <p>노트북을 통해 본인의 합격 여부를 확인하는</p>
        <p>
          <b>설렘</b>의 순간을 표현
        </p>
      </>
    ),
    left: false,
  },
  {
    src: "/image/webView_8.png",
    title: "당황",
    text: (
      <>
        <p>대학 과제에 대한 로망이 깨진 순간,</p>
        <p>
          레포트 대신 <b>신문지를 칠하고 있는 모습</b>을 표현
        </p>
      </>
    ),
    left: true,
  },
  {
    src: "/image/webView_11.png",
    title: "열정",
    text: (
      <>
        <p>우리는 IT대학.</p>
        <p>본 캠퍼스와 동떨어져있는 정보과학관을</p>
        <p>
          <b>'정보섬'</b>으로 표현
        </p>
        <br />
        <p>이 곳에서 프로그래밍에 대한</p>
        <p>열정을 꽃피운다.</p>
      </>
    ),
    left: false,
  },
  {
    src: "/image/webView_14.png",
    title: "청춘",
    text: (
      <>
        <p>학교에 돌계단이 생기면서</p>
        <p>우리의 축제는 한층 업그레이드 되었다.</p>
        <hr />
        <p>축제 때마다 젊음을 느낄 수 있는</p>
        <p>
          <b>돌계단</b>을 표현
        </p>
      </>
    ),
    left: true,
  },
  {
    src: "/image/webView_17.png",
    title: "마침",
    text: (
      <>
        <p>숭실대학교에서의 4년을 보내고</p>
        <p>대학생활의 마침표를 찍는다.</p>
        <hr />
        <p>숭실의 자랑,</p>
        <p>
          백마상 앞에서의 <b>졸업식을</b> 표현
        </p>
      </>
    ),
    left: false,
  },
];

const MobileEpisode = ({ src, title, content, idx, left }) => {
  return (
    <MobileEpisodeContainer left={left}>
      <MobileIntroWrapper column center>
        <h1 {...useScrollReveal(4, 0)}>episode {idx + 1}.</h1>
        <div className="mobile-episode-image" {...useScrollReveal(4, 0)}>
          <img
            src={src}
            alt="episode"
            style={{ width: "100%", marginTop: "7.5rem" }}
          />
        </div>
        <div
          className="mobile-episode"
          {...useScrollFadeIn(left ? "left" : "right", 2, 0)}
        >
          <div className="mobile-episode-title">
            <p>{title}</p>
            <div className="mobile-episode-circle"></div>
          </div>
          <div className="mobile-episode-content">{content}</div>
        </div>
      </MobileIntroWrapper>
    </MobileEpisodeContainer>
  );
};

const MobileSectionThree = ({ title, text, delay }) => {
  return (
    <div className="section-3-contents">
      <div className="section-3-contents-title">
        <p {...useScrollReveal(1, delay)}>{title}</p>
        <div
          className="section-3-contents-circle"
          {...useScrollReveal(1, delay)}
        ></div>
      </div>
      <div
        className="section-3-contents-text"
        {...useScrollFadeIn("left", 1, delay)}
      >
        <span>{text}</span>
      </div>
    </div>
  );
};

const MobileIntro = () => {
  return (
    <MobileIntroContainer>
      <MobileIntroSection className="section-1" {...useScrollReveal(4, 0)}>
        <div className="section-1-1">
          <p>
            팀 <b>가지가지</b>
          </p>
        </div>
        <div className="section-1-2">
          <h1>'The Time We Passed'</h1>
          <p>"우리가 지나온 시간"</p>
        </div>
      </MobileIntroSection>
      <MobileIntroSection className="section-2">
        <MobileIntroWrapper>
          <div className="section-2-line"></div>
          <div className="section-2-text">
            <div
              className="section-2-text-1"
              {...useScrollFadeIn("left", 1, 0)}
            >
              <p>안녕하세요,</p>
              <p>팀 '가지가지' 입니다.</p>
            </div>
            <div
              className="section-2-text-2"
              {...useScrollFadeIn("left", 1, 1)}
            >
              <p>작품 'The Time We Passed'는</p>
            </div>
            <div
              className="section-2-text-3"
              {...useScrollFadeIn("left", 1, 2)}
            >
              <p>저희가 지나온 대학생활을 웹으로 함축하여 담은</p>
              <p>
                일종의 <b>'인터랙티브 스토리 웹'</b>입니다.
              </p>
            </div>
            <div
              className="section-2-text-4"
              {...useScrollFadeIn("left", 1, 3)}
            >
              <p>
                각각의 장면마다 <b>인터랙션</b>이 있으며,
              </p>
              <p>이를 통해 저희가 경험했던 대학생활을</p>
              <p>간접적으로 표현함이 목표입니다.</p>
            </div>
          </div>
        </MobileIntroWrapper>
      </MobileIntroSection>
      <MobileIntroSection>
        <MobileIntroWrapper column>
          <div className="section-3-title" {...useScrollReveal(4, 0)}>
            <h1>episode.</h1>
          </div>
          {mobile3Obj.map((obj, idx) => (
            <MobileSectionThree
              key={idx}
              title={obj.title}
              text={obj.text}
              delay={idx}
            />
          ))}
        </MobileIntroWrapper>
      </MobileIntroSection>
      {mobileEpisode.map((episode, idx) => (
        <MobileEpisode
          key={idx}
          src={episode.src}
          title={episode.title}
          content={episode.text}
          idx={idx}
          left={episode.left}
        />
      ))}
      <MobileIntroSection>
        <MobileIntroWrapper column center>
          <h1 {...useScrollReveal(4, 0)} className="section-5">
            Thank you
          </h1>
        </MobileIntroWrapper>
      </MobileIntroSection>
    </MobileIntroContainer>
  );
};

export default MobileIntro;
