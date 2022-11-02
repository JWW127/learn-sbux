import {
  YellowBtn,
  SkyBtn,
  OffBtnComponent,
  BlackBtn,
  GreenBtn,
} from "./MenuButtons";

const TeaMenu = () => {
  return (
    <div className="flex h-full basis-[85%] flex-wrap bg-white">
      {" "}
      <div className="flex flex-wrap justify-around gap-x-1 gap-y-4 py-2 text-sm">
        <YellowBtn label="Chai" />
        <GreenBtn label="Matcha" />
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

export default TeaMenu;
