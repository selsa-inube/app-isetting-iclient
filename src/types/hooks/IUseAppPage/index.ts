import { IAppData } from "@ptypes/context/IAppData";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";

interface IUseAppPage {
  appData: IAppData;
  businessUnitSigla: string;
  setBusinessUnitSigla: React.Dispatch<React.SetStateAction<string>>;
  businessUnitsToTheStaff: IBusinessUnitsPortalStaff[];
}

export type { IUseAppPage };
