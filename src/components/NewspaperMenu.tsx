import {
  LightAmberBtn,
} from "./MenuButtons";

 const NewspaperMenu = () => {
  return (
    <div className="h-full flex flex-wrap basis-[85%] bg-white">
      <div className="flex flex-col flex-wrap justify-around w-full p-14 text-md gap-y-2">
        <LightAmberBtn label="NY Times"/>
        <LightAmberBtn label="Chicago Tribune"/>
        <LightAmberBtn label="Local Paper"/>
      </div>
    </div>
  );
};

export default NewspaperMenu


