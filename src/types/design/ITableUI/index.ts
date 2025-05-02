import { IAction } from "../table/IAction";
import { IEntry } from "../table/IEntry";
import { ITitle } from "../table/ITitle";

interface ITableUI {
  actions: IAction[];
  entriesLength: number;
  entries: IEntry[];
  filteredEntries: IEntry[];
  firstEntryInPage: number;
  isLoading: boolean;
  lastEntryInPage: number;
  pageLength: number;
  titles: ITitle[];
  mobileTitle?: string;
  widthPercentageTotalColumns?: number;
  columnWidths?: number[];
  goToEndPage: () => void;
  goToFirstPage: () => void;
  nextPage: () => void;
  prevPage: () => void;
  mediaActionOpen: boolean;
  numberActions: number;
  TitleColumns: ITitle[];
  emptyDataMessage?: string;
  withActionsTitles?: boolean;
}

export type { ITableUI };
