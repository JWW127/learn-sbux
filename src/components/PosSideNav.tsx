import { useStore } from "./../lib/store";

export const PosSideNav = () => {
  const menu = useStore((state) => state.menu);
  const drink = useStore((state) => state.currentDrink);
  const category = useStore((state) => state.category);
  const getDrinkMenu = useStore((state) => state.drinkSizeMenu);
  const getMuffinMenu = useStore((state) => state.muffinMenu)
  const getSyrupMenu = useStore((state) => state.syrupMenu);
  const getMilkMenu = useStore((state) => state.milkMenu);
  const getCustomMenu = useStore((state) => state.customMenu);
  const getCakesMenu = useStore((state) => state.cakesMenu)

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

  const sm = menu === "syrupMenu" ? menuBtnActive : menuBtn; //syrupmenu
  const mm = menu === "milkMenu" ? menuBtnActive : menuBtn; //milkmenu
  const cm = menu === "customMenu" ? menuBtnActive : menuBtn; //custommenu
  const mu = menu === "muffinMenu" ? menuBtnActive : menuBtn; //muffinmenu
  const ca = menu === "cakesMenu" ? menuBtnActive : menuBtn; //muffinmenu

  const DrinksTab = () => {
    return (
      <div className="bg-neutral-500 basis-[15%] flex flex-col gap-1 pr-4">
        <button className={dsm} onClick={() => getDrinkMenu()}>
          <ul className="flex flex-col items-center justify-between w-20 h-full p-4">
            <li className="flex flex-wrap items-center justify-center w-20 italic gap-1 text-md font-ultralight basis-1/5">
              <div className="flex items-center justify-center w-5 h-5 border-2 border-gray-600 ">
                {drink.iced === "Iced" ? "x" : ""}
              </div>
              Iced
            </li>
            <li className="flex flex-col italic basis-1/5">
              Decaf{" "}
              <div className="h-6 text-center border-2 border-gray-600 rounded-sm w-18"></div>
            </li>
            <li className="flex flex-col italic basis-1/5">
              Shots{" "}
              <div className="h-6 text-center border-2 border-gray-600 rounded-sm w-18"></div>
            </li>
            <li className="flex flex-col italic basis-1/5">
              Sizes{" "}
              <div className="h-6 text-center border-2 border-gray-600 rounded-sm w-18">{drink.size?.slice(0,2)}</div>
            </li>
          </ul>
        </button>
        <button className={sm} onClick={() => getSyrupMenu()}>
          <ul className="flex flex-col items-center justify-center w-20 h-full p-4">
          <li className="flex flex-col italic text-center">
          Syrup
          <div className="h-6 border-2 border-gray-600 rounded-sm w-18"></div>
          </li>
          </ul>
        </button>
        <button className={mm} onClick={() => getMilkMenu()}>
          <ul className="flex flex-col items-center justify-center w-20 h-full p-4">
          <li className="flex flex-col italic text-center">
              Milks
          <div className="h-6 border-2 border-gray-600 rounded-sm w-18"></div>
          </li>
          </ul>
        </button>
        <button className={cm} onClick={() => getCustomMenu()}>
          <ul className="flex flex-col items-center justify-center w-20 h-full p-4">
          <li className="flex flex-col italic text-center">
              Custom
          <div className="h-6 border-2 border-gray-600 rounded-sm w-18"></div>
          </li>
          </ul>
        </button>
      </div>
    );
  };

  const FoodTab = () => {
    return (
      <div className="bg-neutral-500 basis-[15%] flex flex-col gap-1 pr-4 pb-4">
        <button className={mu} onClick={() => getMuffinMenu()}>
         Muffins & Scones 
        </button>
        <button className={ca} onClick={() => getCakesMenu()}>
          Loaves & Cakes
        </button>
        <button className={sm} onClick={() => getSyrupMenu()}>
          Bagels & Bread
        </button>
        <button className={sm} onClick={() => getSyrupMenu()}>
          Doughnuts & SweetRolls
        </button>
        <button className={mm} onClick={() => getMilkMenu()}>
          Brownies, Cookies, & Bars
        </button>
        <button className={cm} onClick={() => getCustomMenu()}>
          Sandwhiches
        </button>
      </div>
    );
  };

  switch (category) {
    case "DrinksTab":
      tab = <DrinksTab />;
      break;
    case "FoodTab":
      tab = <FoodTab />;
      break;
    default:
      tab = <DrinksTab />;
      break;
  }
  return <>{tab}</>;
};
