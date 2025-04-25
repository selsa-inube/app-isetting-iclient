import { IVerificationBoxes } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IVerificationBoxes";
import {
  renderCompanyVerification,
  renderExtraordinaryVerification,
  renderGeneralinfoVerification,
  renderRegularVerification,
} from "./utils";

const VerificationBoxes = (props: IVerificationBoxes) => {
  const { updatedData, stepKey, typeRegularPayroll, isMobile } = props;

  const showOrdinaryCycles =
    stepKey === 3 &&
    typeRegularPayroll &&
    updatedData.ordinaryCycles.values.length > 0;
  const showExtraordinaryCycles =
    stepKey === 4 && updatedData.extraordinaryCycles.values.length >= 1;

  return (
    <>
      {stepKey === 1 &&
        renderCompanyVerification(updatedData.company.values, isMobile)}
      {stepKey === 2 &&
        renderGeneralinfoVerification(
          updatedData.generalInformation.values,
          isMobile,
        )}
      {showOrdinaryCycles &&
        renderRegularVerification(updatedData.ordinaryCycles.values, isMobile)}
      {showExtraordinaryCycles &&
        renderExtraordinaryVerification(
          updatedData.extraordinaryCycles.values,
          isMobile,
        )}
    </>
  );
};

export { VerificationBoxes };
