import React from "react";
import { Choose, When, OtherWise } from "./lib/Condition";
import Mobile from "./View/Mobile";
import Browser from "./View/Browser";
import { isMobile } from "react-device-detect";
import "./styles.css";

const App = () => {
  return (
    <Choose>
      <When condition={isMobile}>
        <Mobile />
      </When>
      <OtherWise>
        <Browser />
      </OtherWise>
    </Choose>
  );
};

export default App;
