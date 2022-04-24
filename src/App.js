import React from "react";
import { isBrowser, isMobile } from "react-device-detect";
import "./styles.css";
import Mobile from "./View/Mobile";
import { Choose, When } from "./lib/Condition";
import Browser from "./View/Browser";

const App = () => {
  return (
    <Choose>
      <When condition={isBrowser}>
        <Browser />
      </When>
      <When condition={isMobile}>
        <Mobile />
      </When>
    </Choose>
  );
};

export default App;
