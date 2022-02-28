import * as THREE from "three";

const zoomFit = (object3D, camera) => {
  const box = new THREE.Box3().setFromObject(object3D);

  const sizeBox = box.getSize(new THREE.Vector3()).length();

  const centerBox = box.getCenter(new THREE.Vector3());

  const halfSizeModel = sizeBox * 0.5;

  const halfFov = THREE.Math.degToRad(camera.fov * 0.5);

  const distance = halfSizeModel / Math.tan(halfFov);

  const direction = new THREE.Vector3()
    .subVectors(camera.position, centerBox)
    .normalize();

  const position = direction.multiplyScalar(distance).add(centerBox);
  camera.position.copy(position);

  camera.near = sizeBox / 100;
  camera.far = sizeBox * 100;

  camera.updateProjectionMatrix();

  camera.lookAt(centerBox.x, centerBox.y, centerBox.z);
};

export default zoomFit;
