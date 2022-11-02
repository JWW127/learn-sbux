import {
  YellowBtn,
  SkyBtn,
  OffBtnComponent,
  BlackBtn,
  GreenBtn,
  LightAmberBtn,
  PurpleBtn,
} from "./MenuButtons";

const OtherMenu = () => {
  return (
    <div className="flex h-full basis-[85%] flex-wrap bg-white">
      {" "}
      <div className="flex flex-wrap justify-around gap-y-2 py-2 text-sm">
        <LightAmberBtn label="Hot Choc" />
        <LightAmberBtn label="W.Hot Choc" />
        <SkyBtn label="Cold Milk" />
        <SkyBtn label="Steamed Milk" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <GreenBtn label="Syrup Creme" />
        <GreenBtn label="Vanilla CRM" />
        <GreenBtn label="Cinn Creme" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <YellowBtn label="Apple Juice" />
        <YellowBtn label="Steamed APL" />
        <YellowBtn label="C.APL Spice" />
        <YellowBtn label="Lemonade" />
        <YellowBtn label="Match LMNDE" />
        <YellowBtn label="Ginger" />
        <PurpleBtn label="Very Berry" />
        <PurpleBtn label="STRW Acai" />
        <PurpleBtn label="Mango DRG" />
        <PurpleBtn label="Kiwi" />
        <LightAmberBtn label="Pine Matcha" />
        <LightAmberBtn label="Guava PSN" />
        <PurpleBtn label="VBRY LMNDE" />
        <PurpleBtn label="Acai LMNDE" />
        <PurpleBtn label="MNGO LMNDE" />
        <PurpleBtn label="Kiwi LMNDE" />
        <OffBtnComponent label="" />
        <SkyBtn label="SPRKL WTR" />
        <PurpleBtn label="Violet" />
        <PurpleBtn label="Pink" />
        <PurpleBtn label="DRG Drink" />
        <PurpleBtn label="Star" />
        <OffBtnComponent label="" />
        <SkyBtn label="Water" />
        <LightAmberBtn label="SC Hot Choc" />
        <GreenBtn label="PMKN Creme" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <BlackBtn label="Regional" />
        <BlackBtn label="Seasonal" />
      </div>
    </div>
  );
};

export default OtherMenu;
