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
      className="basis-1/6 rounded-lg border-gray-900"
    >
      {props.label}
    </button>
  );
};

export const PurpleBtn = (props: BtnProps) => {
  return (
    <button
      type="button"
      className="basis-1/6 rounded-lg border-2 border-gray-900 bg-purple-200 shadow-lg shadow-inner shadow-stone-200 active:bg-purple-400 active:shadow-stone-900"
    >
      {props.label}
    </button>
  );
};

export const RoseBtn = (props: BtnProps) => {
  return (
    <button
      type="button"
      className="basis-1/6 rounded-lg border-2 border-gray-900 bg-gradient-to-b from-rose-300 to-rose-100 shadow-lg shadow-inner shadow-stone-200 active:to-rose-400 active:shadow-stone-900"
    >
      {props.label}
    </button>
  );
};

export const YellowBtn = (props: BtnProps) => {
  return (
    <button
      type="button"
      className="basis-1/6 rounded-lg border-2 border-gray-900 bg-yellow-200 shadow-lg shadow-inner shadow-stone-200 active:bg-yellow-400 active:shadow-stone-900"
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
      className="basis-1/6 rounded-lg border-2 border-gray-900 bg-green-200 shadow-lg shadow-inner shadow-stone-200 active:bg-green-300 active:shadow-stone-900"
    >
      {props.label}
    </button>
  );
};

export const BlackBtn = (props: BtnProps) => {
  return (
    <button
      type="button"
      className="basis-1/6 rounded-lg border-2 border-gray-900 bg-gradient-to-b from-neutral-500 to-neutral-900 text-white shadow-lg shadow-inner shadow-stone-200 active:bg-neutral-500 active:shadow-stone-900"
    >
      {props.label}
    </button>
  );
};

export const LimeBtn = (props: BtnProps) => {
  return (
    <button
      type="button"
      className="basis-1/6 rounded-lg border-2 border-gray-900 bg-lime-200 shadow-lg shadow-inner shadow-stone-200 active:bg-lime-300 active:shadow-stone-900"
    >
      {props.label}
    </button>
  );
};

export const OrangeBtn = (props: BtnProps) => {
  return (
    <button
      type="button"
      className="basis-1/6 rounded-lg border-2 border-gray-900 bg-orange-200 shadow-lg shadow-inner shadow-stone-200 active:bg-orange-400 active:shadow-stone-900"
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
      className="basis-1/6 rounded-lg border-2 border-gray-900 bg-blue-200 shadow-lg shadow-inner shadow-stone-200 active:bg-blue-400 active:shadow-stone-900"
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
      className="basis-1/6 rounded-lg border-2 border-gray-900 bg-sky-100 shadow-lg shadow-inner shadow-stone-200 active:bg-sky-400 active:shadow-stone-900"
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
      className="basis-1/6 rounded-lg border-2 border-gray-900 bg-amber-100 shadow-lg shadow-inner shadow-stone-200 active:bg-amber-400 active:shadow-stone-900"
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
      className="basis-1/6 rounded-lg border-2 border-gray-900 bg-teal-500 shadow-lg shadow-inner shadow-stone-200 active:bg-teal-600 active:shadow-stone-900"
      onClick={props.click}
    >
      {props.label}
    </button>
  );
};
