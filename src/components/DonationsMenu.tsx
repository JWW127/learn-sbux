import {
  LightAmberBtn,
  OffBtnComponent,
  BlackBtn,
} from "./MenuButtons";

 const DonationsMenu = () => {
  return (
    <div className="h-full flex flex-wrap basis-[85%] bg-white">
      <div className="flex flex-col flex-wrap justify-around w-full p-14 text-md gap-y-2">
        <LightAmberBtn label="Donations"/>
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
      </div>
    </div>
  );
};

export default DonationsMenu



