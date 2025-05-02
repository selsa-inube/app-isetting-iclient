import { IOptionList } from "@ptypes/design/IOptionList";
import { StyledOptionList } from "./styles";

const OptionList = (props: IOptionList) => {
  const { children, onClick } = props;

  return <StyledOptionList $onClick={onClick}>{children}</StyledOptionList>;
};

export { OptionList };
