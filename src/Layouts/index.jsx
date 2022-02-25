import React from "react";
import { a } from "@react-spring/three";
import { Switch, Route } from "wouter";
import SceneOne from "../components/SceneOne";
import SceneTow from "../Pages/SceneTwo";
import Main from "../Pages/Main";

const Layouts = ({ transition }) => {
  return transition(({ opacity, ...props }, location) => (
    <a.group {...props}>
      <Switch location={location}>
        <Route path="/">
          <spotLight position={[0, 20, 0]} />
          <ambientLight />
          <SceneOne />
        </Route>
        <Route path="/1">
          <SceneTow />
        </Route>
      </Switch>
    </a.group>
  ));
};

export default Layouts;
