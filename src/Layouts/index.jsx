import React from "react";
import { a } from "@react-spring/three";
import { Switch, Route } from "wouter";
import SceneOne from "../components/SceneOne";
import SceneTwo from "../Pages/SceneTwo";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Layouts = ({ transition }) => {
  return transition(({ opacity, ...props }, location) => (
    <a.group {...props}>
      <Switch location={location}>
        <Route path="/">
          <PerspectiveCamera />
          <SceneOne />
        </Route>
        <Route path="/1">
          <OrbitControls />
          <SceneTwo />
        </Route>
      </Switch>
    </a.group>
  ));
};

export default Layouts;
