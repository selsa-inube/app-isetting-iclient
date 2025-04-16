import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { getBusinessUnitsPortalStaff } from "@services/staffPortal/getBusinessUnits";
import { IUseValidateBusinessUnities } from "@ptypes/selectBusinessUnits/IUseValidateBusinessUnities";

const useValidateBusinessUnities = async (
  props: IUseValidateBusinessUnities,
): Promise<IBusinessUnitsPortalStaff[]> => {
  const { publicCode, userAccount } = props;
  const newData = await getBusinessUnitsPortalStaff(publicCode, userAccount);

  return newData;
};

export { useValidateBusinessUnities };
