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
  posts: null,
  last: null,
  first: null,
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
    const last = snapshot.docs[snapshot.docs.length - 1];
    const posts = snapshot.docs.map((doc) => doc.data());
    set({ posts, last });
  },
  getNext: async (end) => {
    const snapshot = await firebaseDb
      .collection("posts")
      .orderBy("createAt", "desc")
      .startAfter(end)
      .limit(6)
      .get();

    const first = snapshot.docs[0];
    const last = snapshot.docs[snapshot.docs.length - 1];
    const posts = snapshot.docs.map((doc) => doc.data());
    console.log(posts);
    set({ posts, last, first });
  },
  getPrev: async (start) => {
    const snapshot = await firebaseDb
      .collection("posts")
      .orderBy("createAt", "desc")
      .endBefore(start)
      .limitToLast(6)
      .get();
    const first = snapshot.docs[0];
    const last = snapshot.docs[snapshot.docs.length - 1];
    const posts = snapshot.docs.map((doc) => doc.data());
    console.log(posts);

    set({ posts, last, first });
  },
  setStart: () => set((state) => ({ start: !state.start })),
});

const useStore = create(devtools(store));

export default useStore;
