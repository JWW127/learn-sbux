import { useStore } from "./../lib/store";

export const PosSideNav = () => {
  const menu = useStore((state) => state.menu);
  const drink = useStore((state) => state.currentDrink);
  const category = useStore((state) => state.category);
  const getDrinkMenu = useStore((state) => state.drinkSizeMenu);
  const getMuffinMenu = useStore((state) => state.muffinMenu);
  const getSyrupMenu = useStore((state) => state.syrupMenu);
  const getMilkMenu = useStore((state) => state.milkMenu);
  const getCustomMenu = useStore((state) => state.customMenu);
  const getCakesMenu = useStore((state) => state.cakesMenu);
  const getBreadMenu = useStore((state) => state.breadMenu);
  const getDoughnutsMenu = useStore((state) => state.doughnutsMenu);
  const getBrowniesMenu = useStore((state) => state.browniesMenu);
  const getSandwichMenu = useStore((state) => state.sandwichMenu);
  const getLoyaltyMenu = useStore((state) => state.loyaltyMenu);
  const getBulkMenu = useStore((state) => state.bulkMenu);
  const getNewsMenu = useStore((state) => state.newspaperMenu);
  const getDonationsMenu = useStore((state) => state.donationsMenu);
  const getTestMenu = useStore((state) => state.testMenu);
  const getTestMenu2 = useStore((state) => state.testMenu2);
  const getCoreCoffeeMenu = useStore((state) => state.coreCoffeeMenu);
  const getRtdMenu = useStore((state) => state.rtdMenu);
  const getSystemFuncsMenu = useStore((state) => state.systemFuncsMenu);

  let tab;

  const menuBtn =
    "flex flex-col items-center justify-center italic shadow-md rounded-tr-xl bg-stone-400 active:bg-stone-200 rounded-br-xl basis-1/6";
  const menuBtnActive =
    "flex flex-col items-center justify-center italic shadow-md rounded-tr-xl bg-stone-300 active:bg-stone-200 rounded-br-xl basis-1/6";

  //drinksizemenu
  const dsm =
    menu === "drinkSizeMenu"
      ? "flex flex-col items-center italic shadow-md rounded-tr-xl bg-stone-300 active:bg-stone-200 rounded-br-xl basis-2/5"
      : "flex flex-col items-center italic shadow-md rounded-tr-xl bg-stone-400 active:bg-stone-200 rounded-br-xl basis-2/5";

  const DrinksTab = () => {
    return (
      <div className="flex basis-[15%] flex-col gap-1 bg-neutral-500 pr-4">
        <button type="button" className={dsm} onClick={() => getDrinkMenu()}>
          <ul className="flex h-full w-20 flex-col items-center justify-between p-4">
            <li className="text-md font-ultralight flex w-20 basis-1/5 flex-wrap items-center justify-center gap-1 italic">
              <div className="flex h-5 w-5 items-center justify-center border-2 border-gray-600 ">
                {drink.iced === "Iced" ? "x" : ""}
              </div>
              Iced
            </li>
            <li className="flex basis-1/5 flex-col italic">
              Decaf{" "}
              <div className="w-18 h-6 rounded-sm border-2 border-gray-600 text-center"></div>
            </li>
            <li className="flex basis-1/5 flex-col italic">
              Shots{" "}
              <div className="w-18 h-6 rounded-sm border-2 border-gray-600 text-center"></div>
            </li>
            <li className="flex basis-1/5 flex-col italic">
              Sizes{" "}
              <div className="w-18 h-6 rounded-sm border-2 border-gray-600 text-center">
                {drink.size?.slice(0, 2)}
              </div>
            </li>
          </ul>
        </button>
        <button
          type="button"
          className={menu === "syrupMenu" ? menuBtnActive : menuBtn}
          onClick={() => getSyrupMenu()}
        >
          <ul className="flex h-full w-20 flex-col items-center justify-center p-4">
            <li className="flex flex-col text-center italic">
              Syrup
              <div className="w-18 h-6 rounded-sm border-2 border-gray-600"></div>
            </li>
          </ul>
        </button>
        <button
          type="button"
          className={menu === "milkMenu" ? menuBtnActive : menuBtn}
          onClick={() => getMilkMenu()}
        >
          <ul className="flex h-full w-20 flex-col items-center justify-center p-4">
            <li className="flex flex-col text-center italic">
              Milks
              <div className="w-18 h-6 rounded-sm border-2 border-gray-600"></div>
            </li>
          </ul>
        </button>
        <button
          type="button"
          className={menu === "customMenu" ? menuBtnActive : menuBtn}
          onClick={() => getCustomMenu()}
        >
          <ul className="flex h-full w-20 flex-col items-center justify-center p-4">
            <li className="flex flex-col text-center italic">
              Custom
              <div className="w-18 h-6 rounded-sm border-2 border-gray-600"></div>
            </li>
          </ul>
        </button>
      </div>
    );
  };

  const FoodTab = () => {
    return (
      <div className="flex basis-[15%] flex-col gap-1 bg-neutral-500 pr-4 pb-4">
        <button
          type="button"
          className={menu === "muffinMenu" ? menuBtnActive : menuBtn}
          onClick={() => getMuffinMenu()}
        >
          Muffins & Scones
        </button>
        <button
          type="button"
          className={menu === "cakesMenu" ? menuBtnActive : menuBtn}
          onClick={() => getCakesMenu()}
        >
          Loaves & Cakes
        </button>
        <button
          type="button"
          className={menu === "breadMenu" ? menuBtnActive : menuBtn}
          onClick={() => getBreadMenu()}
        >
          Bagels & Bread
        </button>
        <button
          type="button"
          className={menu === "doughnutsMenu" ? menuBtnActive : menuBtn}
          onClick={() => getDoughnutsMenu()}
        >
          Doughnuts & SweetRolls
        </button>
        <button
          type="button"
          className={menu === "browniesMenu" ? menuBtnActive : menuBtn}
          onClick={() => getBrowniesMenu()}
        >
          Brownies, Cookies, & Bars
        </button>
        <button
          type="button"
          className={menu === "sandwichMenu" ? menuBtnActive : menuBtn}
          onClick={() => getSandwichMenu()}
        >
          Breakfast Sandwiches
        </button>
      </div>
    );
  };

  const RtdTab = () => {
    return (
      <div className="flex basis-[15%] flex-col gap-1 bg-neutral-500 pr-4 pb-4">
        <button
          type="button"
          className={menu === "rtdMenu" ? menuBtnActive : menuBtn}
          onClick={() => getRtdMenu()}
        >
          Case Items
        </button>
      </div>
    );
  };

  const BeansTab = () => {
    return (
      <div className="flex basis-[15%] flex-col gap-1 bg-neutral-500 pr-4 pb-4">
        <button
          type="button"
          className={menu === "coreCoffeeMenu" ? menuBtnActive : menuBtn}
          onClick={() => getCoreCoffeeMenu()}
        >
          Caf
        </button>
        <button
          type="button"
          className={menu === "cakesMenu" ? menuBtnActive : menuBtn}
          onClick={() => getCakesMenu()}
        >
          Decaf
        </button>
        <button
          type="button"
          className={menu === "reserveMenu" ? menuBtnActive : menuBtn}
          onClick={() => getBreadMenu()}
        >
          Reserve
        </button>
        <button
          type="button"
          className={menu === "pregroundMenu" ? menuBtnActive : menuBtn}
          onClick={() => getDoughnutsMenu()}
        >
          Pre-Ground
        </button>
      </div>
    );
  };

  const MiscTab = () => {
    return (
      <div className="flex basis-[15%] flex-col gap-1 bg-neutral-500 pr-4 pb-4">
        <button
          type="button"
          className={menu === "loyaltyMenu" ? menuBtnActive : menuBtn}
          onClick={() => getLoyaltyMenu()}
        >
          Loyalty Card
        </button>
        <button
          type="button"
          className={menu === "bulkMenu" ? menuBtnActive : menuBtn}
          onClick={() => getBulkMenu()}
        >
          Bulk
        </button>
        <button
          type="button"
          className={menu === "newspaperMenu" ? menuBtnActive : menuBtn}
          onClick={() => getNewsMenu()}
        >
          Newspapers
        </button>
        <button
          type="button"
          className={menu === "donationsMenu" ? menuBtnActive : menuBtn}
          onClick={() => getDonationsMenu()}
        >
          Donations
        </button>
        <button
          type="button"
          className={menu === "testMenu" ? menuBtnActive : menuBtn}
          onClick={() => getTestMenu()}
        >
          Non-Drink Test
        </button>
        <button
          type="button"
          className={menu === "testMenu2" ? menuBtnActive : menuBtn}
          onClick={() => getTestMenu2()}
        >
          Test Items
        </button>
      </div>
    );
  };

  const FuncsTab = () => {
    return (
      <div className="flex basis-[15%] flex-col flex-wrap gap-1 bg-neutral-500 pr-4 pb-4">
        <button
          type="button"
          className={menu === "systemFuncsMenu" ? menuBtnActive : menuBtn}
          onClick={() => getSystemFuncsMenu()}
        >
          Store Functions
        </button>
      </div>
    );
  };
  // top nav that that controls sidenav tabs rendered
  switch (category) {
    case "DrinksTab":
      tab = <DrinksTab />;
      break;
    case "FoodTab":
      tab = <FoodTab />;
      break;
    case "RtdTab":
      tab = <RtdTab />;
      break;
    case "BeansTab":
      tab = <BeansTab />;
      break;
    case "MiscTab":
      tab = <MiscTab />;
      break;
    case "FuncsTab":
      tab = <FuncsTab />;
      break;
    default:
      tab = <DrinksTab />;
      break;
  }
  return <>{tab}</>;
};
