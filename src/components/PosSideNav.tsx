import { useStore } from "./../lib/store";

export const PosSideNav = () => {
  const menu = useStore((state) => state.menu);

  const getDrinkMenu = useStore((state) => state.drinkSizeMenu);
  const getSyrupMenu = useStore((state) => state.syrupMenu);
  const getMilkMenu = useStore((state) => state.milkMenu);
  const getCustomMenu = useStore((state) => state.customMenu);

  const dsm =
    menu === "drinkSizeMenu"
      ? "flex flex-col items-center italic shadow-md rounded-tr-xl bg-stone-300 active:bg-stone-200 rounded-br-xl basis-2/5"
      : "flex flex-col items-center italic shadow-md rounded-tr-xl bg-stone-400 active:bg-stone-200 rounded-br-xl basis-2/5";

  const sm =
    menu === "syrupMenu"
      ? "flex flex-col items-center justify-center italic shadow-md rounded-tr-xl bg-stone-300 active:bg-stone-200 rounded-br-xl basis-1/6"
      : "flex flex-col items-center justify-center italic shadow-md rounded-tr-xl bg-stone-400 active:bg-stone-200 rounded-br-xl basis-1/6";

  const mm =
    menu === "milkMenu"
      ? "flex flex-col items-center justify-center italic shadow-md rounded-tr-xl bg-stone-300 active:bg-stone-200 rounded-br-xl basis-1/6"
      : "flex flex-col items-center justify-center italic shadow-md rounded-tr-xl bg-stone-400 active:bg-stone-200 rounded-br-xl basis-1/6"

      const cm =
      menu === "customMenu"
  ? "flex flex-col items-center justify-center italic shadow-md rounded-tr-xl bg-stone-300 active:bg-stone-200 rounded-br-xl basis-1/6"
      : "flex flex-col items-center justify-center italic shadow-md rounded-tr-xl bg-stone-400 active:bg-stone-200 rounded-br-xl basis-1/6"

  return (
    <div className="bg-stone-500 basis-[15%] flex flex-col gap-1 pr-4">
      <button className={dsm} onClick={() => getDrinkMenu()}>
        <ul className="flex flex-col items-center justify-between w-20 h-full p-4">
          <li className="flex flex-wrap items-center justify-around w-20 italic text-md font-ultralight basis-1/5">
            <div className="w-4 h-4 border-2 border-gray-600"></div>Iced
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
            <div className="h-6 text-center border-2 border-gray-600 rounded-sm w-18"></div>
          </li>
        </ul>
      </button>
      <button className={sm} onClick={() => getSyrupMenu()}>
        Syrup
        <div className="w-2/5 h-6 border-2 border-gray-600 rounded-sm"></div>
      </button>
      <button
        className={mm}
        onClick={() => getMilkMenu()}
      >
        Milk
        <div className="w-2/5 h-6 border-2 border-gray-600 rounded-sm"></div>
      </button>
      <button
        className={cm}
        onClick={() => getCustomMenu()}
      >
        Custom
        <div className="w-2/5 h-6 border-2 border-gray-600 rounded-sm"></div>
      </button>
    </div>
  );
};
