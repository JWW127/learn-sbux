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
  const getBulkMenu = useStore((state) => state.bulkMenu)
  const getNewsMenu = useStore((state) => state.newspaperMenu)
  const getDonationsMenu = useStore((state) => state.donationsMenu)
  const getTestMenu = useStore((state) => state.teaMenu)
  const getCoreCoffeeMenu = useStore((state) => state.coreCoffeeMenu)
  const getRtdMenu = useStore((state) => state.rtdMenu)

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

  const sm = menu === "syrupMenu" ? menuBtnActive : menuBtn;
  const mm = menu === "milkMenu" ? menuBtnActive : menuBtn;
  const cm = menu === "customMenu" ? menuBtnActive : menuBtn;
  const mu = menu === "muffinMenu" ? menuBtnActive : menuBtn;
  const ca = menu === "cakesMenu" ? menuBtnActive : menuBtn;
  const br = menu === "breadMenu" ? menuBtnActive : menuBtn;
  const dn = menu === "doughnutsMenu" ? menuBtnActive : menuBtn;
  const bw = menu === "browniesMenu" ? menuBtnActive : menuBtn;
  const sd = menu === "sandwichMenu" ? menuBtnActive : menuBtn;
  const ly = menu === "loyaltyMenu" ? menuBtnActive : menuBtn;
  const cc = menu === "coreCoffeeMenu" ? menuBtnActive : menuBtn;

  const DrinksTab = () => {
    return (
      <div className="bg-neutral-500 basis-[15%] flex flex-col gap-1 pr-4">
        <button type="button" className={dsm} onClick={() => getDrinkMenu()}>
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
              <div className="h-6 text-center border-2 border-gray-600 rounded-sm w-18">
                {drink.size?.slice(0, 2)}
              </div>
            </li>
          </ul>
        </button>
        <button type="button" className={sm} onClick={() => getSyrupMenu()}>
          <ul className="flex flex-col items-center justify-center w-20 h-full p-4">
            <li className="flex flex-col italic text-center">
              Syrup
              <div className="h-6 border-2 border-gray-600 rounded-sm w-18"></div>
            </li>
          </ul>
        </button>
        <button type="button" className={mm} onClick={() => getMilkMenu()}>
          <ul className="flex flex-col items-center justify-center w-20 h-full p-4">
            <li className="flex flex-col italic text-center">
              Milks
              <div className="h-6 border-2 border-gray-600 rounded-sm w-18"></div>
            </li>
          </ul>
        </button>
        <button type="button" className={cm} onClick={() => getCustomMenu()}>
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
        <button type="button" className={mu} onClick={() => getMuffinMenu()}>
          Muffins & Scones
        </button>
        <button type="button" className={ca} onClick={() => getCakesMenu()}>
          Loaves & Cakes
        </button>
        <button type="button" className={br} onClick={() => getBreadMenu()}>
          Bagels & Bread
        </button>
        <button type="button" className={dn} onClick={() => getDoughnutsMenu()}>
          Doughnuts & SweetRolls
        </button>
        <button type="button" className={bw} onClick={() => getBrowniesMenu()}>
          Brownies, Cookies, & Bars
        </button>
        <button type="button" className={sd} onClick={() => getSandwichMenu()}>
          Breakfast Sandwiches
        </button>
      </div>
    );
  };

  const RtdTab = () => {
    return (
      <div className="bg-neutral-500 basis-[15%] flex flex-col gap-1 pr-4 pb-4">
        <button type="button" className={menu === "rtdMenu" ? menuBtnActive : menuBtn} onClick={() => getRtdMenu()}>
          Case Items
        </button>
      </div>
    );
  };

  const BeansTab = () => {
    return (
      <div className="bg-neutral-500 basis-[15%] flex flex-col gap-1 pr-4 pb-4">
        <button type="button" className={cc} onClick={() => getCoreCoffeeMenu()}>
          Caf
        </button>
        <button type="button" className={ca} onClick={() => getCakesMenu()}>
          Decaf
        </button>
        <button type="button" className={br} onClick={() => getBreadMenu()}>
          Reserve
        </button>
        <button type="button" className={dn} onClick={() => getDoughnutsMenu()}>
          Pre-Ground
        </button>
      </div>
    );
  };

  const MiscTab = () => {
    return (
      <div className="bg-neutral-500 basis-[15%] flex flex-col gap-1 pr-4 pb-4">
        <button type="button" className={ly} onClick={() => getLoyaltyMenu()}>
         Loyalty Card
        </button>
        <button type="button" className={ca} onClick={() => getBulkMenu()}>
          Bulk
        </button>
        <button type="button" className={br} onClick={() => getNewsMenu()}>
          Newspapers
        </button>
        <button type="button" className={dn} onClick={() => getDonationsMenu()}>
          Donations
        </button>
        <button type="button" className={bw} onClick={() => getTestMenu()}>
          Non-Drink Test
        </button>
        <button type="button" className={sd} onClick={() => getTestMenu()}>
          Test Items
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
    default:
      tab = <DrinksTab />;
      break;
  }
  return <>{tab}</>;
};
