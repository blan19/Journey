import React from "react";
import { Route, Router } from "wouter";
import { MobileIntro, MobileMain, MobilePosts } from "../components/mobile";
import GlobalStyles from "../lib/styles/GlobalStyles";
import "../lib/styles/fonts/font.css";

const Mobile = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route path="/">
          <MobileMain />
        </Route>
        <Route path="/intro">
          <MobileIntro />
        </Route>
        <Route path="/posts">
          <MobilePosts />
        </Route>
      </Router>
    </>
  );
};

export default Mobile;
