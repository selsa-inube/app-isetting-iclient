interface IOptionList {
  children: JSX.Element | JSX.Element[];
  onClick?: React.ChangeEventHandler<HTMLInputElement>;
}

export type { IOptionList };
