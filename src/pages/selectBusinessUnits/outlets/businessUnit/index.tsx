import { useBusinessUnits } from "@hooks/selectBusinessUnits/useBusinessUnits";
import { IBusinessUnits } from "@ptypes/selectBusinessUnits/IBusinessUnits";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { BusinessUnitsUI } from "./interface";

const BusinessUnits = (props: IBusinessUnits) => {
  const { businessUnits } = props;

  const {
    search,
    businessUnitLocal,
    screenMobile,
    screenTablet,
    selectedBusinessUnit,
    hasManyBusinessUnits,
    hasNoFilteredBusinessUnits,
    handleSearchChange,
    handleChange,
    handleSubmit,
    filteredBusinessUnits,
  } = useBusinessUnits({ businessUnits });

  return (
    <BusinessUnitsUI
      search={search}
      businessUnit={businessUnitLocal}
      handleSearchChange={handleSearchChange}
      handleBussinessUnitChange={handleChange}
      handleSubmit={handleSubmit}
      screenMobile={screenMobile}
      screenTablet={screenTablet}
      filteredBusinessUnits={filteredBusinessUnits}
      selectedBusinessUnit={
        selectedBusinessUnit ?? ({} as IBusinessUnitsPortalStaff)
      }
      hasManyBusinessUnits={hasManyBusinessUnits}
      hasNoFilteredBusinessUnits={hasNoFilteredBusinessUnits}
    />
  );
};

export { BusinessUnits };
