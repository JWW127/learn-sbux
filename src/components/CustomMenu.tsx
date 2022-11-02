import {
  YellowBtn,
  BlackBtn,
  BlueBtn,
  GreenBtn,
  OffBtnComponent,
  OrangeBtn,
  PurpleBtn,
  RoseBtn,
} from "./MenuButtons";

const CustomMenu = () => {
  return (
    <div className="flex h-full basis-[85%] flex-wrap justify-around bg-white sm:gap-y-0 sm:p-0 sm:py-0 sm:text-xs lg:gap-y-1 lg:p-1 lg:py-2">
      <BlackBtn label="No" />
      <BlackBtn label="No" />
      <OffBtnComponent label="" />
      <OffBtnComponent label="" />
      <BlackBtn label="No" />
      <BlackBtn label="No" />
      <BlueBtn label="Ice" />
      <BlueBtn label="Water" />
      <BlueBtn label="W.C" />
      <BlueBtn label="V.S.C" />
      <OrangeBtn label="Stevia" />
      <OrangeBtn label="Honey" />
      <OrangeBtn label="Agave" />
      <OrangeBtn label="Splenda" />
      <OrangeBtn label="Sugar" />
      <OrangeBtn label="SweetNLow" />
      <OrangeBtn label="Equal" />
      <OrangeBtn label="Raw Sugar" />
      <OffBtnComponent label="" />
      <PurpleBtn label="Banana" />
      <PurpleBtn label="STR Puree" />
      <PurpleBtn label="Frap Chips" />
      <PurpleBtn label="V.Bean" />
      <RoseBtn label="Matcha" />
      <GreenBtn label="Mocha Driz" />
      <GreenBtn label="Drizzle" />
      <GreenBtn label="No Topping" />
      <GreenBtn label="Coconut" />
      <PurpleBtn label="Bluebrry" />
      <OffBtnComponent label="" />
      <OrangeBtn label="B-Tea Base" />
      <OrangeBtn label="G-Tea Base" />
      <OrangeBtn label="P-Tea Base" />
      <OrangeBtn label="V.Brry Base" />
      <OrangeBtn label="Acai Base" />
      <OrangeBtn label="Drgn Base" />
      <BlueBtn label="Foam" />
      <BlueBtn label="With Room" />
      <BlueBtn label="Cold Foam" />
      <BlueBtn label="VSC C.Foam" />
      <OrangeBtn label="Kiwi Base" />
      <YellowBtn label="LMNDE" />
      <GreenBtn label="Extra Hot" />
      <GreenBtn label="Warm" />
      <GreenBtn label="Wet" />
      <GreenBtn label="Dry" />
      <BlackBtn label="Custom" />
      <BlackBtn label="Custom 2" />
    </div>
  );
};

export default CustomMenu;
