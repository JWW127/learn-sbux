import { useStore } from "../lib/store";

const OrderBox = () => {
  const { iced, size } = useStore((state) => state.currentDrink);

  return (
    <div className="flex h-3/5 basis-full flex-col overflow-y-scroll bg-yellow-100 pt-2 text-center">
      <ul className="list-none">
        <li>{iced}</li>
        <li>{size}</li>
      </ul>
    </div>
  );
};

export default OrderBox;
