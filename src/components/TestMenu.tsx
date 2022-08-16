import {
  LightAmberBtn,
  OffBtnComponent,
} from "./MenuButtons";

 const TestMenu = () => {
  return (
    <div className="h-full flex flex-wrap basis-[85%] bg-white">
      <div className="flex flex-col flex-wrap justify-around w-full p-14 text-md gap-y-2">
        <LightAmberBtn label="Test Item"/>
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
      </div>
    </div>
  );
};

export default TestMenu




