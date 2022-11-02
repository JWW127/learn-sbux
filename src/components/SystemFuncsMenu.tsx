import { BlueBtn, GreenBtn, OffBtnComponent, PurpleBtn } from "./MenuButtons";

const SystemFuncsMenu = () => {
  return (
    <div className="flex h-full basis-[85%] flex-wrap bg-white">
      <div className="text-md flex w-full flex-wrap justify-around gap-x-2 gap-y-2 px-20 py-4">
        <h3 className="mb-0 h-[4vh] basis-full bg-gray-300 text-center text-3xl">
          ORDERS
        </h3>
        <PurpleBtn label="Print" />
        <PurpleBtn label="Print" />
        <PurpleBtn label="Print" />
        <PurpleBtn label="Print" />
        <OffBtnComponent label="" />
        <PurpleBtn label="Print" />
        <PurpleBtn label="Print" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <h3 className="h-[4vh] basis-full bg-gray-300 text-center text-3xl">
          CASH
        </h3>
        <GreenBtn label="Assign Cash Drawer" />
        <GreenBtn label="Reload Card" />
        <div className="basis-full"></div>
        <GreenBtn label="Paid In" />
        <GreenBtn label="Paid Out" />
        <GreenBtn label="Starbucks Card Cash" />
      </div>
    </div>
  );
};

export default SystemFuncsMenu;
