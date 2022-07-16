import { useStore } from "../lib/store";
import { PosBottomNav } from "./PosBottomNav";
import { DrinkSizeMenu } from "./DrinkSizeMenu";
import { PosSideNav } from "./PosSideNav";
import { SyrupMenu } from "./SyrupMenu";
import { MilkMenu } from "./MilkMenu";
import { CustomMenu } from "./CustomMenu";
import { BlendedMenu } from "./BlendedMenu";
import { BrewMenu } from "./BrewMenu";
import { EspMenu } from "./EspMenu";
import { OtherMenu } from "./OtherMenu";
import { TeaMenu } from "./TeaMenu";


export const MainMenu = () => {
  const menu = useStore((state) => state.menu);
  let currentMenu;

  switch (menu) {
    case "drinkSizeMenu":
      currentMenu = <DrinkSizeMenu />;
      break;
    case "syrupMenu":
      currentMenu = <SyrupMenu />;
      break;
    case "milkMenu":
      currentMenu = <MilkMenu />;
      break;
    case "customMenu":
      currentMenu = <CustomMenu />;
      break;
    case "blendedMenu":
      currentMenu = <BlendedMenu />;
      break;
    case "brewMenu":
      currentMenu = <BrewMenu />;
      break;
    case "espMenu":
      currentMenu = <EspMenu />;
      break;
    case "otherMenu":
      currentMenu = <OtherMenu />;
      break;
    case "teaMenu":
      currentMenu = <TeaMenu />;
      break;
    default:
      currentMenu = <DrinkSizeMenu />;
      break;
  }

  return (
    <div className="flex flex-col h-full ">
      <div className="flex flex-row h-4/5">
        {currentMenu}
        <PosSideNav />
      </div>
      <PosBottomNav />
    </div>
  );
};
