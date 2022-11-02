import { LightAmberBtn, OffBtnComponent } from "./MenuButtons";

const DonationsMenu = () => {
  return (
    <div className="flex h-full basis-[85%] flex-wrap bg-white">
      <div className="text-md flex w-full flex-col flex-wrap justify-around gap-y-2 p-14">
        <LightAmberBtn label="Donations" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
      </div>
    </div>
  );
};

export default DonationsMenu;
