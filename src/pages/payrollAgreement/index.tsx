import { useContext } from "react";

import { AuthAndPortalData } from "@context/authAndPortalDataProvider/authAndPortalData";
import { ICardData } from "@ptypes/home/ICardData";
import { payrollAgreementTabsConfig } from "@config/payrollAgreement/tabs";
import { usePayrollAgreementPage } from "@hooks/payrollAgreement/usePayrollAgreementPage";
import { PayrollAgreementUI } from "./interface";

const PayrollAgreement = () => {
  const { businessUnitSigla, appData } = useContext(AuthAndPortalData);
  const {
    isSelected,
    descriptionOptions,
    showPayrollAgreementTab,
    showRequestsInProgressTab,
    smallScreen,
    smallScreenTab,
    payrollAgreementTabs,
    handleTabChange,
  } = usePayrollAgreementPage({ businessUnitSigla });

  console.log(appData);

  return (
    <PayrollAgreementUI
      isSelected={isSelected ?? payrollAgreementTabsConfig.payrollAgreement.id}
      handleTabChange={handleTabChange}
      descriptionOptions={descriptionOptions as ICardData}
      showPayrollAgreementTab={showPayrollAgreementTab}
      showRequestsInProgressTab={showRequestsInProgressTab}
      smallScreen={smallScreen}
      smallScreenTab={smallScreenTab}
      payrollAgreementTabs={payrollAgreementTabs}
    />
  );
};

export { PayrollAgreement };
