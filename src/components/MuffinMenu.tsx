import {
  SkyBtn,
  LightAmberBtn,
  OffBtnComponent,
  BlackBtn,
} from "./MenuButtons";

const MuffinMenu = () => {
  return (
    <div className="flex h-full basis-[85%] flex-wrap bg-white">
      <div className="flex w-full flex-wrap justify-around gap-x-1 gap-y-4 py-2 text-sm">
        <SkyBtn label="BB Muffin" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <div className="basis-full"></div>
        <div className="basis-full"></div>
        <LightAmberBtn label="BB Scone" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <LightAmberBtn label="Vanilla Scone" />
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

export default MuffinMenu;
