import { useStore } from "./../lib/store";

export const PosBottomNav = () => {
  const getBrewMenu = useStore((state) => state.brewMenu);
  const getBlendedMenu = useStore((state) => state.blendedMenu);
  const getEspMenu = useStore((state) => state.espMenu);
  const getOtherMenu = useStore((state) => state.otherMenu);
  const getTeaMenu = useStore((state) => state.teaMenu);

  const btnDark =
    "w-[10vw] shadow-inner shadow-lg shadow-stone-200  bg-zinc-700 active:bg-stone-900 active:shadow-stone-900 rounded-lg text-white";

  const bottomTabs = "w-[8vw] bg-stone-400 active:bg-stone-200";

  return (
    <div className="flex flex-wrap pb-2 h-1/5 bg-stone-500">
      <div className="flex justify-center h-14 basis-full">
        <div className="flex justify-center gap-2 basis-5/6">
          <button className={bottomTabs} onClick={() => getBrewMenu()}>
            Brewed
          </button>
          <button className={bottomTabs} onClick={() => getEspMenu()}>
            Espresso
          </button>
          <button className={bottomTabs} onClick={() => getBlendedMenu()}>
            Blended
          </button>
          <button className={bottomTabs} onClick={() => getTeaMenu()}>
            Tea
          </button>
          <button className={bottomTabs} onClick={() => getOtherMenu()}>
            Other
          </button>
        </div>
        <div className="flex flex-wrap justify-center basis-1/6">
          <p className="italic text-center basis-full text-stone-100">Drink</p>
          <div className="w-12 h-6 border-2 border-gray-900 bg-stone-400"></div>
        </div>
      </div>
      <div className="flex justify-around pt-1 h-1/2 basis-full">
        <button className={btnDark}>Item Availability</button>
        <button className={btnDark}>SKU Entry</button>
        <button className={btnDark}>Copy Drink</button>
        <button className={btnDark}>Add Shot</button>
        <button className={btnDark}>Ask Me</button>
        <button className={btnDark}>Next Drink</button>
      </div>
    </div>
  );
};
