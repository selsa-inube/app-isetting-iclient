import { IEnumerators } from "@ptypes/IEnumerators";

const mapEnumPayrollAgreementToEntity = (
  enumData: IEnumerators,
): IEnumerators => {
  const business: IEnumerators = {
    code: String(enumData.code),
    description: String(enumData.description),
    value: String(enumData.value),
  };
  return business;
};

export { mapEnumPayrollAgreementToEntity };
