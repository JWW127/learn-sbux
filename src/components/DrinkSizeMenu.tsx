export const DrinkSizeMenu = () => {
  return (
    <div className="h-full basis-[85%] py-4 pr-4 bg-white flex flex-col">
      <div className="flex flex-wrap justify-around pt-4 pb-10 gap-y-8 gap-x-1 basis-2/5">
        <button className="bg-teal-500 border-2 border-gray-900 rounded-lg shadow-lg shadow-inner shadow-stone-200 active:shadow-stone-900 active:bg-teal-600 basis-1/6">btn</button>
        <button disabled={true} className="border-gray-900 rounded-lg basis-1/6"></button>
        <button className="bg-yellow-200 border-2 border-gray-900 rounded-lg shadow-lg shadow-inner shadow-stone-200 active:shadow-stone-900 active:bg-yellow-400 basis-1/6">btn</button>
        <button className="bg-orange-200 border-2 border-gray-900 rounded-lg basis-1/6">btn</button>
        <button className="bg-orange-200 border-2 border-gray-900 rounded-lg basis-1/6">btn</button>
        <button disabled={true} className="border-gray-900 rounded-lg basis-1/6"></button>
        <button disabled={true} className="border-gray-900 rounded-lg basis-1/6"></button>
        <button disabled={true} className="border-gray-900 rounded-lg basis-1/6"></button>
        <button className="bg-orange-200 border-2 border-gray-900 rounded-lg basis-1/6">btn</button>
        <button className="bg-orange-200 border-2 border-gray-900 rounded-lg basis-1/6">btn</button>
      </div>
      <div className="border-2 border-orange-300 basis-3/5"></div>
    </div>
  );
};
