import { IAction } from "../table/IAction";
import { IBreakpoint } from "../table/IBreakpoint";
import { IEntry } from "../table/IEntry";
import { ITitle } from "../table/ITitle";

interface ITable {
  entries: IEntry[];
  id: string;
  isLoading: boolean;
  titles: ITitle[];
  actions: IAction[];
  breakpoints: IBreakpoint[];
  filter?: string;
  infoTitle?: string;
  mobileTitle?: string;
  pageLength?: number;
  widthPercentageTotalColumns?: number;
  columnWidths?: number[];
  emptyDataMessage?: string;
  withActionsTitles?: boolean;
}

export type { ITable };
