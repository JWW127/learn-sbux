export const PosTopNav = () => {
  return (
    <div className="h-[10vh] basis-full bg-stone-500 flex justify-around items-center text-lg">
      <button className="w-[10vw] h-[80%] shadow-inner shadow-lg shadow-stone-900  bg-stone-800 active:bg-stone-900 active:shadow-stone-400 rounded-xl text-white">
        Order
      </button>
      <button className="w-[10vw] h-[80%] shadow-inner shadow-lg shadow-stone-900  bg-stone-800 active:bg-stone-900 active:shadow-stone-400 rounded-xl text-white">
        Tender
      </button>
      <button className="w-[10vw] h-[80%] shadow-inner shadow-lg shadow-stone-900  bg-stone-800 active:bg-stone-900 active:shadow-stone-400 rounded-xl text-white">
        Functions
      </button>
      <button className="w-[12vw] h-[70%]  shadow-inner shadow-gray-800 drop-shadow-xl bg-green-600 active:bg-green-700 active:shadow-gray-900 rounded-[50%]">
        Misc
      </button>
      <button className="w-[12vw] h-[70%]  shadow-inner shadow-gray-800 drop-shadow-xl bg-green-600 active:bg-green-700 active:shadow-gray-900 rounded-[50%]">
        Beans
      </button>
      <button className="w-[12vw] h-[70%]  shadow-inner shadow-gray-800 drop-shadow-xl bg-green-600 active:bg-green-700 active:shadow-gray-900 rounded-[50%]">
        RTD&E
      </button>
      <button className="w-[12vw] h-[70%]  shadow-inner shadow-gray-800 drop-shadow-xl bg-green-600 active:bg-green-700 active:shadow-gray-900 rounded-[50%]">
        Food
      </button>
      <button className="w-[12vw] h-[70%]  shadow-inner shadow-gray-800 drop-shadow-xl bg-stone-200 active:bg-stone-400 active:shadow-gray-900 rounded-[50%]">
        Drink
      </button>
    </div>
  );
};
