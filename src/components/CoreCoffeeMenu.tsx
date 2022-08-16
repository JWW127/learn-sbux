import {  OffBtnComponent, OrangeBtn, BlackBtn } from "./MenuButtons";

const CoreCoffeeMenu = () => {

  return (
    <div className="h-full flex flex-wrap basis-[85%] bg-white">
      <div className="flex flex-wrap justify-center w-full py-2 text-sm gap-5">
        <BlackBtn label="1/2 Lb." />
        <BlackBtn label="1 Lb" />
        <OffBtnComponent label="" />
        <BlackBtn label="5 Lbs" />
        <BlackBtn label="Whole Bean" />
        <OrangeBtn label="Blonde ESP" />
        <OrangeBtn label="ESP" />
        <OrangeBtn label="Guatamala" />
        <OrangeBtn label="Italian" />
        <OrangeBtn label="Komodo" />
        <OrangeBtn label="Pike" />
        <OrangeBtn label="Siren" />
        <OrangeBtn label="Sumatra" />
        <OrangeBtn label="Veranda" />
        <OrangeBtn label="Verona" />
        <OrangeBtn label="Yukon" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <div className="basis-full"></div>
        <OffBtnComponent label="" />
        <BlackBtn label="Seasonal" />
      </div>
    </div>
  );
};

export default CoreCoffeeMenu;
