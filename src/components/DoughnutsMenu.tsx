import {
  SkyBtn,
  OffBtnComponent,
  BlackBtn,
  YellowBtn,
  PurpleBtn,
  OrangeBtn,
} from "./MenuButtons";

 const DoughnutsMenu = () => {
  return (
    <div className="h-full flex flex-wrap basis-[85%] bg-white">
          <div className="flex flex-wrap justify-around w-full py-2 pl-12 text-sm gap-4">
        <OrangeBtn label="Old Fashioned"/>
        <PurpleBtn label="Blueberry SWL"/>
        <PurpleBtn label="Raspberry Walnut"/>
        <PurpleBtn label="DRK FDG BRWN"/>
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OrangeBtn label="Chsy Croissant"/>
        <OrangeBtn label="Cheddar Bites"/>
        <OrangeBtn label="Broc Ricotta"/>
        <OffBtnComponent label="" />
        <PurpleBtn label="Morning Bun"/>
        <OrangeBtn label="Cin Raisin"/>
        <OrangeBtn label="Everything BGL"/>
        <OrangeBtn label="Evg Vg BGL"/>
        <OrangeBtn label="Potato Brkst"/>
        <PurpleBtn label="Cheese Dan"/>
        <YellowBtn label="Chickpea BT"/>
        <YellowBtn label="Zucc Wrap"/>
        <YellowBtn label="Gouda Wrap"/>
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <YellowBtn label="Turkey Prov"/>
        <YellowBtn label="Moz Pesto"/>
        <YellowBtn label="Chorizo Wrap"/>
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
      </div>
    </div>
  );
};

export default DoughnutsMenu

