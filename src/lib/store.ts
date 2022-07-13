import create from "zustand";

type State = {
  menu: string;
  drinkSizeMenu: () => void;
  syrupMenu: () => void;
  milkMenu: () => void;
  customMenu: () => void;
  blendedMenu: () => void;
  brewMenu: () => void;
  otherMenu: () => void;
  espMenu: () => void;
  teaMenu: () => void;
};

export const useStore = create<State>((set) => ({
  menu: "drinkSizeMenu",
  drinkSizeMenu: () => set({ menu: "drinkSizeMenu" }),
  syrupMenu: () => set({ menu: "syrupMenu" }),
  milkMenu: () => set({ menu: "milkMenu" }),
  customMenu: () => set({ menu: "customMenu" }),
  blendedMenu: () => set({ menu: "blendedMenu" }),
  brewMenu: () => set({ menu: "brewMenu" }),
  espMenu: () => set({ menu: "espMenu" }),
  otherMenu: () => set({ menu: "otherMenu" }),
  teaMenu: () => set({ menu: "teaMenu" }),
}));
