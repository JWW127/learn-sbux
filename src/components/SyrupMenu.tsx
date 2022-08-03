import { BlackBtn, YellowBtn,BlueBtn, LimeBtn, LightAmberBtn, OffBtnComponent, PurpleBtn } from "./MenuButtons";

const SyrupMenu = () => {
  return (
      <div className="h-full flex flex-wrap p-1 justify-around gap-4 basis-[85%] bg-white">
      <BlackBtn label="No" />
      <BlackBtn label="Sub" />
      <YellowBtn label="Pumps"/>
      <BlackBtn label="Extra" />
      <BlackBtn label="Light" />
      <LightAmberBtn label="Caramel"/>
      <LightAmberBtn label="Cin Dolce"/>
      <LightAmberBtn label="Hazelnut"/>
      <LightAmberBtn label="Toffee Nut"/>
      <LightAmberBtn label="Vanilla"/>
      <LightAmberBtn label="Classic"/>
      <LightAmberBtn label="Peppermint"/>
      <LightAmberBtn label="Raspberry"/>
      <LightAmberBtn label="Pineapple"/>
      <OffBtnComponent label="" />
      <LimeBtn label="Chai"/>
      <LightAmberBtn label="HoneyBlend"/>
      <LightAmberBtn label="LiquidCane"/>
      <OffBtnComponent label="" />
      <OffBtnComponent label="" />
      <BlueBtn label="SF C.Dolce"/>
      <BlueBtn label="SF Vanilla"/>
      <OffBtnComponent label="" />
      <OffBtnComponent label="" />
      <OffBtnComponent label="" />
      <PurpleBtn label="Mocha"/>
      <PurpleBtn label="W.Chocolate"/>
      <PurpleBtn label="CaramelSauce"/>
      <PurpleBtn label="DarkCaramel"/>
      <OffBtnComponent label="" />
      <PurpleBtn label="Seasonal"/>
      <OffBtnComponent label="" />
      <OffBtnComponent label="" />
      <OffBtnComponent label="" />
      <OffBtnComponent label="" />
    </div>
  );
};

export default SyrupMenu
