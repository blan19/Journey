import React from "react";
import { If } from "./lib/Condition";
import Mobile from "./View/Mobile";
import Browser from "./View/Browser";
import { isMobile, isBrowser, isTablet } from "react-device-detect";
import "./styles.css";

const App = () => {
  return (
    <>
      <If condition={isMobile || isTablet}>
        <Mobile />
      </If>
      <If condition={isBrowser}>
        <Browser />
      </If>
    </>
  );
};

export default App;
