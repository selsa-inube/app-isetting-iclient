import { useContext } from "react";
import { usePayrollAgreementTab } from "@hooks/payrollAgreement/usePayrollAgreementTab";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider/authAndPortalData";
import { IEntry } from "@ptypes/design/table/IEntry";
import { usePageLength } from "@hooks/usePageLength";
import { PayrollAgreementTabUI } from "./interface";

const PayrollAgreementTab = () => {
  const { appData } = useContext(AuthAndPortalData);

  const {
    payrollAgreement,
    searchPayrollAgreement,
    loading,
    smallScreen,
    columnWidths,
    setEntryDeleted,
    handleSearchPayrollAgreement,
  } = usePayrollAgreementTab({
    bussinesUnits: appData.businessUnit.publicCode,
  });

  const pageLength = usePageLength();

  return (
    <PayrollAgreementTabUI
      onSearchPayrollAgreement={handleSearchPayrollAgreement}
      searchPayrollAgreement={searchPayrollAgreement}
      loading={loading}
      entries={payrollAgreement as IEntry[]}
      setEntryDeleted={setEntryDeleted}
      smallScreen={smallScreen}
      columnWidths={columnWidths}
      pageLength={pageLength}
    />
  );
};

export { PayrollAgreementTab };
