import { IEnumerators } from "@ptypes/IEnumerators";
import { mapEnumPayrollAgreementToEntity } from "../mapEnumToEntity";

const mapEnumPayrollAgreementToEntities = (
  enums: IEnumerators[],
): IEnumerators[] => {
  return enums.map(mapEnumPayrollAgreementToEntity);
};

export { mapEnumPayrollAgreementToEntities };
