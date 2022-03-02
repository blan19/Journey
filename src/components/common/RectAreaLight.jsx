import * as THREE from "three";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";
import { useThree } from "@react-three/fiber";

const RectArealightWithHelper = ({ position, color, rotation }) => {
  const { scene } = useThree();
  RectAreaLightUniformsLib.init();

  const rectLight = new THREE.RectAreaLight(color, 5, 4, 5);
  rectLight.position.set(position[0], position[1], position[2]);
  rectLight.rotation.set(rotation[0], rotation[1], rotation[2]);
  rectLight.intensity = 0.2;
  rectLight.castShadow = true;
  rectLight.receiveShadow = true;
  scene.add(rectLight);
  scene.add(new RectAreaLightHelper(rectLight));

  return null;
};

export default RectArealightWithHelper;
