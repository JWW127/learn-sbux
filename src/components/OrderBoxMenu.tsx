import { RiLock2Fill } from "react-icons/ri";

export const OrderBoxMenu = () => {
  return (
    <div className="flex flex-wrap font-semibold bg-neutral-600 h-2/5">
      <div className="flex flex-wrap h-full pt-2 basis-full">
        <button className="w-[6vw] basis-1/5 h-1/6 p-1 text-sm shadow-inner shadow-lg shadow-stone-200 bg-orange-300 active:bg-green-700 active:shadow-stone-900 rounded-[50%] ">
          Quantity
        </button>
        <div className="text-right text-white basis-4/5">
          <ul className="list-none">
            <li>Subtotal:{false ? `subtotal` : `\u00A0  $0.00`}</li>
            <li>Discounts:{false ? `subtotal` : `\u00A0  $0.00`}</li>
            <li>Tax:{false ? `subtotal` : `\u00A0  $0.00`}</li>
          </ul>
        </div>
        <div className="self-center pr-2 text-2xl text-right text-white basis-3/4">
          <p>Total Due:</p>
        </div>
        <button className="basis-1/4 w-[6vw] bg-gradient-to-b from-neutral-500 to-neutral-800 rounded-md text-white drop-shadow-xl active:from-neutral-600 active:to-neutral-800 border-2 border-neutral-900">
          {false ? `total` : `$0.00`}
        </button>
        <div className="flex flex-wrap justify-between pt-2 gap-6 basis-full h-1/2">
          <div className="flex justify-between basis-full">
            {" "}
            <button className="w-[10vw] bg-red-500 rounded-md text-white active:bg-red-600 drop-shadow-xl shadow-stone-200 shadow-inner active:shadow-stone-500">
              void item
            </button>
            <button className="w-[10vw] rounded-md bg-sky-100 drop-shadow-xl shadow-stone-100 shadow-inner active:bg-sky-200 active:shadow-stone-500">
              For here
            </button>
            <button className="w-[10vw] rounded-md bg-green-200 drop-shadow-xl shadow-stone-100 shadow-inner active:bg-green-300 active:shadow-stone-500">
              Discount
            </button>
          </div>
          <div className="flex justify-between basis-full">
            <button className="w-[4vw] mx-[3vw] bg-gradient-to-r from-red-600 via-red-300 to-red-600 flex justify-center items-center rounded-[50%] shadow-inner drop-shadow-xl shadow-stone-200 active:bg-gradient-to-b active:shadow-stone-500">
              <RiLock2Fill className="text-3xl" />
            </button>
            <button className="w-[10vw] rounded-md bg-sky-100 drop-shadow-xl shadow-stone-200 shadow-inner active:bg-sky-200 active:shadow-stone-500">
              To Go
            </button>
            <button className="w-[10vw] text-white rounded-md bg-green-600 drop-shadow-xl shadow-stone-200 shadow-inner active:bg-green-700 active:shadow-stone-500">
              Find Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
