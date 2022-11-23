import {
  OffBtnComponent,
  OrangeBtn,
  YellowBtn,
  BlackBtn,
  BlueBtn,
  PurpleBtn,
  SkyBtn,
  LightAmberBtn,
} from "./MenuButtons";

const BrewMenu = () => {
  return (
    <div className="flex h-full basis-[85%] flex-wrap bg-white">
      <div className="flex flex-wrap justify-around py-2 gap-x-1 gap-y-4">
        <BlackBtn label="Clover" />
        <BlackBtn label="Reserve" />
        <BlackBtn label="Draft" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OrangeBtn label="Pour Over" />
        <PurpleBtn label="PO Dark" />
        <YellowBtn label="PO Blonde" />
        <BlueBtn label="PO Decaf" />
        <OffBtnComponent label="" />
        <BlueBtn label="Iced Coffee" />
        <BlueBtn label="IC w/Milk" />
        <BlueBtn label="Decaf I.C." />
        <BlueBtn label="DIC w/Milk" />
        <BlueBtn label="IC Refill" />
        <SkyBtn label="Cold Brew" />
        <SkyBtn label="CB w/Milk" />
        <SkyBtn label="VSC CB" />
        <SkyBtn label="CB C.Foam" />
        <SkyBtn label="SCC CB" />
        <SkyBtn label="CB CIN.ALM" />
        <SkyBtn label="CB D.Cocao" />
        <SkyBtn label="PMKN CB" />
        <OffBtnComponent label="" />
        <SkyBtn label="CB Refill" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OrangeBtn label="Caffe Misto" />
        <LightAmberBtn label="Pike" />
        <PurpleBtn label="Dark" />
        <YellowBtn label="Blonde" />
        <BlueBtn label="Decaf" />
        <LightAmberBtn label="Hot Refill" />
      </div>
    </div>
  );
};

export default BrewMenu;
