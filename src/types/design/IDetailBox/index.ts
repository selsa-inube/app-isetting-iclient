import { IEntry } from "../table/IEntry";

interface IDetailBox {
  field: { id: string; titleName: string };
  data: IEntry;
  id: number;
  width: string;
  backgroundColor: string;
  borderRadius?: string;
  padding?: string;
  borderColor?: string;
  withTag?: boolean;
  ellipsis?: boolean;
}

export type { IDetailBox };
