interface BtnProps {
  label: string;
  design?: string;
  click?: () => void;
}

//Todo: We need to refactor into ONE button that takes uses props.design as className

//These buttons are only to be used with the main menu like DrinkSizeMenu, BlendedMenu, EspMenu etc. cannot be used with nav or menubox
export const OffBtnComponent = (props: BtnProps) => {
  return (
    <button
      type="button"
      disabled={true}
      className="border-gray-900 rounded-lg basis-1/6"
    >
      {props.label}
    </button>
  );
};

export const PurpleBtn = (props: BtnProps) => {
  return (
    <button
      type="button"
      className="bg-purple-200 border-2 border-gray-900 rounded-lg shadow-lg shadow-inner shadow-stone-200 active:shadow-stone-900 active:bg-purple-400 basis-1/6"
    >
      {props.label}
    </button>
  );
};

export const RoseBtn = (props: BtnProps) => {
  return (
    <button
      type="button"
      className="border-2 border-gray-900 rounded-lg shadow-lg shadow-inner bg-gradient-to-b from-rose-300 to-rose-100 shadow-stone-200 active:shadow-stone-900 active:to-rose-400 basis-1/6"
    >
      {props.label}
    </button>
  );
};

export const YellowBtn = (props: BtnProps) => {
  return (
    <button
      type="button"
      className="bg-yellow-200 border-2 border-gray-900 rounded-lg shadow-lg shadow-inner shadow-stone-200 active:shadow-stone-900 active:bg-yellow-400 basis-1/6"
      onClick={props.click}
    >
      {props.label}
    </button>
  );
};

export const GreenBtn = (props: BtnProps) => {
  return (
    <button
      type="button"
      className="bg-green-200 border-2 border-gray-900 rounded-lg shadow-lg shadow-inner shadow-stone-200 active:shadow-stone-900 active:bg-green-300 basis-1/6"
    >
      {props.label}
    </button>
  );
};

export const BlackBtn = (props: BtnProps) => {
  return (
    <button
      type="button"
      className="text-white border-2 border-gray-900 rounded-lg shadow-lg shadow-inner bg-gradient-to-b from-neutral-500 to-neutral-900 shadow-stone-200 active:shadow-stone-900 active:bg-neutral-500 basis-1/6"
    >
      {props.label}
    </button>
  );
};

export const LimeBtn = (props: BtnProps) => {
  return (
    <button
      type="button"
      className="border-2 border-gray-900 rounded-lg shadow-lg shadow-inner bg-lime-200 shadow-stone-200 active:shadow-stone-900 active:bg-lime-300 basis-1/6"
    >
      {props.label}
    </button>
  );
};

export const OrangeBtn = (props: BtnProps) => {
  return (
    <button
      type="button"
      className="bg-orange-200 border-2 border-gray-900 rounded-lg shadow-lg shadow-inner shadow-stone-200 active:shadow-stone-900 active:bg-orange-400 basis-1/6"
      onClick={props.click}
    >
      {props.label}
    </button>
  );
};

export const BlueBtn = (props: BtnProps) => {
  return (
    <button
      type="button"
      className="bg-blue-200 border-2 border-gray-900 rounded-lg shadow-lg shadow-inner shadow-stone-200 active:shadow-stone-900 active:bg-blue-400 basis-1/6"
      onClick={props.click}
    >
      {props.label}
    </button>
  );
};

export const SkyBtn = (props: BtnProps) => {
  return (
    <button
      type="button"
      className="border-2 border-gray-900 rounded-lg shadow-lg shadow-inner bg-sky-100 shadow-stone-200 active:shadow-stone-900 active:bg-sky-400 basis-1/6"
      onClick={props.click}
    >
      {props.label}
    </button>
  );
};
export const LightAmberBtn = (props: BtnProps) => {
  return (
    <button
      type="button"
      className="border-2 border-gray-900 rounded-lg shadow-lg shadow-inner bg-amber-100 shadow-stone-200 active:shadow-stone-900 active:bg-amber-400 basis-1/6"
      onClick={props.click}
    >
      {props.label}
    </button>
  );
};

export const TealBtn = (props: BtnProps) => {
  return (
    <button
      type="button"
      className="bg-teal-500 border-2 border-gray-900 rounded-lg shadow-lg shadow-inner shadow-stone-200 active:shadow-stone-900 active:bg-teal-600 basis-1/6"
      onClick={props.click}
    >
      {props.label}
    </button>
  );
};
