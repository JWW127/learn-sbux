import {
  SkyBtn,
  LightAmberBtn,
  OffBtnComponent,
  BlackBtn,
} from "./MenuButtons";

 const MuffinMenu = () => {
  return (
    <div className="h-full flex flex-wrap basis-[85%] bg-white">
          <div className="flex flex-wrap justify-around w-full py-2 text-sm gap-x-1 gap-y-4">
        <SkyBtn label="BB Muffin" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <div className="basis-full"></div>
        <div className="basis-full"></div>
        <LightAmberBtn label="BB Scone"/>
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <LightAmberBtn label="Vanilla Scone"/>
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
        <BlackBtn label="Seasonal"/>
      </div>
    </div>
  );
};

export default MuffinMenu
