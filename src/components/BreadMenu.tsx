import { SkyBtn, OffBtnComponent, PurpleBtn, OrangeBtn } from "./MenuButtons";

const BreadMenu = () => {
  return (
    <div className="flex h-full basis-[85%] flex-wrap bg-white">
      <div className="flex w-full flex-wrap justify-around gap-x-1 gap-y-4 py-2 text-sm">
        <OrangeBtn label="Plain Bagel" />
        <OrangeBtn label="Plain Bagel" />
        <OrangeBtn label="Plain Bagel" />
        <OrangeBtn label="Plain Bagel" />
        <OrangeBtn label="Plain Bagel" />
        <OrangeBtn label="Plain Bagel" />
        <OrangeBtn label="Plain Bagel" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OrangeBtn label="Plain Bagel" />
        <SkyBtn label="Coffee Cake" />
        <SkyBtn label="Coffee Cake" />
        <SkyBtn label="Coffee Cake" />
        <SkyBtn label="Coffee Cake" />
        <PurpleBtn label="Birthday Pop" />
        <div className="basis-full"></div>
        <div className="basis-full"></div>
        <OrangeBtn label="Plain Bagel" />
        <OrangeBtn label="Plain Bagel" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
      </div>
    </div>
  );
};

export default BreadMenu;
