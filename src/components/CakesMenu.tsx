import {
  SkyBtn,
  OffBtnComponent,
  BlackBtn,
  YellowBtn,
  PurpleBtn,
} from "./MenuButtons";

const MuffinMenu = () => {
  return (
    <div className="flex h-full basis-[85%] flex-wrap bg-white">
      <div className="flex w-full flex-wrap justify-around gap-x-1 gap-y-4 py-2 text-sm">
        <YellowBtn label="Banana Nut" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <YellowBtn label="S.Potato CC" />
        <YellowBtn label="Lemon Loaf" />
        <YellowBtn label="Pumpkin Bread" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <SkyBtn label="Coffee Cake" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <PurpleBtn label="Hawaii BB" />
        <PurpleBtn label="Birthday Pop" />
        <PurpleBtn label="Choc Pop" />
        <PurpleBtn label="Cookie Pop" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <div className="basis-full"></div>
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <BlackBtn label="Seasonal" />
      </div>
    </div>
  );
};

export default MuffinMenu;
