import React, { useRef } from "react";
import * as THREE from "three";
import { a } from "@react-spring/three";
import { Switch, Route } from "wouter";
import SceneTwo from "../Pages/SceneTwo";
import { ContactShadows, OrbitControls, useHelper } from "@react-three/drei";
import SceneOne from "../Pages/SceneOne";

const Layouts = ({ transition }) => {
  const spotLight = useRef();
  useHelper(spotLight, THREE.SpotLightHelper, "cyan");
  return transition(({ opacity, ...props }, location) => (
    <a.group {...props}>
      <Switch location={location}>
        <Route path="/">
          <OrbitControls />
          <ambientLight castShadow intensity={0.2} />
          <pointLight castShadow />
          <spotLight
            ref={spotLight}
            castShadow
            position={[0, 2, 0]}
            intensity={0.3}
            // angle={-10}
            // distance={100}
            // angle={1}
          />
          <SceneOne />
          <ContactShadows />
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
