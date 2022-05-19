import React from "react";
import { If } from "./lib/Condition";
import Mobile from "./View/Mobile";
import Browser from "./View/Browser";
import { isMobile, isBrowser } from "react-device-detect";
import "./styles.css";

const App = () => {
  return (
    <>
      <Mobile />
      <If condition={isMobile}>
        <Mobile />
      </If>
      <If condition={isBrowser}>
        <Browser />
      </If>
    </>
  );
};

export default App;
