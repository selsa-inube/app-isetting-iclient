import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Text, Icon, Divider, inube } from "@inubekit/inubekit";

import { ComponentAppearance } from "@enum/appearances";
import { BoxContainer } from "@design/layout/boxContainer";
import { tokens } from "@design/tokens";
import { IAccordion } from "@ptypes/design/IAccordion";
import { StyledHead } from "./styles";

const Accordion = (props: IAccordion) => {
  const { title, defaultOpen = true, children } = props;

  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const showIcon = isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />;

  return (
    <BoxContainer
      padding={`${tokens.spacing.s150} ${tokens.spacing.s100}`}
      direction="column"
      gap={tokens.spacing.s100}
      borderRadius={tokens.spacing.s100}
      boxSizing="border-box"
      alignItems="stretch"
      width="100%"
      height="auto"
      borderColor={inube.palette.neutral.N40}
      backgroundColor={inube.palette.neutral.N0}
    >
      <StyledHead onClick={handleToggleOpen}>
        <Text
          type="label"
          size={"large"}
          appearance={ComponentAppearance.GRAY}
          weight="bold"
          ellipsis
        >
          {title}
        </Text>

        <Icon
          icon={showIcon}
          appearance={ComponentAppearance.DARK}
          spacing="compact"
          cursorHover
          size="24px"
        />
      </StyledHead>

      {isOpen && (
        <>
          <Divider dashed />
          {children}
        </>
      )}
    </BoxContainer>
  );
};

export { Accordion };
export type { IAccordion };
