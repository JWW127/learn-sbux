import {
  PurpleBtn,
  YellowBtn,
  OrangeBtn,
  RoseBtn,
  SkyBtn,
  LightAmberBtn,
  OffBtnComponent,
  BlackBtn,
} from "./MenuButtons";

const EspMenu = () => {
  return (
    <div className="flex h-full basis-[85%] flex-wrap bg-white">
      {" "}
      <div className="flex flex-wrap justify-around gap-x-1 gap-y-4 py-2 text-sm">
        <PurpleBtn label="Americano" />
        <PurpleBtn label="Espress" />
        <PurpleBtn label="EspMacchiato" />
        <RoseBtn label="Con Panna" />
        <RoseBtn label="DoubleShot" />
        <YellowBtn label="Latte" />
        <YellowBtn label="Cinn Dolce" />
        <LightAmberBtn label="Cappuccino" />
        <SkyBtn label="Flat White" />
        <SkyBtn label="AH F.White" />
        <YellowBtn label="Skinny Latte" />
        <YellowBtn label="SKN CDolce" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <YellowBtn label="CC Cascara" />
        <PurpleBtn label="Caramel Mach" />
        <PurpleBtn label="Cocoa Cloud" />
        <PurpleBtn label="Caramel Cloud" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <PurpleBtn label="SKN CM" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OrangeBtn label="Mocha" />
        <OrangeBtn label="WC Mocha" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <YellowBtn label="PMKN Spice" />
        <OrangeBtn label="Slt Car Mocha" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <BlackBtn label="More" />
      </div>
    </div>
  );
};

export default EspMenu;
