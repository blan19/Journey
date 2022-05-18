import create from "zustand";
import { devtools } from "zustand/middleware";
import { firebaseDb } from "../lib/clientApp";

const store = (set) => ({
  control: false,
  register: false,
  start: false,
  end: false,
  isLocked: false,
  imgMesh: null,
  posts: {
    data: null,
    last: null,
  },
  setRegister: () => set((state) => ({ register: !state.register })),
  setIsLockedTrue: () => set(() => ({ isLocked: true })),
  setIsLockedFalse: () => set(() => ({ isLocked: false })),
  setControlTrue: () => set(() => ({ control: true })),
  setControlFalse: () => set(() => ({ control: false })),
  setImgMesh: (mesh) => set(() => ({ imgMesh: mesh })),
  setEnd: () => set((state) => ({ end: !state.end })),
  getPosts: async () => {
    const snapshot = await firebaseDb
      .collection("posts")
      .orderBy("createAt", "desc")
      .limit(6)
      .get();
    const last = snapshot.docs[snapshot.doc.length - 1];
    const data = snapshot.docs.map((doc) => doc.data());
    set({ posts: { data, last } });
  },
  setStart: () => set((state) => ({ start: !state.start })),
});

const useStore = create(devtools(store));

export default useStore;
