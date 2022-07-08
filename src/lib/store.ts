import create from "zustand";

type State = {
  menu: string;
  drinkSizeMenu: () => void;
  syrupMenu: () => void;
  milkMenu: () => void;
  customMenu: () => void;
};

export const useStore = create<State>((set) => ({
  menu: "drinkSizeMenu",
  drinkSizeMenu: () => set({ menu: "drinkSizeMenu" }),
  syrupMenu: () => set({ menu: "syrupMenu" }),
  milkMenu: () => set({ menu: "milkMenu" }),
  customMenu: () => set({ menu: "customMenu" }),
}));
