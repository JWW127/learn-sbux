import {
  BlackBtn,
  BlueBtn,
  OffBtnComponent,
  PurpleBtn,
  YellowBtn,
} from "./MenuButtons";

 const MilkMenu = () => {
  return (
    <div className="h-full basis-[85%] flex flex-wrap p-1 py-2 bg-white">
      <div className="flex flex-wrap justify-around gap-x-1 gap-y-4">
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <BlackBtn label="Extra" />
        <BlackBtn label="Light" />
        <BlueBtn label="Nonfat" />
        <BlueBtn label="1%" />
        <OffBtnComponent label="" />
        <BlueBtn label="w/Nonfat" />
        <BlueBtn label="W/1%" />
        <BlueBtn label="2%" />
        <BlueBtn label="Whole" />
        <OffBtnComponent label="" />
        <BlueBtn label="w/2%" />
        <BlueBtn label="w/Whole" />
        <YellowBtn label="Soy" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <YellowBtn label="w/Soy" />
        <OffBtnComponent label="" />
        <YellowBtn label="Coconut" />
        <YellowBtn label="Almond" />
        <OffBtnComponent label="" />
        <YellowBtn label="w/Coconut" />
        <YellowBtn label="w/Almond" />
        <PurpleBtn label="Half&Half" />
        <PurpleBtn label="Heavy Cream" />
        <OffBtnComponent label="" />
        <PurpleBtn label="w/Half&Half" />
        <PurpleBtn label="w/H.Cream" />
        <OffBtnComponent label="" />
        <PurpleBtn label="OatMilk" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
      </div>
    </div>
  );
};

export default MilkMenu
