import create from "zustand";

interface CurrentDrink {
  iced: string;
  decaf: string;
  shots: number;
  size: string;
  pull: string;
  blonde: boolean;
  affogato: boolean;
}

type State = {
  category: string;
  menu: string;
  currentDrink: Partial<CurrentDrink>;
  drinkSizeMenu: () => void;
  syrupMenu: () => void;
  milkMenu: () => void;
  customMenu: () => void;
  blendedMenu: () => void;
  brewMenu: () => void;
  otherMenu: () => void;
  espMenu: () => void;
  teaMenu: () => void;
  muffinMenu: () => void;
  icedDrink: () => void;
  hotDrink: () => void;
  drinkCategory: () => void;
  foodCategory: () => void;
};

export const useStore = create<State>((set) => ({
  category: "DrinksTab",
  menu: "drinkSizeMenu",
  currentDrink: {},
  drinkCategory: () => set({ category: "DrinksTab" }),
  foodCategory: () => set({ category: "FoodTab" }),
  drinkSizeMenu: () => set({ menu: "drinkSizeMenu" }),
  syrupMenu: () => set({ menu: "syrupMenu" }),
  milkMenu: () => set({ menu: "milkMenu" }),
  customMenu: () => set({ menu: "customMenu" }),
  blendedMenu: () => set({ menu: "blendedMenu" }),
  brewMenu: () => set({ menu: "brewMenu" }),
  espMenu: () => set({ menu: "espMenu" }),
  otherMenu: () => set({ menu: "otherMenu" }),
  teaMenu: () => set({ menu: "teaMenu" }),
  muffinMenu: () => set({ menu: "muffinMenu" }),
  icedDrink: () => set({ currentDrink: { iced: "Iced" } }),
  hotDrink: () => set({ currentDrink: { iced: "Hot" } }),
}));
