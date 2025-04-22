import { IBusinessManagers } from "@ptypes/staffPortal/IBusinessManagers";
import { IStaffPortalByBusinessManager } from "@ptypes/staffPortal/IStaffPortalByBusinessManager";

interface IUseAuthRedirect {
  portalPublicCode: IStaffPortalByBusinessManager;
  businessManagersData: IBusinessManagers;
  portalIdentifier: string | null;
}
export type { IUseAuthRedirect };
