import { IStaffPortalByBusinessManager } from "@ptypes/staffPortal/IStaffPortalByBusinessManager";

const mapStaffPortalByBusinessManagerApiToEntity = (
  resend: IStaffPortalByBusinessManager,
): IStaffPortalByBusinessManager => {
  const buildResend: IStaffPortalByBusinessManager = {
    abbreviatedName: String(resend.abbreviatedName),
    businessManagerId: String(resend.businessManagerId),
    descriptionUse: String(resend.descriptionUse),
    publicCode: String(resend.publicCode),
    staffPortalCatalogId: String(resend.staffPortalCatalogId),
    staffPortalId: String(resend.staffPortalId),
    url: String(resend.url),
  };
  return buildResend;
};

export { mapStaffPortalByBusinessManagerApiToEntity };
