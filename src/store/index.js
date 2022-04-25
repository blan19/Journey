import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  register: false,
  setRegister: () => set((state) => ({ register: !state.register })),
});

const useStore = create(devtools(store));

export default useStore;
