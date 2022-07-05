import { PosBottomNav } from "./PosBottomNav";
import { DrinkSizeMenu } from "./DrinkSizeMenu";
import { PosSideNav } from "./PosSideNav";

export const MainMenu = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row h-4/5">
        <DrinkSizeMenu />
        <PosSideNav />
      </div>
      <PosBottomNav />
    </div>
  );
};
