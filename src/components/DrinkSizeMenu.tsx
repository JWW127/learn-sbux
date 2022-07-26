import {
  GreenBtn,
  OffBtnComponent,
  OrangeBtn,
  PurpleBtn,
  RoseBtn,
  TealBtn,
  YellowBtn,
} from "./MenuButtons";

export const DrinkSizeMenu = () => {
  return (
    <div className="h-full basis-[85%] py-4 pr-4 bg-white flex flex-col">
      <div className="flex flex-wrap justify-around pt-5 pb-14 gap-y-6 gap-x-1 basis-2/5">
        <TealBtn label="btn" />
        <OffBtnComponent label="" />
        <YellowBtn label="btn" />
        <OrangeBtn label="btn" />
        <OrangeBtn label="btn" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OrangeBtn label="btn" />
        <OrangeBtn label="btn" />
      </div>
      <div className="flex flex-wrap justify-around gap-y-6 gap-x-1 basis-3/5">
        <PurpleBtn label="btn" />
        <PurpleBtn label="btn" />
        <PurpleBtn label="btn" />
        <PurpleBtn label="btn" />
        <PurpleBtn label="btn" />
        <RoseBtn label="btn" />
        <RoseBtn label="btn" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OrangeBtn label="btn" />
        <YellowBtn label="btn" />
        <OffBtnComponent label="" />
        <GreenBtn label="btn" />
        <GreenBtn label="btn" />
        <GreenBtn label="btn" />
        <YellowBtn label="btn" />
        <YellowBtn label="btn" />
        <YellowBtn label="btn" />
        <YellowBtn label="btn" />
        <YellowBtn label="btn" />
      </div>
    </div>
  );
};
