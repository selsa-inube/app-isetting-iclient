import { IDetailsTabsConfig } from "@ptypes/payrollAgreement/requestInProgTab/IDetailsTabsConfig";
import { IEntry } from "@ptypes/design/table/IEntry";

interface IUseDetailsPayrollAgreement {
  data: IEntry;
  detailsTabsConfig: IDetailsTabsConfig;
}
export type { IUseDetailsPayrollAgreement };
