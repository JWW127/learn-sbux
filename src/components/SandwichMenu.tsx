import {
  BlackBtn,
  YellowBtn,
  OffBtnComponent,
  OrangeBtn,
  RoseBtn,
  PurpleBtn,
  LimeBtn,
  GreenBtn,
  BlueBtn,
} from "./MenuButtons";

const SandwichMenu = () => {
  return (
    <div className="flex h-full basis-[85%] flex-wrap bg-white">
      <div className="flex w-full flex-wrap justify-around gap-x-1 gap-y-4 py-2 text-sm">
        <YellowBtn label="CC Cookie" />
        <YellowBtn label="CC Cookie" />
        <YellowBtn label="CC Cookie" />
        <YellowBtn label="CC Cookie" />
        <OffBtnComponent label="" />
        <YellowBtn label="CC Cookie" />
        <YellowBtn label="CC Cookie" />
        <YellowBtn label="CC Cookie" />
        <OffBtnComponent label="" />
        <RoseBtn label="Sriracha" />
        <PurpleBtn label="Spinach Wrap" />
        <PurpleBtn label="Spinach Wrap" />
        <PurpleBtn label="Spinach Wrap" />
        <OffBtnComponent label="" />
        <LimeBtn label="Avocado Sprd" />
        <GreenBtn label="BCN egg bite" />
        <GreenBtn label="BCN egg bite" />
        <GreenBtn label="BCN egg bite" />
        <OffBtnComponent label="" />
        <BlueBtn label="No Meat" />
        <OrangeBtn label="CL Oatmeal" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <BlueBtn label="No Cheese" />
        <OrangeBtn label="BS Oatmeal" />
        <OrangeBtn label="Oat Toppings" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <BlueBtn label="No Egg" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <BlackBtn label="Seasonal" />
      </div>
    </div>
  );
};

export default SandwichMenu;
