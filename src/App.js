import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import "./styles.css";
import Mobile from "./View/Mobile";
import Browser from "./View/Browser";
import "./styles.css";

const App = () => {
  return (
    <>
      <BrowserView style={{ width: "100%", height: "100%" }}>
        <Browser />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </>
  );
};

export default App;
