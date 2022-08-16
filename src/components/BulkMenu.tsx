import {
  LightAmberBtn,
  PurpleBtn,
  OrangeBtn,
} from "./MenuButtons";

 const BulkMenu = () => {
  return (
    <div className="h-full flex flex-wrap basis-[85%] bg-white">
                <div className="flex flex-col flex-wrap justify-around w-full p-14 text-md gap-y-2">

        <OrangeBtn label="Pike Traveler"/>
        <PurpleBtn label="Dark Traveler"/>
        <LightAmberBtn label="Blonde Traveler"/>
      </div>
    </div>
  );
};

export default BulkMenu

