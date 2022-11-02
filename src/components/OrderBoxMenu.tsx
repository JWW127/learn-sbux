import { RiLock2Fill } from "react-icons/ri";

const OrderBoxMenu = () => {
  return (
    <div className="flex h-2/5 flex-wrap bg-neutral-600 pb-1 font-semibold">
      <div className="flex h-full basis-full flex-wrap pt-2">
        <button
          type="button"
          className="h-1/6 w-[6vw] basis-1/5 rounded-[50%] bg-orange-300 p-1 text-sm shadow-inner shadow-lg shadow-stone-200 active:bg-green-700 active:shadow-stone-900 "
        >
          Quantity
        </button>
        <div className="basis-4/5 text-right text-white">
          <ul className="list-none">
            <li>Subtotal:{false ? `subtotal` : `\u00A0  $0.00`}</li>
            <li>Discounts:{false ? `subtotal` : `\u00A0  $0.00`}</li>
            <li>Tax:{false ? `subtotal` : `\u00A0  $0.00`}</li>
          </ul>
        </div>
        <div className="basis-3/4 self-center pr-4 text-right text-3xl text-white">
          <p>Total Due:</p>
        </div>
        <button className="mb-1 h-[25%] w-[6vw] basis-1/4 rounded-md border-2 border-neutral-900 bg-gradient-to-b from-neutral-500 to-neutral-800 text-white drop-shadow-xl active:from-neutral-600 active:to-neutral-800">
          {false ? `total` : `$0.00`}
        </button>
        <div className="flex h-1/2 basis-full flex-wrap justify-between gap-6 pt-2">
          <div className="flex basis-full justify-between">
            {" "}
            <button
              type="button"
              className="w-[10vw] rounded-md bg-red-500 text-white shadow-inner shadow-stone-200 drop-shadow-xl active:bg-red-600 active:shadow-stone-500"
            >
              void item
            </button>
            <button
              type="button"
              className="w-[10vw] rounded-md bg-sky-100 shadow-inner shadow-stone-100 drop-shadow-xl active:bg-sky-200 active:shadow-stone-500"
            >
              For here
            </button>
            <button
              type="button"
              className="w-[10vw] rounded-md bg-green-200 shadow-inner shadow-stone-100 drop-shadow-xl active:bg-green-300 active:shadow-stone-500"
            >
              Discount
            </button>
          </div>
          <div className="flex basis-full justify-between">
            <button
              type="button"
              className="mx-[3vw] flex w-[4vw] items-center justify-center rounded-[50%] bg-gradient-to-r from-red-600 via-red-300 to-red-600 shadow-inner shadow-stone-200 drop-shadow-xl active:bg-gradient-to-b active:shadow-stone-500"
            >
              <RiLock2Fill className="text-3xl" />
            </button>
            <button
              type="button"
              className="w-[10vw] rounded-md bg-sky-100 shadow-inner shadow-stone-200 drop-shadow-xl active:bg-sky-200 active:shadow-stone-500"
            >
              To Go
            </button>
            <button
              type="button"
              className="w-[10vw] rounded-md bg-green-600 text-white shadow-inner shadow-stone-200 drop-shadow-xl active:bg-green-700 active:shadow-stone-500"
            >
              Find Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBoxMenu;
