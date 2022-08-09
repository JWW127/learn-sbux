import dynamic from 'next/dynamic'
import { Suspense } from 'react';
import { useStore } from "../lib/store";
import { PosBottomNav } from "./PosBottomNav";
import { DrinkSizeMenu } from "./DrinkSizeMenu";
import { PosSideNav } from "./PosSideNav";

//lazy load
const DynamicSyrupMenu = dynamic(() => import('./SyrupMenu'), {suspense: false})
const DynamicMilkMenu = dynamic(() => import('./MilkMenu'), {suspense: false})
const DynamicCustomMenu = dynamic(() => import('./CustomMenu'), {suspense: false})
const DynamicBlendedMenu = dynamic(() => import('./BlendedMenu'), {suspense: false})
const DynamicBrewMenu = dynamic(() => import('./BrewMenu'), {suspense: false})
const DynamicEspMenu = dynamic(() => import('./EspMenu'), {suspense: false})
const DynamicOtherMenu = dynamic(() => import('./OtherMenu'), {suspense: false})
const DynamicTeaMenu = dynamic(() => import('./TeaMenu'), {suspense: false})
const DynamicMuffinMenu = dynamic(() => import('./MuffinMenu'), {suspense: false})
const DynamicCakesMenu = dynamic(() => import('./CakesMenu'), {suspense: false})
const DynamicBreadMenu = dynamic(() => import('./BreadMenu'), {suspense: false})
const DynamicDoughnutsMenu = dynamic(() => import('./DoughnutsMenu'), {suspense: false})
const DynamicBrowniesMenu = dynamic(() => import('./BrowniesMenu'), {suspense: false})
const DynamicSandwichMenu = dynamic(() => import('./SandwichMenu'), {suspense: false})

export const MainMenu = () => {
  const menu = useStore((state) => state.menu);
  let currentMenu;

  switch (menu) {
    case "drinkSizeMenu":
      currentMenu = <DrinkSizeMenu />;
      break;
    case "syrupMenu":
      currentMenu = <DynamicSyrupMenu />;
      break;
    case "milkMenu":
      currentMenu = <DynamicMilkMenu />;
      break;
    case "customMenu":
      currentMenu = <DynamicCustomMenu />;
      break;
    case "blendedMenu":
      currentMenu = <DynamicBlendedMenu />;
      break;
    case "brewMenu":
      currentMenu = <DynamicBrewMenu />;
      break;
    case "espMenu":
      currentMenu = <DynamicEspMenu />;
      break;
    case "otherMenu":
      currentMenu = <DynamicOtherMenu />;
      break;
    case "teaMenu":
      currentMenu = <DynamicTeaMenu />;
      break;
    case "muffinMenu":
      currentMenu = <DynamicMuffinMenu />;
    break;
    case "cakesMenu":
    currentMenu = <DynamicCakesMenu />;
      break;
    case "breadMenu":
    currentMenu = <DynamicBreadMenu />;
      break;
    case "doughnutsMenu":
    currentMenu = <DynamicDoughnutsMenu />;
      break;
    case "browniesMenu":
    currentMenu = <DynamicBrowniesMenu />;
      break;
    case "sandwichMenu":
    currentMenu = <DynamicSandwichMenu />;
      break;
    default:
      currentMenu = <DrinkSizeMenu />;
      break;
  }

  return (
    <div className="flex flex-col h-full ">
      <div className="flex flex-row h-4/5">
        <Suspense fallback={`loading...`}>
        {currentMenu}
        </Suspense >
        <PosSideNav />
      </div>
      <PosBottomNav />
    </div>
  );
};
