import { IOptionItem } from "../IOptionItem";
import { ISize } from "../ISize";
import { IStatus } from "../IStatus";

interface ISelectCheckUI {
  id: string;
  name: string;
  options: IOptionItem[];
  value: string | number;
  displayList: boolean;
  disabled?: boolean;
  focused?: boolean;
  fullwidth?: boolean;
  label?: string;
  message?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size?: ISize;
  invalid?: boolean;
  status?: IStatus;
  labelOrRequired: string | boolean;
  isListVisible: boolean;
  onBlur?: (event: FocusEvent) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  onChangeCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent) => void;
}

export type { ISelectCheckUI };
