import {
  PurpleBtn,
  YellowBtn,
  OrangeBtn,
  RoseBtn,
  SkyBtn,
  LightAmberBtn,
  OffBtnComponent,
  BlackBtn,
  GreenBtn,
} from "./MenuButtons";

export const TeaMenu = () => {
  return (
    <div className="h-full flex flex-wrap basis-[85%] bg-white">
      {" "}
      <div className="flex flex-wrap justify-around py-1 text-sm gap-x-1 gap-y-4">
        <YellowBtn label="Chai" />
        <GreenBtn label="Matcha"/>
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <SkyBtn label="Black" />
        <YellowBtn label="BLK Lemonade" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <SkyBtn label="Green" />
        <YellowBtn label="GRN Lemonade" />
        <OffBtnComponent label="" />
        <SkyBtn label="Peach Green" />
        <YellowBtn label="PGRN LMNDE" />
        <SkyBtn label="Passion" />
        <YellowBtn label="PSN Lemonade" />
        <OffBtnComponent label="" />
        <SkyBtn label="Guava Black" />
        <YellowBtn label="GBLK LMNDE" />
        <SkyBtn label="Custom" />
        <YellowBtn label="Custom LMNDE" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <SkyBtn label="IceT Refill" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <BlackBtn label="Brewed" />
      </div>
    </div>
  );
};
