import { useContext } from "react";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { useRequestsInProgress } from "@hooks/payrollAgreement/useRequestsInProgress";
import { IEntry } from "@ptypes/design/table/IEntry";
import { RequestsInProgressTabUI } from "./interface";

const RequestsInProgressTab = () => {
  const { appData } = useContext(AuthAndPortalData);

  const {
    requestsInProgress,
    searchRequestsInProgress,
    loading,
    widthFirstColumn,
    smallScreen,
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
      widthFirstColumn={widthFirstColumn}
      smallScreen={smallScreen}
    />
  );
};

export { RequestsInProgressTab };
