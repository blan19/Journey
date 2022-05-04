import React, { useCallback, useState } from "react";
import dayjs from "dayjs";
import { dataUrlToFile } from "../../../lib/utils/dataUrlToFile";
import useStore from "../../../store";
import { SceneFiveEndContainer } from "./styles";
import uploadTask from "../../../lib/utils/uploadTask";
import { firebaseDb, firebaseNow } from "../../../lib/clientApp";

const SceneFiveEnd = ({ image }) => {
  const [loading, setLoading] = useState(false);
  const { end, setEnd, setControlFalse, setImgMesh } = useStore(
    (state) => state
  );
  const onBack = useCallback(() => {
    setImgMesh(null);
    setControlFalse();
    setEnd();
  }, [setControlFalse, setEnd, setImgMesh]);
  const onStopPropagation = (e) => e.stopPropagation();
  const onClick = useCallback(async () => {
    setLoading(true);
    try {
      const file = await dataUrlToFile(
        image,
        dayjs(new Date()).format("YYYY-MM-DD-HH:mm")
      ).then((res) => res);
      const url = await uploadTask("Post/", file);
      await firebaseDb
        .collection("posts")
        .doc(file.name)
        .set({ url, createAt: firebaseNow, title: file.name })
        .then(() => {
          console.log("upload store iamge");
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  }, [image]);
  return (
    <SceneFiveEndContainer visible={end}>
      <div className="end-wrapper" onClick={onStopPropagation}>
        <form>
          <div className="end-title">
            <h1>The End</h1>
          </div>
          <div className="end-image">
            <img src={image} alt="thumbnail" />
          </div>
          <div className="end-button">
            {loading ? (
              <p>loading..</p>
            ) : (
              <>
                <button type="button" onClick={onBack}>
                  Retry
                </button>
                <button type="button" onClick={onClick}>
                  Done
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </SceneFiveEndContainer>
  );
};

export default SceneFiveEnd;
