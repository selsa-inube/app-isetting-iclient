import { ILabel } from "@ptypes/ILabel";
import { IEntry } from "../table/IEntry";

interface IRenderDetailBox {
  data: IEntry;
  field: ILabel;
  id: number;
  isMobile: boolean;
  withTag?: boolean;
}

export type { IRenderDetailBox };
