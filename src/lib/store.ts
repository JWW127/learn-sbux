import create from "zustand";

interface CurrentDrink {
  iced?: string;
  decaf?: string;
  shots?: number;
  size: string;
  pull?: string;
  blonde?: boolean;
  affogato?: boolean;
}

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
  currentDrink: Partial<CurrentDrink>;
  icedDrink: () => void;
};

export const useStore = create<State>((set) => ({
  menu: "drinkSizeMenu",
  currentDrink: {},
  drinkSizeMenu: () => set({ menu: "drinkSizeMenu" }),
  syrupMenu: () => set({ menu: "syrupMenu" }),
  milkMenu: () => set({ menu: "milkMenu" }),
  customMenu: () => set({ menu: "customMenu" }),
  blendedMenu: () => set({ menu: "blendedMenu" }),
  brewMenu: () => set({ menu: "brewMenu" }),
  espMenu: () => set({ menu: "espMenu" }),
  otherMenu: () => set({ menu: "otherMenu" }),
  teaMenu: () => set({ menu: "teaMenu" }),
  icedDrink: () => set({ currentDrink: { iced: "Iced" } }),
}));
