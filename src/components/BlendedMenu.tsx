import {
  YellowBtn,
  OrangeBtn,
  SkyBtn,
  LightAmberBtn,
  OffBtnComponent,
  BlackBtn,
} from "./MenuButtons";

const BlendedMenu = () => {
  return (
    <div className="flex h-full basis-[85%] flex-wrap bg-white">
      {" "}
      <div className="flex flex-wrap justify-around gap-x-1 gap-y-4 py-2 text-sm">
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
        <div className="basis-full"></div>
        <LightAmberBtn label="PMKN" />
        <SkyBtn label="PMKN Creme" />
        <LightAmberBtn label="SLT CRML" />
        <SkyBtn label="S.CRML Creme" />
        <BlackBtn label="More" />
      </div>
    </div>
  );
};

export default BlendedMenu;
