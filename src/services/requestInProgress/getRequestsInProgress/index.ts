import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";
import { axiosInstance } from "@api/isettingProcess";
import { IRequestsInProgress } from "@ptypes/payrollAgreement/requestInProgTab/IRequestsInProgress";
import { mapRequestsInProgressToEntities } from "./mappers";

const getRequestsInProgress = async (
  bussinesUnits: string,
  entity: string,
): Promise<IRequestsInProgress[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchPendingConfigurationRequest",
      "X-Business-unit": bussinesUnits,
    },
  };

  const queryParams = new URLSearchParams({
    applicationName: "ifac",
    entityName: entity,
    page: ".1",
    per_page: ".1",
    sort: "desc.requestDate",
  });
  const data = await getWithRetries<IRequestsInProgress[]>(
    axiosInstance,
    `/requests/business-unit/${bussinesUnits}?${queryParams.toString()}`,
    config,
  );
  return Array.isArray(data) ? mapRequestsInProgressToEntities(data) : [];
};

export { getRequestsInProgress };
