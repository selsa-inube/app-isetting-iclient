import { IServerDomain } from "@ptypes/IServerDomain";
import { sourcesOfIncomeData } from "./sourcesOfIncome";
import { daysForApplicationData } from "./daysForApplication";
import { typeIdentCompanyData } from "./typeIdentificationCompany";

const domains: Record<string, IServerDomain[]> = {
  daysForApplication: daysForApplicationData,
  typeIdentCompany: typeIdentCompanyData,
  sourcesOfIncome: sourcesOfIncomeData,
};

const getDomainById = (domainId: string) => {
  return domains[domainId];
};

export { getDomainById };
