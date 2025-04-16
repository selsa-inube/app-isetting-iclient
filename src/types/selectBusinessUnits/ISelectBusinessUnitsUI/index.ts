import { IAppData } from "@ptypes/context/IAppData";

interface ISelectBusinessUnitsUI {
  appData: IAppData;
  screenTablet: boolean;
  screenDesktop: boolean;
  imageWidth: () => string;
}

export type { ISelectBusinessUnitsUI };
