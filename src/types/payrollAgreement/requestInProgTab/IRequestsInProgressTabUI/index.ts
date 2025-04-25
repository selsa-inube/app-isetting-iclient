import { IEntry } from "@ptypes/design/table/IEntry";

interface IRequestsInProgressTabUI {
  entries: IEntry[];
  loading: boolean;
  searchrequestProgress: string;
  widthFirstColumn: number;
  smallScreen: boolean;
  setEntryCanceled: (value: string | number) => void;
  onSearchrequestProgress: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { IRequestsInProgressTabUI };
