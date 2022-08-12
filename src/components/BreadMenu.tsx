import {
  SkyBtn,
  OffBtnComponent,
  PurpleBtn,
  OrangeBtn,
} from "./MenuButtons";

 const BreadMenu = () => {
  return (
    <div className="h-full flex flex-wrap basis-[85%] bg-white">
          <div className="flex flex-wrap justify-around w-full py-2 text-sm gap-x-1 gap-y-4">
        <OrangeBtn label="Plain Bagel"/>
        <OrangeBtn label="Plain Bagel"/>
        <OrangeBtn label="Plain Bagel"/>
        <OrangeBtn label="Plain Bagel"/>
        <OrangeBtn label="Plain Bagel"/>
        <OrangeBtn label="Plain Bagel"/>
        <OrangeBtn label="Plain Bagel"/>
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OrangeBtn label="Plain Bagel"/>
        <SkyBtn label="Coffee Cake"/>
        <SkyBtn label="Coffee Cake"/>
        <SkyBtn label="Coffee Cake"/>
        <SkyBtn label="Coffee Cake"/>
        <PurpleBtn label="Birthday Pop"/>
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OrangeBtn label="Plain Bagel"/>
        <OrangeBtn label="Plain Bagel"/>
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
      </div>
    </div>
  );
};

export default BreadMenu

