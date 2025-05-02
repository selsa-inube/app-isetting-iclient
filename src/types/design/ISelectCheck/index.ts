import { IOptionItem } from "../IOptionItem";
import { ISize } from "../ISize";
import { IStatus } from "../IStatus";

interface ISelectCheck {
  id: string;
  name: string;
  options: IOptionItem[];
  value: string | number;
  selectRef: React.RefObject<HTMLDivElement>;
  displayList: boolean;
  focused: boolean;
  disabled?: boolean;
  fullwidth?: boolean;
  label?: string;
  message?: string;
  setFocused: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayList: React.Dispatch<React.SetStateAction<boolean>>;
  onBlur?: (event: FocusEvent) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  onChangeCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent) => void;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size?: ISize;
  status?: IStatus;
  invalid?: boolean;
}

export type { ISelectCheck };
