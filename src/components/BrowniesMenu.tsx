import {
  BlackBtn,
  LightAmberBtn,
  OffBtnComponent,
  OrangeBtn,
} from "./MenuButtons";

const BrowniesMenu = () => {
  return (
    <div className="flex h-full basis-[85%] flex-wrap bg-white">
      <div className="flex w-full flex-wrap justify-around gap-x-1 gap-y-4 py-2 text-sm">
        <OrangeBtn label="CC Cookie" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OrangeBtn label="Confetti" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <div className="basis-full"></div>
        <div className="basis-full"></div>
        <LightAmberBtn label="Brownie" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <div className="basis-full"></div>
        <div className="basis-full"></div>
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <BlackBtn label="Seasonal" />
      </div>
    </div>
  );
};

export default BrowniesMenu;
