import { MdCheck } from "react-icons/md";
import { Stack, Icon, Divider } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";
import { IBusinessUnitChange } from "@ptypes/design/IBusinessUnitChange";
import { ComponentAppearance } from "@enum/appearances";
import {
  StyledContainer,
  StyledUl,
  StyledLi,
  StyledImg,
  StyledContainerOption,
} from "./styles";

const BusinessUnitChange = (props: IBusinessUnitChange) => {
  const { businessUnits, selectedClient, onLogoClick } = props;

  const showDivider = (index: number) => index !== businessUnits.length - 1;

  return (
    <StyledContainer>
      <Stack width="200px">
        <StyledUl>
          {businessUnits.map((businessUnit, index) => (
            <StyledContainerOption
              key={businessUnit.publicCode}
              onClick={() => onLogoClick(businessUnit)}
            >
              <StyledLi>
                <StyledImg
                  src={businessUnit.urlLogo}
                  alt={businessUnit.abbreviatedName}
                />
                {selectedClient === businessUnit.abbreviatedName && (
                  <Stack
                    margin={`${tokens.spacing.s0} ${tokens.spacing.s150} ${tokens.spacing.s0}`}
                  >
                    <Icon
                      icon={<MdCheck />}
                      appearance={ComponentAppearance.PRIMARY}
                      size="24px"
                      cursorHover
                    />
                  </Stack>
                )}
              </StyledLi>
              {showDivider(index) && <Divider />}
            </StyledContainerOption>
          ))}
        </StyledUl>
      </Stack>
    </StyledContainer>
  );
};

export { BusinessUnitChange };
