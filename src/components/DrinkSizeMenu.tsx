import {
  GreenBtn,
  OffBtnComponent,
  OrangeBtn,
  PurpleBtn,
  RoseBtn,
  TealBtn,
  YellowBtn,
} from "./MenuButtons";
import { useStore } from "../lib/store";

//TODO: buttons need to remove if clicked again

export const DrinkSizeMenu = () => {
  const cd = useStore((state) => state.currentDrink);
  const icedDrink = useStore((state) => state.icedDrink);
  const sizeDrink = useStore((state) => state.sizeDrink);

  return (
    <div className="flex h-full basis-[85%] flex-col bg-white py-4 pr-4">
      <div className="flex basis-2/5 flex-wrap justify-around gap-y-6 gap-x-1 pt-5 pb-14">
        <TealBtn label="Iced" click={() => icedDrink(cd, "Iced")} />
        <OffBtnComponent label="" />
        <YellowBtn label="Blonde" />
        <OrangeBtn label="Decaf" />
        <OrangeBtn label="1/2 Decaf" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OrangeBtn label="2/3 Decaf" />
        <OrangeBtn label="1/3 Decaf" />
      </div>
      <div className="flex basis-3/5 flex-wrap justify-around gap-y-6 gap-x-1">
        <PurpleBtn label="Single" />
        <PurpleBtn label="Double" />
        <PurpleBtn label="Triple" />
        <PurpleBtn label="Quad" />
        <PurpleBtn label="More Shots" />
        <RoseBtn label="Add Shot" />
        <RoseBtn label="Affogato" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OrangeBtn label="Frap Roast" />
        <YellowBtn label="Kids" />
        <OffBtnComponent label="" />
        <GreenBtn label="Updosed" />
        <GreenBtn label="Long Shot" />
        <GreenBtn label="Ristretto" />
        <YellowBtn label="Short" click={() => sizeDrink(cd, "Short")} />
        <YellowBtn label="Tall" />
        <YellowBtn label="Grande" />
        <YellowBtn label="Venti" />
        <YellowBtn label="Trenta" />
      </div>
    </div>
  );
};
