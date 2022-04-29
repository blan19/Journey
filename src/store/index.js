import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  control: false,
  register: false,
  end: false,
  isLocked: false,
  image: null,
  setRegister: () => set((state) => ({ register: !state.register })),
  setIsLockedTrue: () => set(() => ({ isLocked: true })),
  setIsLockedFalse: () => set(() => ({ isLocked: false })),
  setControlTrue: () => set(() => ({ control: true })),
  setControlFalse: () => set(() => ({ control: false })),
  setImage: (src) => set(() => ({ image: src })),
  setEnd: () => set((state) => ({ end: !state.end })),
});

const useStore = create(devtools(store));

export default useStore;
