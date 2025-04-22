import { IAppData } from "@ptypes/context/IAppData";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";

interface IUseSelectBusinessUnits {
  appData: IAppData;
  setBusinessUnitsToTheStaff: React.Dispatch<
    React.SetStateAction<IBusinessUnitsPortalStaff[]>
  >;
}

export type { IUseSelectBusinessUnits };
