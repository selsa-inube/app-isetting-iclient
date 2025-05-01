import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";
import { ILegalPerson } from "@ptypes/payrollAgreement/payrollAgreementTab/ILegalPerson";
import { queryProcessAxiosInstance } from "@api/isettingProcess/index.ts";
import { mapLegalPersonsToEntities } from "./mappers.ts";

const getLegalPersonsData = async (
  bussinesUnits: string,
): Promise<ILegalPerson[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllLegalPerson",
      "X-Business-unit": bussinesUnits,
    },
  };
  const data: ILegalPerson[] = await getWithRetries<ILegalPerson[]>(
    queryProcessAxiosInstance,
    `/legal-persons`,
    config,
  );
  return Array.isArray(data) ? mapLegalPersonsToEntities(data) : [];
};

export { getLegalPersonsData };
