import { BlueBtn, GreenBtn, OffBtnComponent, PurpleBtn } from "./MenuButtons";



const SystemFuncsMenu = () => {
  return (
    <div className="h-full flex flex-wrap basis-[85%] bg-white">
      <div className="flex flex-wrap justify-around w-full px-20 py-4 text-md gap-x-2 gap-y-2">
        <h3 className="text-3xl text-center bg-gray-300 h-[4vh] basis-full mb-0">ORDERS</h3>
        <PurpleBtn label="Print" />
        <PurpleBtn label="Print" />
        <PurpleBtn label="Print" />
        <PurpleBtn label="Print" />
        <OffBtnComponent label=""/>
        <PurpleBtn label="Print" />
        <PurpleBtn label="Print" />
        <OffBtnComponent label=""/>
        <OffBtnComponent label=""/>
        <OffBtnComponent label=""/>
        <h3 className="text-3xl text-center bg-gray-300 h-[4vh] basis-full">CASH</h3>
        <GreenBtn label="Assign Cash Drawer"/>
        <GreenBtn label="Reload Card"/>
        <div className="basis-full"></div>
        <GreenBtn label="Paid In"/>
        <GreenBtn label="Paid Out"/>
        <GreenBtn label="Starbucks Card Cash"/>
      </div>
    </div>
  );
};

export default SystemFuncsMenu;

