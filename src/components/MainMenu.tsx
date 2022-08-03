import dynamic from 'next/dynamic'
import { Suspense } from 'react';
import { useStore } from "../lib/store";
import { PosBottomNav } from "./PosBottomNav";
import { DrinkSizeMenu } from "./DrinkSizeMenu";
import { PosSideNav } from "./PosSideNav";

//lazy load
const DynamicSyrupMenu = dynamic(() => import('./SyrupMenu'), {suspense: true})
const DynamicMilkMenu = dynamic(() => import('./MilkMenu'), {suspense: true})
const DynamicCustomMenu = dynamic(() => import('./CustomMenu'), {suspense: true})
const DynamicBlendedMenu = dynamic(() => import('./BlendedMenu'), {suspense: true})
const DynamicBrewMenu = dynamic(() => import('./BrewMenu'), {suspense: true})
const DynamicEspMenu = dynamic(() => import('./EspMenu'), {suspense: true})
const DynamicOtherMenu = dynamic(() => import('./OtherMenu'), {suspense: true})
const DynamicTeaMenu = dynamic(() => import('./TeaMenu'), {suspense: true})
const DynamicMuffinMenu = dynamic(() => import('./MuffinMenu'), {suspense: true})

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
