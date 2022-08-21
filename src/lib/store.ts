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
  currentOrdedr: Partial<CurrentDrink>[];
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
  rtdMenu: () => void;
  newspaperMenu: () => void;
  donationsMenu: () => void;
  testMenu: () => void;
  testMenu2: () => void;
  coreCoffeeMenu: () => void;
  decafMenu: () => void;
  reserveMenu: () => void;
  pregroundMenu: () => void;
  systemFuncsMenu: () => void;
  icedDrink: (cd: Partial<CurrentDrink>, ice: string) => void;
  sizeDrink: (cd: Partial<CurrentDrink>, sizing: string) => void;
  hotDrink: () => void;
  drinkCategory: () => void;
  foodCategory: () => void;
  miscCategory: () => void;
  beansCategory: () => void;
  rtdCategory: () => void;
  funcsCategory: () => void;
};

export const useStore = create<State>((set) => ({
  category: "DrinksTab",
  menu: "drinkSizeMenu",
  currentDrink: {},
  currentOrder: [],
  drinkCategory: () => set({ category: "DrinksTab", menu: "drinkSizeMenu" }),
  foodCategory: () => set({ category: "FoodTab", menu: "muffinMenu" }),
  miscCategory: () => set({ category: "MiscTab", menu: "loyaltyMenu" }),
  beansCategory: () => set({ category: "BeansTab", menu: "coreCoffeeMenu" }),
  rtdCategory: () => set({ category: "RtdTab", menu: "rtdMenu" }),
  funcsCategory: () => set({ category: "FuncsTab", menu: "systemFuncsMenu" }),
  //DrinkTab Menus
  drinkSizeMenu: () => set({ category: "DrinksTab", menu: "drinkSizeMenu" }),
  syrupMenu: () => set({ category: "DrinksTab", menu: "syrupMenu" }),
  milkMenu: () => set({ category: "DrinksTab", menu: "milkMenu" }),
  customMenu: () => set({ category: "DrinksTab", menu: "customMenu" }),
  blendedMenu: () => set({ category: "DrinksTab", menu: "blendedMenu" }),
  brewMenu: () => set({ category: "DrinksTab", menu: "brewMenu" }),
  espMenu: () => set({ category: "DrinksTab", menu: "espMenu" }),
  otherMenu: () => set({ category: "DrinksTab", menu: "otherMenu" }),
  teaMenu: () => set({ category: "DrinksTab", menu: "teaMenu" }),
  //FoodTab Menus
  muffinMenu: () => set({ category: "FoodTab", menu: "muffinMenu" }),
  cakesMenu: () => set({ category: "FoodTab", menu: "cakesMenu" }),
  breadMenu: () => set({ category: "FoodTab", menu: "breadMenu" }),
  doughnutsMenu: () => set({ category: "FoodTab", menu: "doughnutsMenu" }),
  browniesMenu: () => set({ category: "FoodTab", menu: "browniesMenu" }),
  sandwichMenu: () => set({ category: "FoodTab", menu: "sandwichMenu" }),
  //MiscTab Menus
  loyaltyMenu: () => set({ menu: "loyaltyMenu" }),
  bulkMenu: () => set({ menu: "bulkMenu" }),
  newspaperMenu: () => set({ menu: "newspaperMenu" }),
  donationsMenu: () => set({ menu: "donationsMenu" }),
  testMenu: () => set({ menu: "testMenu" }),
  testMenu2: () => set({ menu: "testMenu2" }),
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
  //RtdTab Menus
  rtdMenu: () => set({ category: "RtdTab", menu: "rtdMenu" }),
  //FunctionsTab Menus
  systemFuncsMenu: () => set({ menu: "systemFuncsMenu" }),
}));
