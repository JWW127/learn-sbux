import { LightAmberBtn, PurpleBtn, OrangeBtn } from "./MenuButtons";

const BulkMenu = () => {
  return (
    <div className="flex h-full basis-[85%] flex-wrap bg-white">
      <div className="text-md flex w-full flex-col flex-wrap justify-around gap-y-2 p-14">
        <OrangeBtn label="Pike Traveler" />
        <PurpleBtn label="Dark Traveler" />
        <LightAmberBtn label="Blonde Traveler" />
      </div>
    </div>
  );
};

export default BulkMenu;
