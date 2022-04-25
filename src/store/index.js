import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  register: false,
  isLocked: false,
  setRegister: () => set((state) => ({ register: !state.register })),
  setIsLockedTrue: () => set(() => ({ isLocked: true })),
  setIsLockedFalse: () => set(() => ({ isLocked: false })),
});

const useStore = create(devtools(store));

export default useStore;
