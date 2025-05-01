import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { getBusinessUnitsPortalStaff } from "@services/staffPortal/getBusinessUnits";
import { IUseValidateBusinessUnities } from "@ptypes/selectBusinessUnits/IUseValidateBusinessUnities";
import { validateAndTrimString } from "@utils/validateAndTrimString";

const useValidateBusinessUnities = async (
  props: IUseValidateBusinessUnities,
): Promise<IBusinessUnitsPortalStaff[]> => {
  const { publicCode, userAccount } = props;

  const user = validateAndTrimString(userAccount);

  console.log({ user });
  const newData = await getBusinessUnitsPortalStaff(publicCode, user);

  return newData;
};

export { useValidateBusinessUnities };
