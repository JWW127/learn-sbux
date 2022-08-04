import { useStore } from "./../lib/store";
export const PosTopNav = () => {
  const drinkCategory = useStore((state) => state.drinkCategory)
  const foodCategory = useStore((state) => state.foodCategory)
  const miscCategory = useStore((state) => state.miscCategory)
  const beansCategory = useStore((state) => state.beansCategory)
  const rtdCategory = useStore((state) => state.rtdCategory)
  const category = useStore((state) => state.category)

  const darkTopBtns = "w-[10vw] h-[80%] shadow-inner shadow-lg shadow-stone-200  bg-stone-800 active:bg-stone-900 active:shadow-stone-900 rounded-xl text-white"
  const greenTopBtns = "w-[12vw] h-[70%]  shadow-inner shadow-gray-200 drop-shadow-xl bg-green-600 active:bg-stone-300 active:shadow-gray-900 rounded-[50%]"
  const greenTopBtnsActive = "w-[12vw] h-[70%]  shadow-inner shadow-gray-200 drop-shadow-xl bg-stone-300 active:bg-stone-300 active:shadow-gray-900 rounded-[50%]"

  return (
    <div className="h-[10vh] basis-full bg-neutral-500 flex justify-around items-center text-lg">
      <button className={darkTopBtns}>
        Order
      </button>
      <button className={darkTopBtns}>
        Tender
      </button>
      <button className={darkTopBtns}>
        Functions
      </button>
      <button className={category === "MiscTab" ? greenTopBtnsActive : greenTopBtns} onClick={() => miscCategory()}>
        Misc
      </button>
      <button className={category === "BeansTab" ? greenTopBtnsActive : greenTopBtns} onClick={() => beansCategory()}>
        Beans
      </button>
      <button className={category === "RtdTab" ? greenTopBtnsActive : greenTopBtns} onClick={() => rtdCategory()}>
        RTD&E
      </button>
      <button className={category === "FoodTab" ? greenTopBtnsActive : greenTopBtns} onClick={() => foodCategory()}>
        Food
      </button>
      <button className={category === "DrinksTab" ? greenTopBtnsActive : greenTopBtns} onClick={() => drinkCategory()}>
        Drink
      </button>
    </div>
  );
};
