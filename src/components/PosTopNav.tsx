import { useStore } from "./../lib/store";

const PosTopNav = () => {
  const drinkCategory = useStore((state) => state.drinkCategory);
  const foodCategory = useStore((state) => state.foodCategory);
  const miscCategory = useStore((state) => state.miscCategory);
  const beansCategory = useStore((state) => state.beansCategory);
  const rtdCategory = useStore((state) => state.rtdCategory);
  const funcsCategory = useStore((state) => state.funcsCategory);
  const category = useStore((state) => state.category);

  const darkTopBtns =
    "w-[10vw] h-[80%] shadow-inner shadow-lg shadow-stone-200  bg-stone-800 active:bg-stone-900 active:shadow-stone-900 rounded-xl text-white";
  const darkTopBtnsActive =
    "w-[10vw] h-[80%] shadow-inner shadow-lg shadow-stone-800  bg-stone-200 rounded-xl text-green-600";
  const greenTopBtns =
    "w-[12vw] h-[70%]  shadow-inner shadow-gray-200 drop-shadow-xl bg-green-600 active:bg-stone-300 active:shadow-gray-900 rounded-[50%]";
  const greenTopBtnsActive =
    "w-[12vw] h-[70%]  shadow-inner shadow-gray-200 drop-shadow-xl bg-stone-300 active:bg-stone-300 active:shadow-gray-900 rounded-[50%]";

  return (
    <div className="flex h-[10vh] basis-full items-center justify-around bg-neutral-500 text-lg">
      <button type="button" className={darkTopBtns}>
        Order
      </button>
      <button type="button" className={darkTopBtns}>
        Tender
      </button>
      <button
        type="button"
        className={category === "FuncsTab" ? darkTopBtnsActive : darkTopBtns}
        onClick={() => funcsCategory()}
      >
        Functions
      </button>
      <button
        type="button"
        className={category === "MiscTab" ? greenTopBtnsActive : greenTopBtns}
        onClick={() => miscCategory()}
      >
        Misc
      </button>
      <button
        type="button"
        className={category === "BeansTab" ? greenTopBtnsActive : greenTopBtns}
        onClick={() => beansCategory()}
      >
        Beans
      </button>
      <button
        type="button"
        className={category === "RtdTab" ? greenTopBtnsActive : greenTopBtns}
        onClick={() => rtdCategory()}
      >
        RTD&E
      </button>
      <button
        type="button"
        className={category === "FoodTab" ? greenTopBtnsActive : greenTopBtns}
        onClick={() => foodCategory()}
      >
        Food
      </button>
      <button
        type="button"
        className={category === "DrinksTab" ? greenTopBtnsActive : greenTopBtns}
        onClick={() => drinkCategory()}
      >
        Drink
      </button>
    </div>
  );
};

export default PosTopNav;
