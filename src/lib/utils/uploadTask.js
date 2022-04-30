import { firebaseStorage, uploadBytesResumable } from "../clientApp";
import { getDownloadURL } from "firebase/storage";

export default function uploadTask(path, image) {
  return new Promise((resolve, reject) => {
    const storageRef = firebaseStorage.ref(`${path}${image.name}`);
    uploadBytesResumable(storageRef, image, { contentType: image.type }).on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
        reject();
      },
      () => {
        getDownloadURL(storageRef).then((url) => resolve(url));
      }
    );
  }).then((res) => res);
}
