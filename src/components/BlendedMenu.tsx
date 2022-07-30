import {
  PurpleBtn,
  YellowBtn,
  OrangeBtn,
  RoseBtn,
  SkyBtn,
  LightAmberBtn,
  OffBtnComponent,
  BlackBtn,
} from "./MenuButtons";

export const BlendedMenu = () => {
  return (
    <div className="h-full flex flex-wrap basis-[85%] bg-white">
      {" "}
      <div className="flex flex-wrap justify-around py-1 text-sm gap-x-1 gap-y-4">
        <OrangeBtn label="Coffee FRP" />
        <OrangeBtn label="Mocha FRP" />
        <OrangeBtn label="Caramel FRP" />
        <OrangeBtn label="Java Chip" />
        <OffBtnComponent label="" />
        <OrangeBtn label="Caffe VN" />
        <OrangeBtn label="ESP FRP" />
        <OrangeBtn label="WC Mocah" />
        <OrangeBtn label="C.Ribbon" />
        <OrangeBtn label="Mocha Cookie" />
        <SkyBtn label="Chai Creme" />
        <SkyBtn label="Double CC" />
        <SkyBtn label="Vanilla Bean" />
        <SkyBtn label="WC Creme" />
        <OffBtnComponent label="" />
        <SkyBtn label="Matcha" />
        <SkyBtn label="Syrup Creme" />
        <SkyBtn label="Strawberry" />
        <SkyBtn label="C.Rib Creme" />
        <SkyBtn label="Cookie CRMB" />
        <YellowBtn label="STR Lemonade" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <OffBtnComponent label="" />
        <LightAmberBtn label="PMKN" />
        <SkyBtn label="PMKN Creme" />
        <LightAmberBtn label="SLT CRML" />
        <SkyBtn label="S.CRML Creme" />
        <BlackBtn label="More" />
      </div>
    </div>
  );
};
