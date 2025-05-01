import { IVerificationBoxes } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IVerificationBoxes";
import { RenderCompanyVerification } from "../companyVerification";
import { RenderGeneralinfoVerification } from "../GeneralinfoVerification";
import { RenderRegularVerification } from "../RegularVerification";
import { RenderExtraordinaryVerification } from "../ExtraordinaryVerification";

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
      {stepKey === 1 && (
        <RenderCompanyVerification
          values={updatedData.company.values}
          isMobile={isMobile}
        />
      )}
      {stepKey === 2 && (
        <RenderGeneralinfoVerification
          values={updatedData.generalInformation.values}
          isMobile={isMobile}
        />
      )}
      {showOrdinaryCycles && (
        <RenderRegularVerification
          values={updatedData.ordinaryCycles.values}
          isMobile={isMobile}
        />
      )}
      {showExtraordinaryCycles && (
        <RenderExtraordinaryVerification
          values={updatedData.extraordinaryCycles.values}
          isMobile={isMobile}
        />
      )}
    </>
  );
};

export { VerificationBoxes };
