import { BlueBtn, GreenBtn, PurpleBtn } from "./MenuButtons";



const LoyaltyMenu = () => {
  return (
    <div className="h-full flex flex-wrap basis-[85%] bg-white">
      <div className="flex flex-col flex-wrap justify-around w-full p-14 text-md gap-y-2">
 <BlueBtn label="Activate New Card"/> 
        <GreenBtn label="Reload Card"/>
        <PurpleBtn label="Activate Recovery Card"/>
      </div>
    </div>
  );
};

export default LoyaltyMenu;
