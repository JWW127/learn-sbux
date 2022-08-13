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
  cakesMenu: () => void;
  breadMenu: () => void;
  doughnutsMenu: () => void;
  browniesMenu: () => void;
  sandwichMenu: () => void;
  loyaltyMenu: () => void;
  bulkMenu: () => void;
  newspaperMenu: () => void;
  donationsMenu: () => void;
  testMenu: () => void;
  coreCoffeeMenu: () => void;
  decafMenu: () => void;
  reserveMenu: () => void;
  pregroundMenu: () => void;
  icedDrink: (cd: Partial<CurrentDrink>, ice: string) => void;
  sizeDrink: (cd: Partial<CurrentDrink>, sizing: string) => void;
  hotDrink: () => void;
  drinkCategory: () => void;
  foodCategory: () => void;
  miscCategory: () => void;
  beansCategory: () => void;
  rtdCategory: () => void;
};

export const useStore = create<State>((set) => ({
  category: "DrinksTab",
  menu: "drinkSizeMenu",
  currentDrink: {},
  drinkCategory: () => set({ category: "DrinksTab", menu: "drinkSizeMenu" }),
  foodCategory: () => set({ category: "FoodTab", menu: "muffinMenu" }),
  miscCategory: () => set({ category: "MiscTab", menu: "loyaltyMenu" }),
  beansCategory: () => set({ category: "BeansTab", menu: "coreCoffeeMenu" }),
  rtdCategory: () => set({ category: "RtdTab", menu: "muffinMenu" }),
  //DrinkTab Menus
  drinkSizeMenu: () => set({ menu: "drinkSizeMenu" }),
  syrupMenu: () => set({ menu: "syrupMenu" }),
  milkMenu: () => set({ menu: "milkMenu" }),
  customMenu: () => set({ menu: "customMenu" }),
  blendedMenu: () => set({ menu: "blendedMenu" }),
  brewMenu: () => set({ menu: "brewMenu" }),
  espMenu: () => set({ menu: "espMenu" }),
  otherMenu: () => set({ menu: "otherMenu" }),
  teaMenu: () => set({ menu: "teaMenu" }),
  //FoodTab Menus
  muffinMenu: () => set({ menu: "muffinMenu" }),
  cakesMenu: () => set({ menu: "cakesMenu" }),
  breadMenu: () => set({ menu: "breadMenu" }),
  doughnutsMenu: () => set({ menu: "doughnutsMenu" }),
  browniesMenu: () => set({ menu: "browniesMenu" }),
  sandwichMenu: () => set({ menu: "sandwichMenu" }),
  //MiscTab Menus
  loyaltyMenu: () => set({ menu: "loyaltyMenu" }),
  bulkMenu: () => set({ menu: "bulkMenu" }),
  newspaperMenu: () => set({ menu: "newspaperMenu" }),
  donationsMenu: () => set({ menu: "donationsMenu" }),
  testMenu: () => set({ menu: "testMenu" }),
  //BeansTab Menus
  coreCoffeeMenu: () => set({ menu: "coreCoffeeMenu" }),
  decafMenu: () => set({ menu: "decafMenu" }),
  reserveMenu: () => set({ menu: "reserveMenu" }),
  pregroundMenu: () => set({ menu: "pregroundMenu" }),
  //Button actions
  icedDrink: (currentDrink, ice) =>
    set({ currentDrink: { ...currentDrink, iced: ice } }),
  sizeDrink: (currentDrink, sizing) =>
    set({ currentDrink: { ...currentDrink, size: sizing } }),
  hotDrink: () => set({ currentDrink: { iced: "Hot" } }),
}));
