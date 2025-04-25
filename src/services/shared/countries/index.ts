import { AxiosRequestConfig } from "axios";

import { getWithRetries } from "@services/core/getWithRetries";
import { ICountry } from "@ptypes/hooks/ICountry";
import { axiosInstance } from "@api/isaasQuery";
import { mapCountriesToEntities } from "./mappers";

const getCountriesData = async (): Promise<ICountry[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllCountryCatalog",
    },
  };
  const data: ICountry[] = await getWithRetries<ICountry[]>(
    axiosInstance,
    `/country-catalogs`,
    config,
  );
  return Array.isArray(data) ? mapCountriesToEntities(data) : [];
};

export { getCountriesData };
