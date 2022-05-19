import React from "react";
import { If } from "./lib/Condition";
import Mobile from "./View/Mobile";
import Browser from "./View/Browser";
import { isMobile, isBrowser, isIPad13 } from "react-device-detect";
import "./styles.css";

const App = () => {
  return (
    <>
      <Mobile />

      {/* <If condition={isMobile || isIPad13}>
        <Mobile />
      </If>
      <If condition={isBrowser}>
        <Browser />
      </If> */}
    </>
  );
};

export default App;
