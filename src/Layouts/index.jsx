import React, { useRef } from "react";
import * as THREE from "three";
import { a } from "@react-spring/three";
import { Switch, Route } from "wouter";
import SceneTwo from "../Pages/SceneTwo";
import SceneThree from "../Pages/SceneThree";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useHelper,
} from "@react-three/drei";
import SceneOne from "../Pages/SceneOne";
import Posts from "../Pages/Posts";

const Layouts = ({ transition }) => {
  const spotLight = useRef();
  useHelper(spotLight, THREE.SpotLightHelper, "cyan");
  return transition(({ opacity, ...props }, location) => (
    <a.group {...props}>
      <Switch location={location}>
        <Route path="/">
          <ambientLight intensity={0.2} />
          <spotLight
            ref={spotLight}
            castShadow
            position={[0, 4, 0]}
            intensity={2}
            // angle={-10}
            // distance={100}
          />
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={1}
            minPolarAngle={1}
            enableRotate={false}
            minZoom={1}
          />
          {/* <OrbitControls /> */}
          <SceneOne />
        </Route>
        <Route path="/1">
          <OrbitControls />
          <SceneTwo />
        </Route>
        <Route path="/2">
          <OrbitControls />
          <spotLight position={[0, 10, 0]} />
          <SceneThree />
        </Route>
        <Route path="/3">
          <OrbitControls />
          <spotLight position={[0, 10, 0]} />
          <SceneThree />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
      </Switch>
    </a.group>
  ));
};

export default Layouts;
