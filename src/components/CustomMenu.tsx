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
    <div className="h-full basis-[85%] p-1 py-2 gap-y-1 bg-white flex flex-wrap justify-around">
      <BlackBtn label="No" />
      <BlackBtn label="No" />
      <OffBtnComponent label="" />
      <OffBtnComponent label="" />
      <BlackBtn label="No" />
      <BlackBtn label="No" />
      <BlueBtn label="Ice" />
      <BlueBtn label="Water" />
      <BlueBtn label="W.C" />
      <BlueBtn label="Vanilla S.C" />
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
      <PurpleBtn label="Vanilla Bean" />
      <RoseBtn label="Matcha" />
      <GreenBtn label="Mocha Driz" />
      <GreenBtn label="Caramel Driz" />
      <GreenBtn label="No Topping" />
      <GreenBtn label="Coconut Flake" />
      <PurpleBtn label="Blueberries" />
      <OffBtnComponent label="" />
      <OrangeBtn label="BlckTea Base" />
      <OrangeBtn label="GrnTea Base" />
      <OrangeBtn label="Passion Base" />
      <OrangeBtn label="V.Brry Base" />
      <OrangeBtn label="Acai Base" />
      <OrangeBtn label="Dragon Base" />
      <BlueBtn label="Foam" />
      <BlueBtn label="With Room" />
      <BlueBtn label="Cold Foam" />
      <BlueBtn label="VSC C.Foam" />
      <OrangeBtn label="Kiwi Base" />
      <YellowBtn label="Lemonade" />
      <GreenBtn label="Extra Hot" />
      <GreenBtn label="Warm" />
      <GreenBtn label="Wet" />
      <GreenBtn label="Dry" />
      <BlackBtn label="Custom" />
      <BlackBtn label="More Custom" />
    </div>
  );
};

export default CustomMenu
