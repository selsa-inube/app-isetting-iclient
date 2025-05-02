import { IStaffPortalByBusinessManager } from "@ptypes/staffPortal/IStaffPortalByBusinessManager";
import { mapStaffPortalByBusinessManagerApiToEntity } from "../../mappers";

const mapStaffPortalByBusinessManagerApiToEntities = (
  resend: IStaffPortalByBusinessManager[],
): IStaffPortalByBusinessManager[] => {
  return resend.map(mapStaffPortalByBusinessManagerApiToEntity);
};
export { mapStaffPortalByBusinessManagerApiToEntities };
