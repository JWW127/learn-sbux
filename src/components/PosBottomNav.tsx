export const PosBottomNav = () => {
  return (
    <div className="flex flex-wrap h-1/5 bg-stone-500">
      <div className="flex justify-center h-14 basis-full">
        <div className="flex justify-center gap-2 basis-5/6">
          <button className="w-[8vw] bg-stone-400">Brewed</button>
          <button className="w-[8vw] bg-stone-400">Espresso</button>
          <button className="w-[8vw] bg-stone-400">Blended</button>
          <button className="w-[8vw] bg-stone-400">Tea</button>
          <button className="w-[8vw] bg-stone-400">Other</button>
        </div>
        <div className="flex flex-wrap justify-center basis-1/6">
          <p className="italic text-center basis-full text-stone-100">Drink</p>
          <div className="w-12 h-6 border-2 border-gray-900 bg-stone-400"></div>
        </div>
      </div>
      <div className="flex justify-around pt-1 h-1/2 basis-full">
              <button className="w-[10vw] shadow-inner shadow-lg shadow-stone-200  bg-zinc-700 active:bg-stone-900 active:shadow-stone-900 rounded-lg text-white">
          Item Availability
      </button>
              <button className="w-[10vw] shadow-inner shadow-lg shadow-stone-200  bg-zinc-700 active:bg-stone-900 active:shadow-stone-900 rounded-lg text-white">
          SKU Entry
      </button>
              <button className="w-[10vw] shadow-inner shadow-lg shadow-stone-200  bg-zinc-700 active:bg-stone-900 active:shadow-stone-900 rounded-lg text-white">
          Copy Drink
      </button>
              <button className="w-[10vw] shadow-inner shadow-lg shadow-stone-200  bg-zinc-700 active:bg-stone-900 active:shadow-stone-900 rounded-lg text-white">
          Add Shot
      </button>
              <button className="w-[10vw] shadow-inner shadow-lg shadow-stone-200  bg-zinc-700 active:bg-stone-900 active:shadow-stone-900 rounded-lg text-white">
          Ask Me
      </button>
              <button className="w-[10vw] shadow-inner shadow-lg shadow-stone-200  bg-zinc-700 active:bg-stone-900 active:shadow-stone-900 rounded-lg text-white">
          Next Drink
      </button>

      </div>
    </div>
  );
};
