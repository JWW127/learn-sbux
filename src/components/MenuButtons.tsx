interface BtnProps {
  label: string;
  design?: string;
}

//These buttons are only to be used with the main menu like DrinkSizeMenu, BlendedMenu, EspMenu etc. cannot be used with nav or menubox
export const OffBtnComponent = (props: BtnProps) => {
  return (
    <button disabled={true} className="border-gray-900 rounded-lg basis-1/6">
      {props.label}
    </button>
  );
};

export const PurpleBtn = (props: BtnProps) => {
  return (
    <button className="bg-purple-200 border-2 border-gray-900 rounded-lg shadow-lg shadow-inner shadow-stone-200 active:shadow-stone-900 active:bg-purple-400 basis-1/6">
      {props.label}
    </button>
  );
};
export const RoseBtn = (props: BtnProps) => {
  return (
    <button className="border-2 border-gray-900 rounded-lg shadow-lg shadow-inner bg-rose-300 shadow-stone-200 active:shadow-stone-900 active:bg-rose-400 basis-1/6">
      {props.label}
    </button>
  );
};

export const YellowBtn = (props: BtnProps) => {
  return (
    <button className="bg-yellow-200 border-2 border-gray-900 rounded-lg shadow-lg shadow-inner shadow-stone-200 active:shadow-stone-900 active:bg-yellow-400 basis-1/6">
      {props.label}
    </button>
  );
};

export const GreenBtn = (props: BtnProps) => {
  return (
    <button className="bg-green-200 border-2 border-gray-900 rounded-lg shadow-lg shadow-inner shadow-stone-200 active:shadow-stone-900 active:bg-green-300 basis-1/6">
      {props.label}
    </button>
  );
};

export const OrangeBtn = (props: BtnProps) => {
  return (
    <button className="bg-orange-200 border-2 border-gray-900 rounded-lg shadow-lg shadow-inner shadow-stone-200 active:shadow-stone-900 active:bg-orange-400 basis-1/6">
      {props.label}
    </button>
  );
};

export const TealBtn = (props: BtnProps) => {
  return (
    <button className="bg-teal-500 border-2 border-gray-900 rounded-lg shadow-lg shadow-inner shadow-stone-200 active:shadow-stone-900 active:bg-teal-600 basis-1/6">
      {props.label}
    </button>
  );
};

