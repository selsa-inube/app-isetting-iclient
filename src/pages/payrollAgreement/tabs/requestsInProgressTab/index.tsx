import { useContext } from "react";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider/authAndPortalData";
import { useRequestsInProgress } from "@hooks/payrollAgreement/useRequestsInProgress";
import { IEntry } from "@ptypes/design/table/IEntry";
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

  return (
    <RequestsInProgressTabUI
      entries={requestsInProgress as IEntry[]}
      loading={loading}
      searchrequestProgress={searchRequestsInProgress}
      onSearchrequestProgress={handleSearchRequestsInProgress}
      setEntryCanceled={setEntryCanceled}
      smallScreen={smallScreen}
      columnWidths={columnWidths}
    />
  );
};

export { RequestsInProgressTab };
