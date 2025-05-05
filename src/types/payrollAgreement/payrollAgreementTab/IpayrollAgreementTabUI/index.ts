import { IEntry } from "@ptypes/design/table/IEntry";

interface IpayrollAgreementTabUI {
  entries: IEntry[];
  loading: boolean;
  searchPayrollAgreement: string;
  smallScreen: boolean;
  columnWidths: number[];
  pageLength: number;
  setEntryDeleted: (id: string | number) => void;
  onSearchPayrollAgreement: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { IpayrollAgreementTabUI };
