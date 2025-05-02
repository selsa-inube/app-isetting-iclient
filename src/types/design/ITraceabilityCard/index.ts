import { ILabel } from "@ptypes/ILabel";
import { IEntry } from "../table/IEntry";

interface ITraceabilityCard {
  data: IEntry;
  labels: ILabel[];
  isMobile: boolean;
}

export type { ITraceabilityCard };
