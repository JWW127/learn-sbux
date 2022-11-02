import { LightAmberBtn } from "./MenuButtons";

const NewspaperMenu = () => {
  return (
    <div className="flex h-full basis-[85%] flex-wrap bg-white">
      <div className="text-md flex w-full flex-col flex-wrap justify-around gap-y-2 p-14">
        <LightAmberBtn label="NY Times" />
        <LightAmberBtn label="Chicago Tribune" />
        <LightAmberBtn label="Local Paper" />
      </div>
    </div>
  );
};

export default NewspaperMenu;
