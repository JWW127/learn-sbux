import { useStore } from "../lib/store";
import { PosBottomNav } from "./PosBottomNav";
import { DrinkSizeMenu } from "./DrinkSizeMenu";
import { PosSideNav } from "./PosSideNav";
import { SyrupMenu } from "./SyrupMenu";
import { MilkMenu } from "./MilkMenu";
import { CustomMenu } from "./CustomMenu";

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
