import { IAppData } from "@ptypes/context/IAppData";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";

interface IUseCheckingCredentials {
  businessUnits: IBusinessUnitsPortalStaff[];
  appData: IAppData;
  setBusinessUnitSigla: React.Dispatch<React.SetStateAction<string>>;
}

export type { IUseCheckingCredentials };
