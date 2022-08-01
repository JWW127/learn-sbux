import {
  YellowBtn,
  SkyBtn,
  OffBtnComponent,
  BlackBtn,
  GreenBtn,
  LightAmberBtn,
  PurpleBtn,
} from "./MenuButtons";

export const OtherMenu = () => {
  return (
    <div className="h-full flex flex-wrap basis-[85%] bg-white">
      {" "}
      <div className="flex flex-wrap justify-around py-1 text-sm gap-y-2">
        <LightAmberBtn label="Hot Choc"/>
        <LightAmberBtn label="W.Hot Choc"/>
        <SkyBtn label="Cold Milk" />
        <SkyBtn label="Steamed Milk" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <GreenBtn label="Syrup Creme"/>
        <GreenBtn label="Vanilla Creme"/>
        <GreenBtn label="Cinn Creme"/>
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <YellowBtn label="Apple Juice" />
        <YellowBtn label="Steamed APL" />
        <YellowBtn label="C.APL Spice" />
        <YellowBtn label="Lemonade" />
        <YellowBtn label="Match LMNDE" />
        <YellowBtn label="Ginger" />
        <PurpleBtn label="Very Berry"/>
        <PurpleBtn label="STRW Acai"/>
        <PurpleBtn label="Mango DRG"/>
        <PurpleBtn label="Kiwi"/>
        <LightAmberBtn label="Pine Matcha"/>
        <LightAmberBtn label="Guava PSN"/>
        <PurpleBtn label="VBERRY LMNDE"/>
        <PurpleBtn label="Acai LMNDE"/>
        <PurpleBtn label="Mango LMNDE"/>
        <PurpleBtn label="Kiwi LMNDE"/>
        <OffBtnComponent label="" />
        <SkyBtn label="SPRKL WTR" />
        <PurpleBtn label="Violet"/>
        <PurpleBtn label="Pink"/>
        <PurpleBtn label="Dragon Drink"/>
        <PurpleBtn label="Star"/>
        <OffBtnComponent label="" />
        <SkyBtn label="Water" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <LightAmberBtn label="SC Hot Choc"/>
        <GreenBtn label="PMKN Creme"/>
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <BlackBtn label="Regional"/>
        <BlackBtn label="Seasonal"/>
      </div>
    </div>
  );
};

