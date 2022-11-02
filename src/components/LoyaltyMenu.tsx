import { BlueBtn, GreenBtn, PurpleBtn } from "./MenuButtons";

const LoyaltyMenu = () => {
  return (
    <div className="flex h-full basis-[85%] flex-wrap bg-white">
      <div className="text-md flex w-full flex-col flex-wrap justify-around gap-y-2 p-14">
        <BlueBtn label="Activate New Card" />
        <GreenBtn label="Reload Card" />
        <PurpleBtn label="Activate Recovery Card" />
      </div>
    </div>
  );
};

export default LoyaltyMenu;
