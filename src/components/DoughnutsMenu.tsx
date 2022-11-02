import {
  OffBtnComponent,
  YellowBtn,
  PurpleBtn,
  OrangeBtn,
} from "./MenuButtons";

const DoughnutsMenu = () => {
  return (
    <div className="flex h-full basis-[85%] flex-wrap bg-white">
      <div className="flex w-full flex-wrap justify-around gap-4 py-2 pl-12 text-sm">
        <OrangeBtn label="Old Fashioned" />
        <PurpleBtn label="Blueberry SWL" />
        <PurpleBtn label="Raspberry Walnut" />
        <PurpleBtn label="DRK FDG BRWN" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OrangeBtn label="Chsy Croissant" />
        <OrangeBtn label="Cheddar Bites" />
        <OrangeBtn label="Broc Ricotta" />
        <OffBtnComponent label="" />
        <PurpleBtn label="Morning Bun" />
        <OrangeBtn label="Cin Raisin" />
        <OrangeBtn label="Everything BGL" />
        <OrangeBtn label="Evg Vg BGL" />
        <OrangeBtn label="Potato Brkst" />
        <PurpleBtn label="Cheese Dan" />
        <YellowBtn label="Chickpea BT" />
        <YellowBtn label="Zucc Wrap" />
        <YellowBtn label="Gouda Wrap" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <YellowBtn label="Turkey Prov" />
        <YellowBtn label="Moz Pesto" />
        <YellowBtn label="Chorizo Wrap" />
        <OffBtnComponent label="" />
        <div className="basis-full"></div>
      </div>
    </div>
  );
};

export default DoughnutsMenu;
