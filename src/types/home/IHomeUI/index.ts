import { IAppData } from "@ptypes/context/IAppData";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { ICardData } from "../ICardData";

interface IHomeUI {
  appData: IAppData;
  businessUnitChangeRef: React.RefObject<HTMLDivElement>;
  businessUnitsToTheStaff: IBusinessUnitsPortalStaff[];
  collapse: boolean;
  collapseMenuRef: React.RefObject<HTMLDivElement>;
  selectedClient: string;
  username: string;
  screenMobile: boolean;
  screenTablet: boolean;
  screenTabletHeader: boolean;
  dataExists: boolean;
  hasMultipleBusinessUnits: boolean;
  handleLogoClick: (businessUnit: IBusinessUnitsPortalStaff) => void;
  setCollapse: (value: boolean) => void;
  loading: boolean;
  data: ICardData[];
}

export type { IHomeUI };
