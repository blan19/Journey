import create from "zustand";
import { devtools } from "zustand/middleware";
import { firebaseDb } from "../lib/clientApp";

const store = (set) => ({
  control: false,
  register: false,
  start: false,
  end: false,
  isLocked: false,
  image: null,
  posts: null,
  setRegister: () => set((state) => ({ register: !state.register })),
  setIsLockedTrue: () => set(() => ({ isLocked: true })),
  setIsLockedFalse: () => set(() => ({ isLocked: false })),
  setControlTrue: () => set(() => ({ control: true })),
  setControlFalse: () => set(() => ({ control: false })),
  setImage: (src) => set(() => ({ image: src })),
  setEnd: () => set((state) => ({ end: !state.end })),
  getPosts: async () => {
    const snapshot = await firebaseDb
      .collection("posts")
      .orderBy("createAt", "desc")
      .get();
    const posts = snapshot.docs.map((doc) => doc.data());
    set({ posts });
  },
  setStart: () => set((state) => ({ start: !state.start })),
});

const useStore = create(devtools(store));

export default useStore;
