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
        <TealBtn label="Iced" />
        <OffBtnComponent label="" />
        <YellowBtn label="Blonde" />
        <OrangeBtn label="Decaf" />
        <OrangeBtn label="1/2 Decaf" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OrangeBtn label="2/3 Decaf" />
        <OrangeBtn label="1/3 Decaf" />
      </div>
      <div className="flex flex-wrap justify-around gap-y-6 gap-x-1 basis-3/5">
        <PurpleBtn label="Single" />
        <PurpleBtn label="Double" />
        <PurpleBtn label="Triple" />
        <PurpleBtn label="Quad" />
        <PurpleBtn label="More Shots" />
        <RoseBtn label="Add Shot" />
        <RoseBtn label="Affogato" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OrangeBtn label="Frap Roast" />
        <YellowBtn label="Kids" />
        <OffBtnComponent label="" />
        <GreenBtn label="Updosed" />
        <GreenBtn label="Long Shot" />
        <GreenBtn label="Ristretto" />
        <YellowBtn label="Short" />
        <YellowBtn label="Tall" />
        <YellowBtn label="Grande" />
        <YellowBtn label="Venti" />
        <YellowBtn label="Trenta" />
      </div>
    </div>
  );
};
