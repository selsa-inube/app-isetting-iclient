import { useContext } from "react";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider/authAndPortalData";
import { useRequestsInProgress } from "@hooks/payrollAgreement/useRequestsInProgress";
import { IEntry } from "@ptypes/design/table/IEntry";
import { usePageLength } from "@hooks/usePageLength";
import { RequestsInProgressTabUI } from "./interface";

const RequestsInProgressTab = () => {
  const { appData } = useContext(AuthAndPortalData);

  const {
    requestsInProgress,
    searchRequestsInProgress,
    loading,
    smallScreen,
    columnWidths,
    handleSearchRequestsInProgress,
    setEntryCanceled,
  } = useRequestsInProgress({ bussinesUnits: appData.businessUnit.publicCode });

  const pageLength = usePageLength();

  return (
    <RequestsInProgressTabUI
      entries={requestsInProgress as IEntry[]}
      loading={loading}
      searchrequestProgress={searchRequestsInProgress}
      onSearchrequestProgress={handleSearchRequestsInProgress}
      setEntryCanceled={setEntryCanceled}
      smallScreen={smallScreen}
      columnWidths={columnWidths}
      pageLength={pageLength}
    />
  );
};

export { RequestsInProgressTab };
