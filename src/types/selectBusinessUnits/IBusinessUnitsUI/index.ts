import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { IBusinessUnitstate } from "../IBusinessUnitstate";

interface IBusinessUnitsUI {
  businessUnits: IBusinessUnitsPortalStaff[];
  search: string;
  businessUnit: IBusinessUnitstate;
  screenMobile: boolean;
  screenTablet: boolean;
  filteredBusinessUnits: IBusinessUnitsPortalStaff[];
  selectedBusinessUnit: IBusinessUnitsPortalStaff;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBussinessUnitChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  handleSubmit: () => void;
}

export type { IBusinessUnitsUI };
