import { IAppData } from "@ptypes/context/IAppData";

interface IUseAppPage {
  appData: IAppData;
  businessUnitSigla: string;
  setBusinessUnitSigla: React.Dispatch<React.SetStateAction<string>>;
}

export type { IUseAppPage };
