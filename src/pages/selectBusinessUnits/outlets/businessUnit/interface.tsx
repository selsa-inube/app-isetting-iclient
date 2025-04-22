import { MdSearch } from "react-icons/md";
import { Button, Input, Stack, Text } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { RadioBusinessUnit } from "@design/feedback/radioBusinessUnit";
import { NoResultsMessage } from "@design/feedback/noResultsMessage";
import { businessUnitLabels } from "@config/businessUnit/businessUnitLabels";
import { IBusinessUnitsUI } from "@ptypes/selectBusinessUnits/IBusinessUnitsUI";
import {
  StyledBusinessUnits,
  StyledBusinessUnitsItem,
  StyledBusinessUnitsList,
} from "./styles";

const BusinessUnitsUI = (props: IBusinessUnitsUI) => {
  const {
    search,
    businessUnit,
    screenMobile,
    screenTablet,
    filteredBusinessUnits,
    selectedBusinessUnit,
    hasManyBusinessUnits,
    hasNoFilteredBusinessUnits,
    handleSearchChange,
    handleBussinessUnitChange,
    handleSubmit,
  } = props;

  return (
    <StyledBusinessUnits $isMobile={screenMobile}>
      <Text type="title" as="h2" textAlign="center">
        {businessUnitLabels.businessUnits}
      </Text>
      <Text size="medium" textAlign="center">
        {businessUnitLabels.selectedBusinessUnit}
      </Text>
      <form>
        <Stack direction="column" alignItems="center" gap={tokens.spacing.s300}>
          {hasManyBusinessUnits && (
            <Input
              placeholder={businessUnitLabels.search}
              type="search"
              name="searchBusinessUnits"
              id="searchBusinessUnits"
              value={search}
              fullwidth={true}
              onChange={handleSearchChange}
              iconBefore={<MdSearch size={22} />}
            />
          )}
          {hasNoFilteredBusinessUnits && <NoResultsMessage search={search} />}
          <StyledBusinessUnitsList
            $scroll={hasManyBusinessUnits}
            $isMobile={screenMobile}
            $isTablet={screenTablet}
          >
            <Stack
              direction="column"
              padding={`${tokens.spacing.s0} ${tokens.spacing.s100}`}
              alignItems="center"
              gap={tokens.spacing.s100}
            >
              {filteredBusinessUnits.map((businessUnit) => (
                <StyledBusinessUnitsItem key={businessUnit.publicCode}>
                  <RadioBusinessUnit
                    name="businessUnit"
                    label={businessUnit.abbreviatedName}
                    id={businessUnit.publicCode}
                    value={businessUnit.publicCode}
                    logo={businessUnit.urlLogo}
                    selectedBusinessUnit={selectedBusinessUnit}
                    handleChange={handleBussinessUnitChange}
                  />
                </StyledBusinessUnitsItem>
              ))}
            </Stack>
          </StyledBusinessUnitsList>
          <Button
            type="button"
            disabled={businessUnit.value}
            onClick={handleSubmit}
          >
            {businessUnitLabels.continueButton}
          </Button>
        </Stack>
      </form>
    </StyledBusinessUnits>
  );
};

export { BusinessUnitsUI };
