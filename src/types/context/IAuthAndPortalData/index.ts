import { IAppData } from "@ptypes/context/IAppData";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";

interface IAuthAndPortalData {
  appData: IAppData;
  businessUnitSigla: string;
  businessUnitsToTheStaff: IBusinessUnitsPortalStaff[];
  setAppData: React.Dispatch<React.SetStateAction<IAppData>>;
  setBusinessUnitSigla: React.Dispatch<React.SetStateAction<string>>;
  setBusinessUnitsToTheStaff: React.Dispatch<
    React.SetStateAction<IBusinessUnitsPortalStaff[]>
  >;
}

export type { IAuthAndPortalData };
