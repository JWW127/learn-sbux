interface BtnProps {
  label: string;
  design: string;
}

export const BtnComponent = (props: BtnProps) => {
  return <button className={props.design}>{props.label}</button>;
};

export const OffBtnComponent = (props: BtnProps) => {
  return (
    <button disabled={true} className={props.design}>
      {props.label}
    </button>
  );
};
